/* ──────────────────────────────────────────────────────────────────
   Sounds — Web Audio API synth, no external files needed.
   All functions are fire-and-forget and silently fail on any error.
────────────────────────────────────────────────────────────────── */

let sharedCtx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!sharedCtx || sharedCtx.state === 'closed') {
    sharedCtx = new (
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    )();
  }
  if (sharedCtx.state === 'suspended') {
    void sharedCtx.resume();
  }
  return sharedCtx;
}

/* Whoosh + soft impact — card flying into trash */
export function playTrashSound(): void {
  try {
    const a = getCtx();
    const t = a.currentTime;
    const len = Math.floor(a.sampleRate * 0.26);
    const buf = a.createBuffer(1, len, a.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 1.8);
    }
    const src = a.createBufferSource();
    src.buffer = buf;

    const filt = a.createBiquadFilter();
    filt.type = 'bandpass';
    filt.frequency.setValueAtTime(900, t);
    filt.frequency.exponentialRampToValueAtTime(160, t + 0.2);
    filt.Q.value = 1.4;

    const g = a.createGain();
    g.gain.setValueAtTime(0.28, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.26);

    src.connect(filt);
    filt.connect(g);
    g.connect(a.destination);
    src.start(t);
  } catch {
    /* silently ignore */
  }
}

/* Rising "ding" — single member flying back from trash */
export function playRestoreSound(): void {
  try {
    const a = getCtx();
    const t = a.currentTime;

    const osc1 = a.createOscillator();
    const osc2 = a.createOscillator();
    const g = a.createGain();

    osc1.connect(g);
    osc2.connect(g);
    g.connect(a.destination);

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(280, t);
    osc1.frequency.exponentialRampToValueAtTime(680, t + 0.12);
    osc1.frequency.exponentialRampToValueAtTime(540, t + 0.28);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(420, t + 0.04);
    osc2.frequency.exponentialRampToValueAtTime(900, t + 0.16);
    osc2.frequency.exponentialRampToValueAtTime(720, t + 0.32);

    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.09, t + 0.025);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.38);

    osc1.start(t);
    osc1.stop(t + 0.4);
    osc2.start(t + 0.04);
    osc2.stop(t + 0.4);
  } catch {
    /* silently ignore */
  }
}

/* Ascending pentatonic xylophone note — one per member in restore-all cascade */
const PENTA = [523.25, 587.33, 659.25, 783.99, 880.0]; // C5 D5 E5 G5 A5

export function playRestoreChime(index: number): void {
  try {
    const a = getCtx();
    const t = a.currentTime;
    const freq = PENTA[index % PENTA.length];

    const osc = a.createOscillator();
    const overtone = a.createOscillator();
    const g = a.createGain();

    osc.connect(g);
    overtone.connect(g);
    g.connect(a.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.04, t + 0.06);

    overtone.type = 'sine';
    overtone.frequency.setValueAtTime(freq * 2.76, t);
    overtone.frequency.exponentialRampToValueAtTime(freq * 2.76 * 1.02, t + 0.04);

    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.1, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.52);

    osc.start(t);
    osc.stop(t + 0.54);
    overtone.start(t);
    overtone.stop(t + 0.54);
  } catch {
    /* silently ignore */
  }
}
