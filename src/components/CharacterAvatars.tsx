/* ──────────────────────────────────────────────────────────────────
   Illustrated SVG Avatars — Flat circular portrait style
   Inspired by minimal character icon art: clean lines, flat fills,
   characters from bust/shoulder up inside circular compositions
────────────────────────────────────────────────────────────────── */

export function GojoAvatar() {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <clipPath id="g-clip">
          <circle cx="60" cy="60" r="58" />
        </clipPath>
        <radialGradient id="g-bg" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#080618" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="60" fill="#0a0820" />
      <circle cx="60" cy="60" r="58" fill="url(#g-bg)" />
      <g clipPath="url(#g-clip)">
        {/* Infinity glow bg */}
        <ellipse cx="60" cy="52" rx="50" ry="42" fill="#4338ca" opacity="0.07" />

        {/* Body — high collar black jacket */}
        <path d="M0 120 Q22 86 60 83 Q98 86 120 120 Z" fill="#0d1117" />
        {/* Jacket collar fold */}
        <path d="M44 83 Q52 89 60 87 Q68 89 76 83 Q72 93 60 95 Q48 93 44 83 Z" fill="#111827" />
        <path d="M49 83 Q55 88 60 87 Q65 88 71 83 Q69 91 60 92 Q51 91 49 83 Z" fill="#1e293b" />

        {/* Neck */}
        <rect x="53" y="73" width="14" height="13" rx="7" fill="#f0d8b4" />

        {/* Head — slightly tapered jaw */}
        <path
          d="M32 55 Q30 68 32 76 Q36 86 60 88 Q84 86 88 76 Q90 68 88 55 Q88 30 60 28 Q32 30 32 55 Z"
          fill="#f0d8b4"
        />

        {/* Ears */}
        <ellipse cx="31" cy="62" rx="4.5" ry="6" fill="#e0c8a0" />
        <ellipse cx="89" cy="62" rx="4.5" ry="6" fill="#e0c8a0" />
        <ellipse cx="31" cy="62" rx="2" ry="3.5" fill="#c8a870" />
        <ellipse cx="89" cy="62" rx="2" ry="3.5" fill="#c8a870" />

        {/* WHITE HAIR */}
        {/* Back layer — wide base */}
        <path d="M28 58 Q20 44 22 28 Q26 14 34 22 Q32 38 32 58 Z" fill="#eeeeee" />
        <path d="M92 58 Q100 44 98 28 Q94 14 86 22 Q88 38 88 58 Z" fill="#eeeeee" />
        {/* Middle puff layers */}
        <path d="M30 50 Q24 36 28 20 Q34 8 40 18 Q38 32 36 50 Z" fill="#f8f8f8" />
        <path d="M90 50 Q96 36 92 20 Q86 8 80 18 Q82 32 84 50 Z" fill="#f8f8f8" />
        {/* Front hair top  */}
        <path
          d="M34 44 Q36 22 48 14 Q60 8 72 14 Q84 22 86 44 Q76 32 60 30 Q44 32 34 44 Z"
          fill="#f4f4f4"
        />
        <path
          d="M36 36 Q38 16 50 9 Q60 4 70 9 Q82 16 84 36 Q72 24 60 22 Q48 24 36 36 Z"
          fill="#fafafa"
        />
        <path d="M40 28 Q44 10 60 6 Q76 10 80 28 Q70 18 60 16 Q50 18 40 28 Z" fill="#ffffff" />
        {/* Volume shadow */}
        <path
          d="M36 46 Q44 36 54 34 Q60 33 66 34 Q76 36 84 46 Q72 40 60 39 Q48 40 36 46 Z"
          fill="#cccccc"
          opacity="0.7"
        />
        {/* Side hair wisps */}
        <path d="M28 62 Q22 56 22 46 Q24 38 30 42 Q30 52 30 62 Z" fill="#e8e8e8" />
        <path d="M92 62 Q98 56 98 46 Q96 38 90 42 Q90 52 90 62 Z" fill="#e8e8e8" />

        {/* BLINDFOLD */}
        <rect x="30" y="53" width="60" height="15" rx="5" fill="#0a0a0a" />
        <rect x="30" y="53" width="60" height="5" rx="4" fill="#161616" />
        {/* Infinity glow behind blindfold */}
        <ellipse cx="60" cy="60" rx="14" ry="5" fill="#818CF8" opacity="0.22" />
        <ellipse cx="60" cy="60" rx="7" ry="2.5" fill="#818CF8" opacity="0.35" />
        {/* Subtle blindfold highlight */}
        <path
          d="M34 56 Q60 54 86 56"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Confident smirk */}
        <path
          d="M48 76 Q56 82 60 80 Q64 82 72 76"
          fill="none"
          stroke="#c4917a"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* floating particles */}
        {[
          [20, 26],
          [96, 22],
          [16, 72],
          [100, 68],
          [60, 12],
          [12, 48],
          [106, 42],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i % 2 === 0 ? 2 : 1.2}
            fill="#818CF8"
            opacity={0.28 + i * 0.05}
          />
        ))}
      </g>
      <circle cx="60" cy="60" r="58" fill="none" stroke="#818CF8" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}

