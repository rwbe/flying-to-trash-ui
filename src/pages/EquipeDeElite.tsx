import {
  GojoAvatar,
  KilluaAvatar,
  LuffyAvatar,
  MikasaAvatar,
  NarutoAvatar,
} from '@/components/CharacterAvatars';
import { AnimatePresence, motion, useAnimate } from 'framer-motion';
import type { ReactElement } from 'react';
import { useCallback, useRef, useState } from 'react';

interface Membro {
  id: number;
  nome: string;
  personagem: string;
  funcao: string;
  universo: string;
  cor: string;
  corSecundaria: string;
  Avatar: () => ReactElement;
}

const MEMBROS_INICIAIS: Membro[] = [
  {
    id: 1,
    nome: 'Satoru Gojo',
    personagem: 'Jujutsu Kaisen',
    funcao: 'Arquiteto de Sistemas',
    universo: 'Infinity Labs',
    cor: '#818CF8',
    corSecundaria: '#312E81',
    Avatar: GojoAvatar,
  },
  {
    id: 2,
    nome: 'Monkey D. Luffy',
    personagem: 'One Piece',
    funcao: 'Capitão de Projetos',
    universo: 'Grand Line Co.',
    cor: '#F87171',
    corSecundaria: '#7F1D1D',
    Avatar: LuffyAvatar,
  },
  {
    id: 3,
    nome: 'Naruto Uzumaki',
    personagem: 'Naruto',
    funcao: 'Diretor de Crescimento',
    universo: 'Konoha Corp',
    cor: '#FB923C',
    corSecundaria: '#7C2D12',
    Avatar: NarutoAvatar,
  },
  {
    id: 4,
    nome: 'Killua Zoldyck',
    personagem: 'Hunter × Hunter',
    funcao: 'Especialista em Segurança',
    universo: 'Zoldyck Systems',
    cor: '#38BDF8',
    corSecundaria: '#0C4A6E',
    Avatar: KilluaAvatar,
  },
  {
    id: 5,
    nome: 'Mikasa Ackerman',
    personagem: 'Attack on Titan',
    funcao: 'Líder de Operações',
    universo: 'Survey Corps',
    cor: '#A78BFA',
    corSecundaria: '#4C1D95',
    Avatar: MikasaAvatar,
  },
];

