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
        <radialGradient id="g-bg" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0a0820" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="60" fill="#0f0c29" />
      <circle cx="60" cy="60" r="58" fill="url(#g-bg)" />
      <g clipPath="url(#g-clip)">
        {/* Floating particles */}
        {[
          [22, 28],
          [92, 22],
          [18, 72],
          [96, 68],
          [60, 14],
          [14, 50],
          [105, 45],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i % 2 === 0 ? 1.8 : 1}
            fill="#818CF8"
            opacity={0.3 + i * 0.05}
          />
        ))}
        {/* Subtle infinity glow */}
        <ellipse cx="60" cy="55" rx="42" ry="38" fill="#4338ca" opacity="0.08" />

        {/* Body — black high collar jacket */}
        <path d="M8 120 Q28 88 60 85 Q92 88 112 120 Z" fill="#111827" />
        <path d="M46 85 Q60 80 74 85 L72 120 L48 120 Z" fill="#1f2937" />
        {/* High collar */}
        <path d="M44 83 Q52 86 60 85 Q68 86 76 83 Q74 90 60 92 Q46 90 44 83 Z" fill="#0f172a" />
        <path d="M48 83 Q54 87 60 86 Q66 87 72 83 Q70 88 60 89 Q50 88 48 83 Z" fill="#1e293b" />

        {/* Neck */}
        <rect x="52" y="74" width="16" height="14" rx="7" fill="#f5deb3" />

        {/* Head */}
        <ellipse cx="60" cy="58" rx="28" ry="30" fill="#f5deb3" />

        {/* Ears */}
        <ellipse cx="32" cy="60" rx="5" ry="6.5" fill="#ead4a0" />
        <ellipse cx="88" cy="60" rx="5" ry="6.5" fill="#ead4a0" />
        <ellipse cx="32" cy="60" rx="2.5" ry="4" fill="#d4b888" />
        <ellipse cx="88" cy="60" rx="2.5" ry="4" fill="#d4b888" />

        {/* White hair — fluffy, voluminous */}
        {/* Side chunks left */}
        <path d="M32 54 Q26 42 30 30 Q34 22 38 30 Q36 42 36 54 Z" fill="#f8f8f8" />
        <path d="M34 60 Q26 54 24 44 Q26 36 32 40 Q34 50 35 60 Z" fill="#efefef" />
        {/* Side chunks right */}
        <path d="M88 54 Q94 42 90 30 Q86 22 82 30 Q84 42 84 54 Z" fill="#f8f8f8" />
        <path d="M86 60 Q94 54 96 44 Q94 36 88 40 Q86 50 85 60 Z" fill="#efefef" />
        {/* Top hair — layered fluffy cloud */}
        <path
          d="M36 42 Q38 26 48 20 Q60 15 72 20 Q82 26 84 42 Q74 32 60 30 Q46 32 36 42 Z"
          fill="#f5f5f5"
        />
        <path
          d="M40 34 Q42 18 52 13 Q60 10 68 13 Q78 18 80 34 Q70 26 60 24 Q50 26 40 34 Z"
          fill="#ffffff"
        />
        <path d="M44 26 Q48 12 60 10 Q72 12 76 26 Q68 20 60 18 Q52 20 44 26 Z" fill="#ffffff" />
        {/* Hair shadow/volume */}
        <path
          d="M38 44 Q44 36 54 34 Q60 33 66 34 Q76 36 82 44 Q72 40 60 39 Q48 40 38 44 Z"
          fill="#d4d4d4"
          opacity="0.6"
        />

        {/* Blindfold — iconic */}
        <rect x="32" y="54" width="56" height="13" rx="4" fill="#0f172a" />
        <rect x="32" y="54" width="56" height="4" rx="3" fill="#1e293b" />
        {/* Blindfold glow */}
        <ellipse cx="60" cy="60" rx="12" ry="4" fill="#818CF8" opacity="0.2" />
        <ellipse cx="60" cy="60" rx="6" ry="2" fill="#818CF8" opacity="0.3" />

        {/* Confident smirk */}
        <path
          d="M50 74 Q56 79 60 78 Q64 79 70 74"
          fill="none"
          stroke="#c4917a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M50 74 Q56 78 60 77 Q64 78 70 74 L70 75 Q64 80 60 79 Q56 80 50 75 Z"
          fill="#c4917a"
          opacity="0.4"
        />

        {/* Infinity symbol — top center watermark */}
        <path
          d="M53 8 Q56 5 59 8 Q62 11 65 8 Q68 5 71 8 Q68 11 65 8 Q62 5 59 8 Z"
          fill="#818CF8"
          opacity="0.7"
        />
        <circle
          cx="56"
          cy="8"
          r="2.5"
          fill="none"
          stroke="#818CF8"
          strokeWidth="1.2"
          opacity="0.6"
        />
        <circle
          cx="64"
          cy="8"
          r="2.5"
          fill="none"
          stroke="#818CF8"
          strokeWidth="1.2"
          opacity="0.6"
        />
      </g>
      <circle
        cx="60"
        cy="60"
        r="58"
        fill="none"
        stroke="#818CF8"
        strokeWidth="1.5"
        opacity="0.25"
      />
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
          <stop offset="0%" stopColor="#7EC8E3" />
          <stop offset="60%" stopColor="#4FA8CC" />
          <stop offset="100%" stopColor="#2980a8" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="60" fill="#1a4f6e" />
      <circle cx="60" cy="60" r="58" fill="url(#l-bg)" />
      <g clipPath="url(#l-clip)">
        {/* Clouds */}
        <ellipse cx="20" cy="26" rx="16" ry="8" fill="white" opacity="0.85" />
        <ellipse cx="32" cy="22" rx="10" ry="7" fill="white" opacity="0.85" />
        <ellipse cx="85" cy="20" rx="18" ry="9" fill="white" opacity="0.7" />
        <ellipse cx="97" cy="16" rx="12" ry="7" fill="white" opacity="0.65" />
        {/* Ocean shimmer */}
        <path d="M0 95 Q30 90 60 93 Q90 90 120 95 L120 120 L0 120 Z" fill="#1a6fa0" opacity="0.3" />

        {/* Body — red vest */}
        <path d="M10 120 Q28 84 60 82 Q92 84 110 120 Z" fill="#CC2200" />
        <path d="M48 82 Q60 77 72 82 L70 120 L50 120 Z" fill="#aa1a00" />
        {/* Vest lapels */}
        <path d="M48 82 Q54 88 60 86 L60 120 L50 120 Z" fill="#991800" />
        <path d="M72 82 Q66 88 60 86 L60 120 L70 120 Z" fill="#991800" />

        {/* Neck */}
        <rect x="52" y="72" width="16" height="13" rx="7" fill="#d4a574" />

        {/* Head */}
        <ellipse cx="60" cy="60" rx="26" ry="27" fill="#d4a574" />

        {/* Ears */}
        <ellipse cx="34" cy="62" rx="5" ry="6.5" fill="#c4945a" />
        <ellipse cx="86" cy="62" rx="5" ry="6.5" fill="#c4945a" />
        <ellipse cx="34" cy="62" rx="2.5" ry="4" fill="#b07840" />
        <ellipse cx="86" cy="62" rx="2.5" ry="4" fill="#b07840" />

        {/* Black hair sides */}
        <path d="M36 56 Q32 48 35 40 Q38 34 42 40 Q40 48 40 56 Z" fill="#1a1a1a" />
        <path d="M38 64 Q32 56 31 48 Q34 42 38 46 Q40 54 42 64 Z" fill="#222" />
        <path d="M84 56 Q88 48 85 40 Q82 34 78 40 Q80 48 80 56 Z" fill="#1a1a1a" />
        <path d="M82 64 Q88 56 89 48 Q86 42 82 46 Q80 54 78 64 Z" fill="#222" />

        {/* Straw Hat — iconic */}
        <ellipse cx="60" cy="42" rx="36" ry="11" fill="#C8960A" />
        <ellipse cx="60" cy="38" rx="24" ry="19" fill="#E8B420" />
        <ellipse cx="60" cy="37" rx="22" ry="17" fill="#D4A017" />
        <ellipse cx="60" cy="36" rx="21" ry="16" fill="#E8B420" />
        {/* Hat highlights */}
        <path
          d="M44 34 Q52 28 60 27 Q68 28 76 34 Q68 31 60 30 Q52 31 44 34 Z"
          fill="#C49010"
          opacity="0.5"
        />
        {/* Hat band — red */}
        <path d="M36 42 Q60 50 84 42 Q82 48 60 54 Q38 48 36 42 Z" fill="#CC2200" opacity="0.95" />
        <path d="M38 43 Q60 50 82 43 Q80 47 60 52 Q40 47 38 43 Z" fill="#aa1a00" />
        {/* Hat shadow underside */}
        <ellipse cx="60" cy="55" rx="22" ry="5" fill="#8B1000" opacity="0.35" />

        {/* Eyes — wide, round, determined */}
        <ellipse cx="50" cy="60" rx="7" ry="7.5" fill="white" />
        <ellipse cx="70" cy="60" rx="7" ry="7.5" fill="white" />
        <ellipse cx="50" cy="60" rx="4.5" ry="5" fill="#1a1a1a" />
        <ellipse cx="70" cy="60" rx="4.5" ry="5" fill="#1a1a1a" />
        <circle cx="52" cy="58" r="1.5" fill="white" />
        <circle cx="72" cy="58" r="1.5" fill="white" />

        {/* X scar under left eye */}
        <line
          x1="44"
          y1="67"
          x2="50"
          y2="71"
          stroke="#c0392b"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <line
          x1="50"
          y1="67"
          x2="44"
          y2="71"
          stroke="#c0392b"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Nose */}
        <ellipse cx="60" cy="67" rx="2.5" ry="2" fill="#b8865a" opacity="0.6" />

        {/* HUGE grin */}
        <path d="M42 72 Q52 84 60 83 Q68 84 78 72" fill="#aa1a1a" stroke="none" />
        <path
          d="M42 72 Q52 82 60 81 Q68 82 78 72 L78 73 Q68 85 60 84 Q52 85 42 73 Z"
          fill="#cc2200"
        />
        {/* Teeth */}
        <path
          d="M46 73 Q54 80 60 79 Q66 80 74 73 L74 74 Q66 82 60 81 Q54 82 46 74 Z"
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
        opacity="0.25"
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
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="55%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#7C2D12" />
        </radialGradient>
        <linearGradient id="n-hb" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="60" fill="#7C2D12" />
      <circle cx="60" cy="60" r="58" fill="url(#n-bg)" />
      <g clipPath="url(#n-clip)">
        {/* Chakra wisps */}
        <path
          d="M12 45 Q22 32 16 20"
          fill="none"
          stroke="#FCD34D"
          strokeWidth="2.5"
          opacity="0.4"
          strokeLinecap="round"
        />
        <path
          d="M108 52 Q98 36 103 24"
          fill="none"
          stroke="#FCD34D"
          strokeWidth="2"
          opacity="0.35"
          strokeLinecap="round"
        />
        <path
          d="M25 80 Q15 68 20 58"
          fill="none"
          stroke="#FCD34D"
          strokeWidth="1.5"
          opacity="0.25"
          strokeLinecap="round"
        />

        {/* Body — iconic orange jacket */}
        <path d="M10 120 Q28 80 60 78 Q92 80 110 120 Z" fill="#EA580C" />
        <path d="M47 78 Q60 73 73 78 L71 120 L49 120 Z" fill="#C2410C" />
        {/* Jacket collar — white */}
        <path
          d="M47 77 Q54 82 60 80 Q66 82 73 77 Q71 84 60 86 Q49 84 47 77 Z"
          fill="#f0f0f0"
          opacity="0.9"
        />

        {/* Neck */}
        <rect x="52" y="68" width="16" height="13" rx="7" fill="#F5DEB3" />

        {/* Head */}
        <ellipse cx="60" cy="55" rx="26" ry="28" fill="#F5DEB3" />

        {/* Ears */}
        <ellipse cx="34" cy="58" rx="5" ry="6.5" fill="#edd5b0" />
        <ellipse cx="86" cy="58" rx="5" ry="6.5" fill="#edd5b0" />
        <ellipse cx="34" cy="58" rx="2.5" ry="4" fill="#d4b890" />
        <ellipse cx="86" cy="58" rx="2.5" ry="4" fill="#d4b890" />

        {/* Spiky blonde hair */}
        {/* back layer */}
        <path d="M30 50 Q24 38 28 26 Q32 20 36 28 Q34 40 34 50 Z" fill="#F59E0B" />
        <path d="M34 44 Q28 30 34 20 Q38 14 40 22 Q38 34 38 44 Z" fill="#FBBF24" />
        <path d="M40 38 Q38 24 44 17 Q48 13 48 22 Q46 32 44 38 Z" fill="#FCD34D" />
        <path d="M50 34 Q50 18 56 14 Q62 14 64 22 Q62 30 60 34 Z" fill="#FBBF24" />
        <path d="M66 38 Q68 22 74 17 Q78 14 78 22 Q76 32 72 38 Z" fill="#FCD34D" />
        <path d="M72 44 Q76 30 80 22 Q84 16 84 26 Q82 36 78 44 Z" fill="#FBBF24" />
        <path d="M78 50 Q82 38 88 28 Q92 22 90 34 Q88 44 82 50 Z" fill="#F59E0B" />

        {/* Front hair base */}
        <path d="M34 52 Q42 40 60 38 Q78 40 86 52 Q74 46 60 44 Q46 46 34 52 Z" fill="#EAB308" />

        {/* Front spiky bits */}
        <path d="M36 50 Q38 40 42 38 Q44 38 43 44 Q41 48 36 50 Z" fill="#FCD34D" />
        <path d="M84 50 Q82 40 78 38 Q76 38 77 44 Q79 48 84 50 Z" fill="#FCD34D" />

        {/* Headband */}
        <rect x="34" y="48" width="52" height="13" rx="3" fill="#6B7280" />
        <rect x="34" y="48" width="52" height="13" rx="3" fill="url(#n-hb)" />
        {/* Metal plate */}
        <rect x="40" y="50" width="40" height="9" rx="2" fill="#9CA3AF" />
        <rect x="41" y="51" width="38" height="7" rx="1.5" fill="#D1D5DB" />
        {/* Leaf village spiral symbol */}
        <circle cx="60" cy="54.5" r="3.5" fill="none" stroke="#6B7280" strokeWidth="1.2" />
        <path d="M60 51 L60 58" stroke="#6B7280" strokeWidth="1.2" />
        <path d="M56.5 54.5 L63.5 54.5" stroke="#6B7280" strokeWidth="0.8" />

        {/* Eyes — intense blue */}
        <ellipse cx="49" cy="62" rx="6" ry="5.5" fill="white" />
        <ellipse cx="71" cy="62" rx="6" ry="5.5" fill="white" />
        <ellipse cx="49" cy="62" rx="4" ry="3.8" fill="#3B82F6" />
        <ellipse cx="71" cy="62" rx="4" ry="3.8" fill="#3B82F6" />
        <ellipse cx="49" cy="62" rx="2.5" ry="2.5" fill="#1D4ED8" />
        <ellipse cx="71" cy="62" rx="2.5" ry="2.5" fill="#1D4ED8" />
        <circle cx="50.5" cy="60.5" r="1.2" fill="white" />
        <circle cx="72.5" cy="60.5" r="1.2" fill="white" />

        {/* whisker marks */}
        <line
          x1="22"
          y1="59"
          x2="42"
          y2="62"
          stroke="#c4917a"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.9"
        />
        <line
          x1="20"
          y1="63"
          x2="42"
          y2="65"
          stroke="#c4917a"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.9"
        />
        <line
          x1="22"
          y1="67"
          x2="42"
          y2="68"
          stroke="#c4917a"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.9"
        />
        <line
          x1="98"
          y1="59"
          x2="78"
          y2="62"
          stroke="#c4917a"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.9"
        />
        <line
          x1="100"
          y1="63"
          x2="78"
          y2="65"
          stroke="#c4917a"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.9"
        />
        <line
          x1="98"
          y1="67"
          x2="78"
          y2="68"
          stroke="#c4917a"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Nose */}
        <ellipse cx="60" cy="70" rx="2" ry="1.5" fill="#d4a574" opacity="0.6" />

        {/* Grin — signature */}
        <path
          d="M50 75 Q60 72 70 75"
          fill="none"
          stroke="#b87a5a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <circle cx="60" cy="60" r="58" fill="none" stroke="#FB923C" strokeWidth="1.5" opacity="0.3" />
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
        <radialGradient id="k-bg" cx="50%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#BAE6FD" />
          <stop offset="45%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#0C4A6E" />
        </radialGradient>
        <radialGradient id="k-glow" cx="50%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="60" fill="#0C4A6E" />
      <circle cx="60" cy="60" r="58" fill="url(#k-bg)" />
      <g clipPath="url(#k-clip)">
        <circle cx="60" cy="70" r="40" fill="url(#k-glow)" />
        {/* Lightning bolts */}
        <path
          d="M16 22 L20 32 L15 32 L19 44"
          fill="none"
          stroke="#FCD34D"
          strokeWidth="2"
          opacity="0.6"
          strokeLinejoin="round"
        />
        <path
          d="M100 30 L103 38 L99 38 L102 46"
          fill="none"
          stroke="#FCD34D"
          strokeWidth="1.8"
          opacity="0.5"
          strokeLinejoin="round"
        />
        <path
          d="M20 78 L23 84 L20 84 L23 90"
          fill="none"
          stroke="#FCD34D"
          strokeWidth="1.5"
          opacity="0.35"
          strokeLinejoin="round"
        />
        {/* snow dots */}
        {[
          [18, 65],
          [94, 60],
          [12, 40],
          [102, 50],
          [30, 90],
          [88, 85],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.2" fill="white" opacity="0.5" />
        ))}

        {/* Body — dark turtleneck */}
        <path d="M12 120 Q28 80 60 78 Q92 80 108 120 Z" fill="#0C4A6E" />
        <path d="M47 78 Q60 74 73 78 L71 120 L49 120 Z" fill="#075985" />
        {/* Turtleneck fold */}
        <path d="M45 78 Q60 84 75 78 Q73 88 60 90 Q47 88 45 78 Z" fill="#0369A1" />
        <path d="M48 78 Q60 83 72 78 Q70 86 60 87 Q50 86 48 78 Z" fill="#0284C7" opacity="0.6" />

        {/* Neck */}
        <rect x="52" y="68" width="16" height="13" rx="7" fill="#f0e8d8" />

        {/* Head */}
        <ellipse cx="60" cy="56" rx="26" ry="28" fill="#f0e8d8" />

        {/* Ears */}
        <ellipse cx="34" cy="58" rx="5" ry="6.5" fill="#e8d8c8" />
        <ellipse cx="86" cy="58" rx="5" ry="6.5" fill="#e8d8c8" />
        <ellipse cx="34" cy="58" rx="2.5" ry="4" fill="#d4c0a8" />
        <ellipse cx="86" cy="58" rx="2.5" ry="4" fill="#d4c0a8" />

        {/* Silver/white spiky hair */}
        <path d="M30 50 Q24 38 27 26 Q30 18 35 26 Q33 38 33 50 Z" fill="#e8e8f0" />
        <path d="M34 44 Q30 30 34 20 Q37 14 38 22 Q37 34 37 44 Z" fill="#d8d8e8" />
        <path d="M40 38 Q38 22 44 16 Q47 12 48 20 Q47 30 45 38 Z" fill="#f0f0f8" />
        <path d="M50 34 Q50 18 56 14 Q60 12 64 18 Q62 28 58 34 Z" fill="#e8e8f0" />
        <path d="M68 36 Q70 20 76 16 Q80 14 80 22 Q78 32 74 36 Z" fill="#f0f0f8" />
        <path d="M76 44 Q80 30 86 24 Q88 20 87 30 Q85 38 82 44 Z" fill="#d8d8e8" />
        <path d="M82 50 Q88 38 93 30 Q96 24 94 35 Q92 44 87 50 Z" fill="#e8e8f0" />
        {/* Hair base */}
        <path
          d="M32 52 Q40 40 60 38 Q80 40 88 52 Q76 46 60 44 Q44 46 32 52 Z"
          fill="#c8c8d8"
          opacity="0.8"
        />

        {/* Eyes — big, blue, sparkly */}
        <ellipse cx="48" cy="58" rx="8" ry="8.5" fill="white" />
        <ellipse cx="72" cy="58" rx="8" ry="8.5" fill="white" />
        <ellipse cx="48" cy="58" rx="6" ry="6.5" fill="#3B82F6" />
        <ellipse cx="72" cy="58" rx="6" ry="6.5" fill="#3B82F6" />
        <ellipse cx="48" cy="58" rx="3.5" ry="4" fill="#1E40AF" />
        <ellipse cx="72" cy="58" rx="3.5" ry="4" fill="#1E40AF" />
        <circle cx="50" cy="55.5" r="2" fill="white" />
        <circle cx="74" cy="55.5" r="2" fill="white" />
        <circle cx="46.5" cy="59.5" r="1" fill="white" opacity="0.7" />
        <circle cx="70.5" cy="59.5" r="1" fill="white" opacity="0.7" />

        {/* Nose */}
        <ellipse cx="60" cy="67" rx="1.8" ry="1.3" fill="#d4b8a0" opacity="0.5" />

        {/* Subtle smile */}
        <path
          d="M52 72 Q60 76 68 72"
          fill="none"
          stroke="#c4907a"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Lightning hint on face */}
        <path
          d="M56 46 L53 54 L57 54 L54 62"
          fill="none"
          stroke="#FCD34D"
          strokeWidth="1"
          opacity="0.25"
          strokeLinejoin="round"
        />
      </g>
      <circle cx="60" cy="60" r="58" fill="none" stroke="#38BDF8" strokeWidth="1.5" opacity="0.3" />
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
          <stop offset="0%" stopColor="#4B5563" />
          <stop offset="50%" stopColor="#1F2937" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="m-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="60" fill="#111827" />
      <circle cx="60" cy="60" r="58" fill="url(#m-bg)" />
      <g clipPath="url(#m-clip)">
        <rect x="0" y="0" width="120" height="55" fill="url(#m-sky)" />
        {/* Clouds */}
        <ellipse cx="24" cy="18" rx="16" ry="8" fill="white" opacity="0.25" />
        <ellipse cx="88" cy="14" rx="14" ry="7" fill="white" opacity="0.2" />
        {/* ODM Gear cables hint */}
        <path
          d="M100 0 L70 55"
          stroke="#9CA3AF"
          strokeWidth="1"
          opacity="0.3"
          strokeLinecap="round"
        />
        <path
          d="M20 0 L52 55"
          stroke="#9CA3AF"
          strokeWidth="1"
          opacity="0.3"
          strokeLinecap="round"
        />

        {/* Body — Survey Corps tan jacket */}
        <path d="M10 120 Q26 78 60 76 Q94 78 110 120 Z" fill="#C2A05A" />
        <path d="M47 76 Q60 71 73 76 L71 120 L49 120 Z" fill="#A07840" />
        {/* Wings of freedom symbol hint on chest */}
        <path
          d="M52 82 Q56 78 60 80 Q64 78 68 82 Q64 86 60 84 Q56 86 52 82 Z"
          fill="#8B6914"
          opacity="0.4"
        />

        {/* Red scarf */}
        <path d="M34 78 Q44 84 60 82 Q76 84 86 78 Q82 90 60 92 Q38 90 34 78 Z" fill="#DC2626" />
        <path d="M38 79 Q48 84 60 82 Q72 84 82 79 Q78 87 60 89 Q42 87 38 79 Z" fill="#B91C1C" />
        {/* Scarf fold detail */}
        <path
          d="M44 82 Q52 86 60 84 Q68 86 76 82 Q72 88 60 86 Q48 88 44 82 Z"
          fill="#991B1B"
          opacity="0.5"
        />

        {/* Neck */}
        <rect x="52" y="66" width="16" height="13" rx="7" fill="#F5E6D8" />

        {/* Head */}
        <ellipse cx="60" cy="54" rx="25" ry="27" fill="#F5E6D8" />

        {/* Ears */}
        <ellipse cx="35" cy="56" rx="5" ry="6.5" fill="#eedad0" />
        <ellipse cx="85" cy="56" rx="5" ry="6.5" fill="#eedad0" />
        <ellipse cx="35" cy="56" rx="2.5" ry="4" fill="#d8c4b8" />
        <ellipse cx="85" cy="56" rx="2.5" ry="4" fill="#d8c4b8" />

        {/* Dark short bob hair */}
        {/* Top */}
        <path d="M36 48 Q40 28 60 25 Q80 28 84 48 Q74 38 60 36 Q46 38 36 48 Z" fill="#1a1a2e" />
        <path d="M38 42 Q42 24 60 22 Q78 24 82 42 Q72 34 60 32 Q48 34 38 42 Z" fill="#222233" />
        <path d="M42 36 Q46 20 60 18 Q74 20 78 36 Q70 28 60 26 Q50 28 42 36 Z" fill="#1a1a2e" />
        {/* Left bob side */}
        <path d="M35 48 Q30 54 31 66 Q32 76 38 80 Q34 70 34 60 Q34 54 35 48 Z" fill="#1a1a2e" />
        <path d="M31 54 Q26 60 27 70 Q29 78 36 82 L33 70 Q30 62 31 54 Z" fill="#222" />
        {/* Right bob side */}
        <path d="M85 48 Q90 54 89 66 Q88 76 82 80 Q86 70 86 60 Q86 54 85 48 Z" fill="#1a1a2e" />
        <path d="M89 54 Q94 60 93 70 Q91 78 84 82 L87 70 Q90 62 89 54 Z" fill="#222" />
        {/* Hair shine */}
        <path
          d="M44 26 Q52 20 60 19 Q68 20 76 26 Q68 22 60 21 Q52 22 44 26 Z"
          fill="#2a2a3e"
          opacity="0.5"
        />

        {/* Eyes — grey, serious, slightly narrowed */}
        <ellipse cx="48" cy="55" rx="7" ry="5.5" fill="white" />
        <ellipse cx="72" cy="55" rx="7" ry="5.5" fill="white" />
        {/* Serious brow furrow */}
        <path
          d="M41 50 Q48 47 55 50"
          fill="none"
          stroke="#2a1a1a"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M65 50 Q72 47 79 50"
          fill="none"
          stroke="#2a1a1a"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <ellipse cx="48" cy="55" rx="5" ry="4" fill="#6B7280" />
        <ellipse cx="72" cy="55" rx="5" ry="4" fill="#6B7280" />
        <ellipse cx="48" cy="55" rx="3" ry="2.5" fill="#374151" />
        <ellipse cx="72" cy="55" rx="3" ry="2.5" fill="#374151" />
        <circle cx="50" cy="53.5" r="1.2" fill="white" opacity="0.9" />
        <circle cx="74" cy="53.5" r="1.2" fill="white" opacity="0.9" />

        {/* Nose */}
        <ellipse cx="60" cy="62" rx="1.8" ry="1.4" fill="#d4a090" opacity="0.5" />

        {/* Neutral/serious mouth */}
        <path
          d="M52 67 Q60 66 68 67"
          fill="none"
          stroke="#b07060"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Sword blade hint */}
        <path d="M94 2 L100 60 L97 60 L92 2 Z" fill="#C0C0C0" opacity="0.55" />
        <path d="M94 2 L100 60 L98 60 L93 2 Z" fill="white" opacity="0.2" />
        <rect x="93" y="0" width="8" height="6" rx="1.5" fill="#8B6914" opacity="0.75" />
      </g>
      <circle cx="60" cy="60" r="58" fill="none" stroke="#A78BFA" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}