export function LuffyAvatar() {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <clipPath id="l-clip">
          <circle cx="60" cy="60" r="58" />
        </clipPath>
        <linearGradient id="l-bg" x1="0%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="55%" stopColor="#4fa8cc" />
          <stop offset="100%" stopColor="#1a6090" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="60" fill="#1a4f6e" />
      <circle cx="60" cy="60" r="58" fill="url(#l-bg)" />
      <g clipPath="url(#l-clip)">
        {/* Ocean waves */}
        <path
          d="M0 100 Q30 94 60 97 Q90 94 120 100 L120 120 L0 120 Z"
          fill="#1060a0"
          opacity="0.35"
        />
        {/* Clouds */}
        <ellipse cx="18" cy="24" rx="14" ry="7" fill="white" opacity="0.88" />
        <ellipse cx="28" cy="20" rx="9" ry="6" fill="white" opacity="0.88" />
        <ellipse cx="88" cy="18" rx="16" ry="8" fill="white" opacity="0.75" />
        <ellipse cx="100" cy="14" rx="10" ry="6" fill="white" opacity="0.7" />

        {/* Body — red vest */}
        <path d="M6 120 Q26 82 60 80 Q94 82 114 120 Z" fill="#CC1A00" />
        <path d="M48 80 Q60 75 72 80 L70 120 L50 120 Z" fill="#aa1a00" />
        {/* Vest V-neck */}
        <path d="M48 80 Q54 88 60 86 L60 120 L50 120 Z" fill="#991400" />
        <path d="M72 80 Q66 88 60 86 L60 120 L70 120 Z" fill="#991400" />
        {/* Vest edge details */}
        <path d="M50 80 Q56 88 60 87" stroke="#881200" strokeWidth="1" fill="none" opacity="0.6" />
        <path d="M70 80 Q64 88 60 87" stroke="#881200" strokeWidth="1" fill="none" opacity="0.6" />

        {/* Neck */}
        <rect x="53" y="70" width="14" height="13" rx="7" fill="#cc9966" />

        {/* Head */}
        <ellipse cx="60" cy="58" rx="27" ry="27" fill="#cc9966" />

        {/* Ears */}
        <ellipse cx="33" cy="60" rx="5" ry="6.5" fill="#bb8855" />
        <ellipse cx="87" cy="60" rx="5" ry="6.5" fill="#bb8855" />
        <ellipse cx="33" cy="60" rx="2.5" ry="4" fill="#aa7040" />
        <ellipse cx="87" cy="60" rx="2.5" ry="4" fill="#aa7040" />

        {/* Short black hair at sides */}
        <path d="M35 54 Q30 46 33 38 Q36 32 40 38 Q38 46 38 54 Z" fill="#111" />
        <path d="M38 62 Q31 54 30 46 Q33 40 38 44 Q39 52 40 62 Z" fill="#1a1a1a" />
        <path d="M85 54 Q90 46 87 38 Q84 32 80 38 Q82 46 82 54 Z" fill="#111" />
        <path d="M82 62 Q89 54 90 46 Q87 40 82 44 Q81 52 80 62 Z" fill="#1a1a1a" />

        {/* STRAW HAT  */}
        <ellipse cx="60" cy="40" rx="38" ry="13" fill="#C8920A" />
        <ellipse cx="60" cy="35" rx="25" ry="22" fill="#E8B420" />
        <ellipse cx="60" cy="34" rx="23" ry="20" fill="#DDA015" />
        <ellipse cx="60" cy="33" rx="22" ry="19" fill="#E8B420" />
        {/* Hat texture/shade */}
        <path
          d="M42 32 Q50 26 60 24 Q70 26 78 32 Q70 28 60 27 Q50 28 42 32 Z"
          fill="#C08010"
          opacity="0.55"
        />
        <path
          d="M38 40 Q50 46 60 44 Q70 46 82 40"
          stroke="#C08010"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
        {/* Hat band — wide red stripe */}
        <path d="M22 40 Q60 52 98 40 Q96 50 60 58 Q24 50 22 40 Z" fill="#CC1A00" opacity="0.96" />
        <path d="M24 41 Q60 52 96 41 Q94 49 60 56 Q26 49 24 41 Z" fill="#aa1400" />
        {/* Hat underside shadow */}
        <ellipse cx="60" cy="57" rx="24" ry="6" fill="#880a00" opacity="0.3" />

        {/* Eyes  */}
        <ellipse cx="50" cy="62" rx="7.5" ry="7.5" fill="white" />
        <ellipse cx="70" cy="62" rx="7.5" ry="7.5" fill="white" />
        <ellipse cx="50" cy="63" rx="5" ry="5.2" fill="#111" />
        <ellipse cx="70" cy="63" rx="5" ry="5.2" fill="#111" />
        <circle cx="52" cy="60.5" r="1.8" fill="white" />
        <circle cx="72" cy="60.5" r="1.8" fill="white" />

        {/* X scar under LEFT eye */}
        <line
          x1="43"
          y1="68"
          x2="50"
          y2="73"
          stroke="#cc1a1a"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <line
          x1="50"
          y1="68"
          x2="43"
          y2="73"
          stroke="#cc1a1a"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Nose — simple */}
        <ellipse cx="60" cy="68" rx="2.5" ry="2" fill="#b07a4a" opacity="0.55" />

        {/* HUGE grin — signature Luffy */}
        <path d="M40 74 Q52 88 60 86 Q68 88 80 74" fill="#991a00" />
        <path
          d="M40 74 Q52 86 60 84 Q68 86 80 74 L80 75 Q68 89 60 87 Q52 89 40 75 Z"
          fill="#CC2200"
        />
        {/* Teeth — wide grin */}
        <path
          d="M44 75 Q52 84 60 82 Q68 84 76 75 L76 76 Q68 86 60 84 Q52 86 44 76 Z"
          fill="white"
        />
      </g>
      <circle
        cx="60"
        cy="60"
        r="58"
        fill="none"
        stroke="#F87171"
        strokeWidth="1.5"
        opacity="0.28"
      />
    </svg>
  );
}