/* ────────────────────────────────────────────────
   Lixeira animada — tampa abre ao receber um card
──────────────────────────────────────────────── */
function LixeiraAnimada({
  isOpen,
  count,
  innerRef,
}: {
  isOpen: boolean;
  count: number;
  innerRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div ref={innerRef} className="flex flex-col items-center">
      <motion.div
        className="relative w-14 h-14"
        animate={isOpen ? { scale: [1, 1.15, 1] } : { scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.8, opacity: 0.3 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-full bg-red-500"
              style={{ filter: 'blur(12px)' }}
            />
          )}
        </AnimatePresence>

        <svg viewBox="0 0 56 56" className="w-full h-full relative z-10" fill="none">
          <motion.rect
            x="10"
            y="20"
            width="36"
            height="30"
            rx="4"
            fill={isOpen ? 'rgba(239,68,68,0.18)' : 'rgba(255,255,255,0.06)'}
            stroke={isOpen ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.12)'}
            strokeWidth="1.5"
            animate={{ fill: isOpen ? 'rgba(239,68,68,0.18)' : 'rgba(255,255,255,0.06)' }}
            transition={{ duration: 0.25 }}
          />
          {[19, 28, 37].map(x => (
            <motion.line
              key={x}
              x1={x}
              y1="26"
              x2={x}
              y2="44"
              stroke={isOpen ? 'rgba(239,68,68,0.45)' : 'rgba(255,255,255,0.15)'}
              strokeWidth="1.5"
              strokeLinecap="round"
              animate={{ stroke: isOpen ? 'rgba(239,68,68,0.45)' : 'rgba(255,255,255,0.15)' }}
              transition={{ duration: 0.25 }}
            />
          ))}
          <motion.g
            animate={isOpen ? { rotate: -42, x: -9, y: -6 } : { rotate: 0, x: 0, y: 0 }}
            style={{ transformOrigin: '12px 20px' }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          >
            <rect
              x="7"
              y="16"
              width="42"
              height="6"
              rx="3"
              fill={isOpen ? 'rgba(239,68,68,0.25)' : 'rgba(255,255,255,0.08)'}
              stroke={isOpen ? 'rgba(239,68,68,0.6)' : 'rgba(255,255,255,0.18)'}
              strokeWidth="1.5"
            />
            <rect
              x="20"
              y="10"
              width="16"
              height="7"
              rx="3"
              fill={isOpen ? 'rgba(239,68,68,0.2)' : 'rgba(255,255,255,0.06)'}
              stroke={isOpen ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.14)'}
              strokeWidth="1.5"
            />
          </motion.g>
        </svg>

        <AnimatePresence>
          {count > 0 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center z-20 shadow-lg"
            >
              <motion.span
                key={count}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-[10px] font-black text-white"
              >
                {count}
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/* ────────────────────────────────────────────────
   Linha de membro com fly-to-trash
──────────────────────────────────────────────── */
function MembroLinha({
  membro,
  trashRef,
  onRemover,
}: {
  membro: Membro;
  trashRef: React.RefObject<HTMLDivElement | null>;
  onRemover: (id: number) => void;
}) {
  const [rowRef, animate] = useAnimate<HTMLDivElement>();
  const [deleting, setDeleting] = useState(false);
  const { Avatar } = membro;

  const handleRemover = useCallback(async () => {
    if (deleting || !trashRef.current || !rowRef.current) return;
    setDeleting(true);

    const rowRect = rowRef.current.getBoundingClientRect();
    const trashRect = trashRef.current.getBoundingClientRect();
    const dx = trashRect.left + trashRect.width / 2 - (rowRect.left + rowRect.width / 2);
    const dy = trashRect.top + trashRect.height / 2 - (rowRect.top + rowRect.height / 2);

    await animate(
      rowRef.current,
      {
        x: [0, dx * 0.15, dx * 0.55, dx],
        y: [0, dy * 0.2 - 44, dy * 0.6 - 18, dy],
        scale: [1, 0.95, 0.42, 0.04],
        rotate: [0, -6, 12, 28],
        opacity: [1, 1, 0.65, 0],
        filter: ['blur(0px)', 'blur(0px)', 'blur(1px)', 'blur(8px)'],
      },
      {
        duration: 0.62,
        ease: [0.25, 0.46, 0.45, 0.94],
        times: [0, 0.2, 0.65, 1],
      }
    );

    onRemover(membro.id);
  }, [deleting, trashRef, rowRef, animate, onRemover, membro.id]);

  return (
    <motion.div layout ref={rowRef} className="relative">
      <motion.div
        className="group flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/[0.07] cursor-default"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.012) 100%)',
        }}
        whileHover={{
          background: `linear-gradient(135deg, ${membro.cor}0d 0%, rgba(255,255,255,0.018) 100%)`,
          borderColor: `${membro.cor}35`,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Avatar */}
        <div
          className="relative flex-shrink-0 w-12 h-12 rounded-2xl overflow-hidden border-2 border-[#0e0e10]"
          style={{ background: membro.corSecundaria }}
        >
          <Avatar />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="text-sm font-bold text-white/92 truncate">{membro.nome}</div>
          <div className="text-[11px] text-white/45 mt-0.5 truncate">{membro.funcao}</div>
          <p className="text-[9px] text-white/22 italic mt-0.5">{membro.personagem}</p>
        </div>

        {/* Botão deletar */}
        <motion.button
          onClick={handleRemover}
          disabled={deleting}
          whileHover={{ scale: 1.15, rotate: -8 }}
          whileTap={{ scale: 0.82 }}
          className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-xl text-white/18 hover:text-red-400 hover:bg-red-500/12 transition-all duration-150 disabled:opacity-0"
          title="Remover membro"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="w-4 h-4"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2.5 5h15M6.667 5V3.333a1.667 1.667 0 0 1 1.666-1.666h3.334a1.667 1.667 0 0 1 1.666 1.666V5m2.5 0-.833 11.667a1.667 1.667 0 0 1-1.667 1.666H6.667A1.667 1.667 0 0 1 5 16.667L4.167 5" />
            <path d="M8.333 9.167v5M11.667 9.167v5" />
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────
   Componente principal
──────────────────────────────────────────────── */
export default function EquipeDeElite() {
  const [membros, setMembros] = useState<Membro[]>(MEMBROS_INICIAIS);
  const [removidosCount, setRemovidosCount] = useState(0);
  const [trashOpen, setTrashOpen] = useState(false);
  const trashRef = useRef<HTMLDivElement>(null);
  const pendingRef = useRef(0);

  const handleRemover = useCallback((id: number) => {
    setRemovidosCount(c => c + 1);
    pendingRef.current += 1;
    setTrashOpen(true);
    setMembros(prev => prev.filter(m => m.id !== id));
    setTimeout(() => {
      pendingRef.current -= 1;
      if (pendingRef.current === 0) setTrashOpen(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0e10] flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        {/* Cabeçalho */}
        <div className="flex items-start justify-between mb-7">
          <div>
            <h1 className="text-2xl font-black text-white/95 tracking-tight mb-1">
              Equipe de Elite
            </h1>
            <p className="text-xs text-white/32">
              {membros.length} membro{membros.length !== 1 ? 's' : ''} ativos
            </p>
          </div>
          <LixeiraAnimada isOpen={trashOpen} count={removidosCount} innerRef={trashRef} />
        </div>

        {/* Lista */}
        <div className="space-y-2.5">
          <AnimatePresence mode="popLayout">
            {membros.length === 0 ? (
              <motion.div
                key="vazio"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center py-12 text-center"
              >
                <div className="text-5xl mb-4">🗑️</div>
                <p className="text-white/45 font-semibold text-sm">Todos removidos</p>
              </motion.div>
            ) : (
              membros.map(m => (
                <MembroLinha key={m.id} membro={m} trashRef={trashRef} onRemover={handleRemover} />
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