export function NarutoAvatar() {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <clipPath id="n-clip">
          <circle cx="60" cy="60" r="58" />
        </clipPath>
        <radialGradient id="n-bg" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF9040" />
          <stop offset="55%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#5C1D06" />
        </radialGradient>
        <linearGradient id="n-hb" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.25)" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="60" fill="#6C2206" />
      <circle cx="60" cy="60" r="58" fill="url(#n-bg)" />
      <g clipPath="url(#n-clip)">
        {/* Chakra wisps background */}
        <path
          d="M10 42 Q22 30 14 16"
          fill="none"
          stroke="#FCD34D"
          strokeWidth="2.5"
          opacity="0.45"
          strokeLinecap="round"
        />
        <path
          d="M110 50 Q98 34 104 20"
          fill="none"
          stroke="#FCD34D"
          strokeWidth="2"
          opacity="0.4"
          strokeLinecap="round"
        />

        {/* Body — orange jacket */}
        <path d="M6 120 Q26 78 60 76 Q94 78 114 120 Z" fill="#EA580C" />
        <path d="M48 76 Q60 71 72 76 L70 120 L50 120 Z" fill="#C2410C" />
        {/* White collar */}
        <path
          d="M46 75 Q54 82 60 79 Q66 82 74 75 Q71 84 60 86 Q49 84 46 75 Z"
          fill="#f5f5f5"
          opacity="0.92"
        />
        <path
          d="M50 75 Q55 80 60 78 Q65 80 70 75 Q68 82 60 83 Q52 82 50 75 Z"
          fill="white"
          opacity="0.6"
        />

        {/* Neck */}
        <rect x="53" y="66" width="14" height="14" rx="7" fill="#F0D4A0" />

        {/* Head */}
        <ellipse cx="60" cy="53" rx="27" ry="28" fill="#F0D4A0" />

        {/* Ears */}
        <ellipse cx="33" cy="56" rx="5" ry="6.5" fill="#e0c490" />
        <ellipse cx="87" cy="56" rx="5" ry="6.5" fill="#e0c490" />
        <ellipse cx="33" cy="56" rx="2.5" ry="4" fill="#c8a870" />
        <ellipse cx="87" cy="56" rx="2.5" ry="4" fill="#c8a870" />

        {/* BLONDE SPIKY HAIR  */}
        {/* Back big spikes */}
        <path d="M26 48 Q18 34 22 20 Q26 12 32 22 Q30 36 30 48 Z" fill="#F59E0B" />
        <path d="M32 42 Q26 26 30 14 Q35 6 38 16 Q37 30 36 42 Z" fill="#FBBF24" />
        <path d="M38 36 Q35 20 42 12 Q47 6 48 16 Q47 28 44 36 Z" fill="#FCD34D" />
        <path d="M50 30 Q48 14 56 8 Q62 4 66 12 Q64 24 60 30 Z" fill="#FBBF24" />
        <path d="M68 34 Q70 18 78 12 Q82 8 82 18 Q80 30 74 34 Z" fill="#FCD34D" />
        <path d="M76 42 Q80 26 86 18 Q90 12 90 24 Q88 36 82 42 Z" fill="#FBBF24" />
        <path d="M82 48 Q88 34 94 24 Q98 16 96 28 Q94 40 88 48 Z" fill="#F59E0B" />
        {/* Front hair layer */}
        <path d="M32 50 Q42 38 60 36 Q78 38 88 50 Q76 44 60 42 Q44 44 32 50 Z" fill="#D97706" />
        {/* Front forehead wisps */}
        <path d="M36 48 Q40 36 44 34 Q46 34 44 42 Q42 46 36 48 Z" fill="#FCD34D" />
        <path d="M46 42 Q48 32 52 30 Q54 30 52 38 Q50 41 46 42 Z" fill="#FDE68A" />
        <path d="M84 48 Q80 36 76 34 Q74 34 76 42 Q78 46 84 48 Z" fill="#FCD34D" />

        {/* HEADBAND */}
        <rect x="33" y="46" width="54" height="14" rx="3.5" fill="#4B5563" />
        <rect x="33" y="46" width="54" height="14" rx="3.5" fill="url(#n-hb)" />
        {/* Metal plate */}
        <rect x="39" y="48" width="42" height="10" rx="2.5" fill="#8B96A0" />
        <rect x="40" y="49" width="40" height="8" rx="2" fill="#C8D0D8" />
        {/* Leaf village symbol */}
        <circle cx="60" cy="53" r="3.5" fill="none" stroke="#5A6370" strokeWidth="1.3" />
        <path d="M60 49.5 L60 56.5" stroke="#5A6370" strokeWidth="1.3" />
        <path
          d="M57 53 Q58.5 51 60 53 Q61.5 51 63 53"
          fill="none"
          stroke="#5A6370"
          strokeWidth="0.9"
        />

        {/* Eyes */}
        <ellipse cx="49" cy="62" rx="6" ry="5.5" fill="white" />
        <ellipse cx="71" cy="62" rx="6" ry="5.5" fill="white" />
        <ellipse cx="49" cy="62" rx="4.2" ry="4" fill="#2563EB" />
        <ellipse cx="71" cy="62" rx="4.2" ry="4" fill="#2563EB" />
        <ellipse cx="49" cy="62" rx="2.5" ry="2.6" fill="#1D4ED8" />
        <ellipse cx="71" cy="62" rx="2.5" ry="2.6" fill="#1D4ED8" />
        <circle cx="50.5" cy="60.2" r="1.3" fill="white" />
        <circle cx="72.5" cy="60.2" r="1.3" fill="white" />

        {/* WHISKER MARKS */}
        <line
          x1="18"
          y1="58"
          x2="41"
          y2="61"
          stroke="#a06040"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.95"
        />
        <line
          x1="16"
          y1="63"
          x2="41"
          y2="64.5"
          stroke="#a06040"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.95"
        />
        <line
          x1="18"
          y1="68"
          x2="41"
          y2="68"
          stroke="#a06040"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.95"
        />
        <line
          x1="102"
          y1="58"
          x2="79"
          y2="61"
          stroke="#a06040"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.95"
        />
        <line
          x1="104"
          y1="63"
          x2="79"
          y2="64.5"
          stroke="#a06040"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.95"
        />
        <line
          x1="102"
          y1="68"
          x2="79"
          y2="68"
          stroke="#a06040"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.95"
        />

        {/* Nose */}
        <ellipse cx="60" cy="70" rx="2" ry="1.5" fill="#c8986c" opacity="0.55" />

        {/* determined grin */}
        <path
          d="M50 75 Q55 71 60 72 Q65 71 70 75"
          fill="none"
          stroke="#b07a5a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <circle
        cx="60"
        cy="60"
        r="58"
        fill="none"
        stroke="#FB923C"
        strokeWidth="1.5"
        opacity="0.32"
      />
    </svg>
  );
}

export function KilluaAvatar() {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <clipPath id="k-clip">
          <circle cx="60" cy="60" r="58" />
        </clipPath>
        <radialGradient id="k-bg" cx="50%" cy="20%" r="75%">
          <stop offset="0%" stopColor="#B8E0F7" />
          <stop offset="45%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#082540" />
        </radialGradient>
        <radialGradient id="k-glow" cx="50%" cy="75%" r="55%">
          <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="60" fill="#082540" />
      <circle cx="60" cy="60" r="58" fill="url(#k-bg)" />
      <g clipPath="url(#k-clip)">
        <circle cx="60" cy="75" r="45" fill="url(#k-glow)" />
        {/* Lightning bolts — Killua's nen */}
        <path
          d="M14 20 L18 30 L13 30 L17 44"
          fill="none"
          stroke="#FDE68A"
          strokeWidth="2.5"
          opacity="0.65"
          strokeLinejoin="round"
        />
        <path
          d="M102 28 L105 37 L101 37 L104 47"
          fill="none"
          stroke="#FDE68A"
          strokeWidth="2"
          opacity="0.55"
          strokeLinejoin="round"
        />
        <path
          d="M18 72 L21 79 L18 79 L21 86"
          fill="none"
          stroke="#FDE68A"
          strokeWidth="1.8"
          opacity="0.4"
          strokeLinejoin="round"
        />
        {/* Snow */}
        {[
          [16, 63],
          [96, 58],
          [10, 38],
          [104, 48],
          [28, 88],
          [90, 83],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.3" fill="white" opacity="0.55" />
        ))}

        {/* Body — dark turtleneck */}
        <path d="M8 120 Q26 78 60 76 Q94 78 112 120 Z" fill="#04304E" />
        <path d="M46 76 Q60 72 74 76 L72 120 L48 120 Z" fill="#055075" />
        {/* Turtleneck high collar */}
        <path d="M44 76 Q60 84 76 76 Q73 90 60 92 Q47 90 44 76 Z" fill="#046090" />
        <path d="M48 76 Q60 82 72 76 Q70 87 60 89 Q50 87 48 76 Z" fill="#0284C7" opacity="0.55" />

        {/* Neck */}
        <rect x="53" y="66" width="14" height="13" rx="7" fill="#f0e8e0" />

        {/* Head */}
        <ellipse cx="60" cy="54" rx="27" ry="28" fill="#f0e8e0" />

        {/* Ears */}
        <ellipse cx="33" cy="56" rx="5" ry="6.5" fill="#e0d4c8" />
        <ellipse cx="87" cy="56" rx="5" ry="6.5" fill="#e0d4c8" />
        <ellipse cx="33" cy="56" rx="2.5" ry="4" fill="#c8b8a8" />
        <ellipse cx="87" cy="56" rx="2.5" ry="4" fill="#c8b8a8" />

        {/* SILVER-WHITE SPIKY HAIR — Killua's */}
        {/* Back spikes, swept outward */}
        <path d="M26 50 Q18 36 22 22 Q26 12 32 22 Q30 36 30 50 Z" fill="#e0e0ee" />
        <path d="M30 44 Q24 28 28 16 Q32 8 36 18 Q35 30 34 44 Z" fill="#d0d0e0" />
        <path d="M36 38 Q32 20 38 12 Q43 6 46 16 Q45 28 42 38 Z" fill="#eaeaf4" />
        <path d="M48 32 Q46 14 54 8 Q60 4 66 10 Q64 22 60 32 Z" fill="#d8d8e8" />
        <path d="M70 34 Q72 16 80 10 Q86 6 86 16 Q84 28 78 34 Z" fill="#eaeaf4" />
        <path d="M78 42 Q84 26 90 18 Q94 12 93 24 Q91 34 86 42 Z" fill="#d0d0e0" />
        <path d="M84 50 Q90 36 96 26 Q100 18 98 30 Q96 40 90 50 Z" fill="#e0e0ee" />
        {/* Hair base front */}
        <path
          d="M30 52 Q40 38 60 36 Q80 38 90 52 Q78 44 60 42 Q42 44 30 52 Z"
          fill="#b8b8cc"
          opacity="0.9"
        />
        {/* Front wisps — messy, pointing in different directions */}
        <path d="M38 48 Q40 36 44 34 Q47 33 45 42 Q43 46 38 48 Z" fill="#f0f0f8" />
        <path d="M48 40 Q50 30 54 28 Q57 28 55 37 Q53 40 48 40 Z" fill="#e8e8f4" />
        <path d="M68 40 Q70 30 74 28 Q77 28 75 37 Q73 40 68 40 Z" fill="#e8e8f4" />
        <path d="M78 48 Q80 36 84 34 Q87 33 85 42 Q83 46 78 48 Z" fill="#f0f0f8" />

        {/* Eyes — BIG, sparkly blue, Killua's */}
        <ellipse cx="47" cy="58" rx="9" ry="9" fill="white" />
        <ellipse cx="73" cy="58" rx="9" ry="9" fill="white" />
        {/* Iris */}
        <ellipse cx="47" cy="58" rx="6.5" ry="7" fill="#5BA8DC" />
        <ellipse cx="73" cy="58" rx="6.5" ry="7" fill="#5BA8DC" />
        {/* Pupil */}
        <ellipse cx="47" cy="58.5" rx="3.8" ry="4.2" fill="#1A3A5C" />
        <ellipse cx="73" cy="58.5" rx="3.8" ry="4.2" fill="#1A3A5C" />
        {/* Sparkle highlights */}
        <circle cx="49.5" cy="54.5" r="2.2" fill="white" />
        <circle cx="75.5" cy="54.5" r="2.2" fill="white" />
        <circle cx="44.5" cy="60" r="1.1" fill="white" opacity="0.75" />
        <circle cx="70.5" cy="60" r="1.1" fill="white" opacity="0.75" />

        {/* Nose */}
        <ellipse cx="60" cy="68" rx="2" ry="1.5" fill="#c8a890" opacity="0.45" />

        {/* Smirk — Killua's expression */}
        <path
          d="M51 74 Q58 79 60 78 Q62 79 66 75"
          fill="none"
          stroke="#b08070"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Lightning on face — nen power hint */}
        <path
          d="M58 44 L55 52 L59 52 L56 60"
          fill="none"
          stroke="#FDE68A"
          strokeWidth="1.1"
          opacity="0.22"
          strokeLinejoin="round"
        />
      </g>
      <circle
        cx="60"
        cy="60"
        r="58"
        fill="none"
        stroke="#38BDF8"
        strokeWidth="1.5"
        opacity="0.32"
      />
    </svg>
  );
}

export function MikasaAvatar() {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <clipPath id="m-clip">
          <circle cx="60" cy="60" r="58" />
        </clipPath>
        <linearGradient id="m-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="50%" stopColor="#1a2030" />
          <stop offset="100%" stopColor="#0e1420" />
        </linearGradient>
        <linearGradient id="m-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="60" fill="#0e1420" />
      <circle cx="60" cy="60" r="58" fill="url(#m-bg)" />
      <g clipPath="url(#m-clip)">
        <rect x="0" y="0" width="120" height="52" fill="url(#m-sky)" />
        {/* Moody clouds */}
        <ellipse cx="22" cy="16" rx="18" ry="9" fill="white" opacity="0.22" />
        <ellipse cx="88" cy="12" rx="16" ry="8" fill="white" opacity="0.18" />
        {/* ODM gear cables */}
        <path
          d="M104 0 L72 56"
          stroke="#9CA3AF"
          strokeWidth="1.2"
          opacity="0.3"
          strokeLinecap="round"
        />
        <path
          d="M16 0 L50 56"
          stroke="#9CA3AF"
          strokeWidth="1.2"
          opacity="0.3"
          strokeLinecap="round"
        />

        {/* Body — survey Corps tan jacket */}
        <path d="M8 120 Q24 76 60 74 Q96 76 112 120 Z" fill="#B8955A" />
        <path d="M46 74 Q60 69 74 74 L72 120 L48 120 Z" fill="#96742A" />
        {/* Wings of freedom chest emblem */}
        <path
          d="M52 80 Q56 76 60 78 Q64 76 68 80 Q64 85 60 83 Q56 85 52 80 Z"
          fill="#7A5818"
          opacity="0.5"
        />

        {/* RED SCARF */}
        <path d="M28 78 Q44 86 60 83 Q76 86 92 78 Q88 94 60 97 Q32 94 28 78 Z" fill="#DC1F1F" />
        <path d="M32 79 Q48 86 60 83 Q72 86 88 79 Q84 92 60 95 Q36 92 32 79 Z" fill="#B81818" />
        {/* Scarf fabric folds */}
        <path
          d="M38 82 Q48 87 60 85 Q72 87 82 82 Q78 89 60 87 Q42 89 38 82 Z"
          fill="#991414"
          opacity="0.5"
        />
        <path
          d="M34 80 Q38 84 46 82"
          stroke="#cc1a1a"
          strokeWidth="0.8"
          fill="none"
          opacity="0.35"
        />
        <path
          d="M74 82 Q82 84 86 80"
          stroke="#cc1a1a"
          strokeWidth="0.8"
          fill="none"
          opacity="0.35"
        />

        {/* Neck */}
        <rect x="53" y="64" width="14" height="14" rx="7" fill="#F0E0D4" />

        {/* Head */}
        <ellipse cx="60" cy="52" rx="26" ry="27" fill="#F0E0D4" />

        {/* Ears */}
        <ellipse cx="34" cy="54" rx="5" ry="6.5" fill="#e0cec4" />
        <ellipse cx="86" cy="54" rx="5" ry="6.5" fill="#e0cec4" />
        <ellipse cx="34" cy="54" rx="2.5" ry="4" fill="#c8b0a4" />
        <ellipse cx="86" cy="54" rx="2.5" ry="4" fill="#c8b0a4" />

        {/* DARK SHORT BOB HAIR */}
        {/* Top of head */}
        <path d="M34 48 Q38 26 60 22 Q82 26 86 48 Q76 36 60 34 Q44 36 34 48 Z" fill="#14141e" />
        <path d="M36 42 Q40 22 60 18 Q80 22 84 42 Q74 32 60 30 Q46 32 36 42 Z" fill="#1e1e2c" />
        <path d="M40 34 Q44 18 60 15 Q76 18 80 34 Q70 26 60 24 Q50 26 40 34 Z" fill="#14141e" />
        {/* Left bob side — straight cut */}
        <path d="M34 48 Q28 56 28 70 Q30 80 38 84 Q32 72 32 60 Q32 54 34 48 Z" fill="#14141e" />
        <path d="M28 55 Q22 62 22 74 Q24 82 32 86 L30 72 Q26 64 28 55 Z" fill="#1e1e2c" />
        <path d="M28 72 Q30 80 38 84 L36 76 Q30 72 28 72 Z" fill="#14141e" />
        {/* Right bob side — straight cut */}
        <path d="M86 48 Q92 56 92 70 Q90 80 82 84 Q88 72 88 60 Q88 54 86 48 Z" fill="#14141e" />
        <path d="M92 55 Q98 62 98 74 Q96 82 88 86 L90 72 Q94 64 92 55 Z" fill="#1e1e2c" />
        <path d="M92 72 Q90 80 82 84 L84 76 Q90 72 92 72 Z" fill="#14141e" />
        {/* Hair shine */}
        <path
          d="M42 24 Q52 18 60 17 Q68 18 78 24 Q70 20 60 19 Q50 20 42 24 Z"
          fill="#28283a"
          opacity="0.6"
        />

        {/* Eyes — grey, serious, slightly narrowed with furrowed brow */}
        <ellipse cx="48" cy="54" rx="7.5" ry="5.8" fill="white" />
        <ellipse cx="72" cy="54" rx="7.5" ry="5.8" fill="white" />
        {/* SERIOUS furrowed brows — very characteristic */}
        <path
          d="M40 48 Q48 44 56 48"
          fill="none"
          stroke="#181820"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M64 48 Q72 44 80 48"
          fill="none"
          stroke="#181820"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        {/* Inner brow shadow */}
        <path
          d="M44 49 Q48 46 54 48"
          fill="none"
          stroke="#2a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M66 48 Q70 46 76 48"
          fill="none"
          stroke="#2a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Iris — grey */}
        <ellipse cx="48" cy="54" rx="5.2" ry="4.5" fill="#60707A" />
        <ellipse cx="72" cy="54" rx="5.2" ry="4.5" fill="#60707A" />
        <ellipse cx="48" cy="54.5" rx="3" ry="2.8" fill="#2E3840" />
        <ellipse cx="72" cy="54.5" rx="3" ry="2.8" fill="#2E3840" />
        <circle cx="50" cy="52.5" r="1.3" fill="white" opacity="0.9" />
        <circle cx="74" cy="52.5" r="1.3" fill="white" opacity="0.9" />

        {/* Nose */}
        <ellipse cx="60" cy="61" rx="2" ry="1.5" fill="#c89a8a" opacity="0.48" />

        {/* Neutral/determined mouth */}
        <path
          d="M52 66 Q60 64 68 66"
          fill="none"
          stroke="#a07065"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Sword blade — ODM gear hint in background */}
        <path d="M96 2 L103 62 L100 62 L94 2 Z" fill="#C0C8D0" opacity="0.5" />
        <path d="M96 2 L103 62 L101 62 L95 2 Z" fill="white" opacity="0.18" />
        <rect x="95" y="0" width="9" height="7" rx="1.5" fill="#7A5818" opacity="0.7" />
      </g>
      <circle
        cx="60"
        cy="60"
        r="58"
        fill="none"
        stroke="#A78BFA"
        strokeWidth="1.5"
        opacity="0.32"
      />
    </svg>
  );
}
