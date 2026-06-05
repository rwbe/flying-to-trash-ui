import { useState, useRef, useCallback } from 'react';
import type { ReactElement } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';
import {
  GojoAvatar,
  LuffyAvatar,
  NarutoAvatar,
  KilluaAvatar,
  MikasaAvatar,
} from '@/components/CharacterAvatars';

interface Membro {
  id: number;
  nome: string;
  personagem: string;
  funcao: string;
  universo: string;
  status: 'ativo' | 'ausente' | 'ocupado';
  cor: string;
  corSecundaria: string;
  emoji: string;
  simbolo: string;
  Avatar: () => ReactElement;
}

const MEMBROS_INICIAIS: Membro[] = [
  {
    id: 1,
    nome: 'Satoru Gojo',
    personagem: 'Jujutsu Kaisen',
    funcao: 'Arquiteto de Sistemas',
    universo: 'Infinity Labs',
    status: 'ativo',
    cor: '#818CF8',
    corSecundaria: '#312E81',
    emoji: '♾️',
    simbolo: '∞',
    Avatar: GojoAvatar,
  },
  {
    id: 2,
    nome: 'Monkey D. Luffy',
    personagem: 'One Piece',
    funcao: 'Capitão de Projetos',
    universo: 'Grand Line Co.',
    status: 'ativo',
    cor: '#F87171',
    corSecundaria: '#7F1D1D',
    emoji: '⚓',
    simbolo: '⚓',
    Avatar: LuffyAvatar,
  },
  {
    id: 3,
    nome: 'Naruto Uzumaki',
    personagem: 'Naruto',
    funcao: 'Diretor de Crescimento',
    universo: 'Konoha Corp',
    status: 'ocupado',
    cor: '#FB923C',
    corSecundaria: '#7C2D12',
    emoji: '🍥',
    simbolo: 'uzumaki',
    Avatar: NarutoAvatar,
  },
  {
    id: 4,
    nome: 'Killua Zoldyck',
    personagem: 'Hunter × Hunter',
    funcao: 'Especialista em Segurança',
    universo: 'Zoldyck Systems',
    status: 'ausente',
    cor: '#38BDF8',
    corSecundaria: '#0C4A6E',
    emoji: '⚡',
    simbolo: '⚡',
    Avatar: KilluaAvatar,
  },
  {
    id: 5,
    nome: 'Mikasa Ackerman',
    personagem: 'Attack on Titan',
    funcao: 'Líder de Operações',
    universo: 'Survey Corps',
    status: 'ativo',
    cor: '#A78BFA',
    corSecundaria: '#4C1D95',
    emoji: '⚔️',
    simbolo: '⚔',
    Avatar: MikasaAvatar,
  },
];

const STATUS_CONFIG = {
  ativo: { cor: '#4ADE80', label: 'Online', pulso: true },
  ausente: { cor: '#FCD34D', label: 'Ausente', pulso: false },
  ocupado: { cor: '#F87171', label: 'Ocupado', pulso: false },
};

/* ────────────────────────────────────────────────
   Espiral Uzumaki — símbolo do clã
──────────────────────────────────────────────── */
function UzumakiSpiral({ cor, tamanho = 72 }: { cor: string; tamanho?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={tamanho}
      height={tamanho}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 50
           m0,-36
           a36,36 0 1,1 -0.01,0
           m0.01,-8
           a44,44 0 1,0 0.01,0
           m-0.01,16
           a28,28 0 1,1 -0.01,0
           m0.01,-8
           a20,20 0 1,0 0.01,0
           m-0.01,8
           a12,12 0 1,1 -0.01,0
           m0.01,0 l0,1"
        stroke={cor}
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* ────────────────────────────────────────────────
   Marca d'água do personagem no card
──────────────────────────────────────────────── */
function CardWatermark({ simbolo, cor }: { simbolo: string; cor: string }) {
  if (simbolo === 'uzumaki') {
    return (
      <div
        className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ opacity: 0.055 }}
      >
        <UzumakiSpiral cor={cor} tamanho={68} />
      </div>
    );
  }
  return (
    <div
      className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none select-none font-black leading-none"
      style={{
        fontSize: '4.5rem',
        color: cor,
        opacity: 0.045,
        fontFamily: 'system-ui, sans-serif',
        userSelect: 'none',
      }}
    >
      {simbolo}
    </div>
  );
}

/* ────────────────────────────────────────────────
   Lixeira animada
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
        className="relative w-10 h-10"
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
              style={{ filter: 'blur(10px)' }}
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
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center z-20 shadow-lg"
            >
              <motion.span
                key={count}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-[9px] font-black text-white"
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
   Botão Restaurar — ícone ao lado da lixeira
──────────────────────────────────────────────── */
function BotaoRestaurar({
  removidos,
  onRestaurar,
}: {
  removidos: Membro[];
  onRestaurar: (id: number) => void;
}) {
  const [spinning, setSpinning] = useState(false);
  const count = removidos.length;
  const ultimo = removidos[removidos.length - 1];
  const disabled = count === 0;
  const cor = ultimo?.cor ?? 'rgba(255,255,255,0.15)';

  const handle = () => {
    if (disabled || spinning || !ultimo) return;
    setSpinning(true);
    onRestaurar(ultimo.id);
    setTimeout(() => setSpinning(false), 600);
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Pulse ring when active */}
      <AnimatePresence>
        {!disabled && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.3, 0.75, 0.3], scale: [0.9, 1.05, 0.9] }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-10 h-10 rounded-full pointer-events-none"
            style={{ border: `1.5px solid ${cor}55` }}
          />
        )}
      </AnimatePresence>

      <motion.button
        onClick={handle}
        disabled={disabled}
        whileHover={disabled ? {} : { scale: 1.12 }}
        whileTap={disabled ? {} : { scale: 0.82 }}
        className="relative w-9 h-9 flex items-center justify-center rounded-xl transition-colors duration-200"
        style={{
          backgroundColor: disabled ? 'rgba(255,255,255,0.03)' : `${cor}12`,
          border: `1px solid ${disabled ? 'rgba(255,255,255,0.06)' : cor + '35'}`,
          cursor: disabled ? 'default' : 'pointer',
          opacity: disabled ? 0.28 : 1,
        }}
        title={disabled ? 'Nada para restaurar' : `Restaurar ${ultimo?.nome}`}
      >
        <motion.div
          animate={spinning ? { rotate: -360 } : { rotate: 0 }}
          transition={spinning ? { duration: 0.52, ease: 'easeInOut' } : {}}
          style={{ color: disabled ? 'rgba(255,255,255,0.2)' : cor }}
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="w-[17px] h-[17px]"
            stroke="currentColor"
            strokeWidth={1.85}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 10a7 7 0 1 0 1.5-4.3" />
            <path d="M3 5v5h5" />
          </svg>
        </motion.div>
      </motion.button>

      {/* Count badge */}
      <AnimatePresence>
        {count > 0 && (
          <motion.div
            key={count}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -top-1.5 -right-1.5 flex items-center justify-center rounded-full z-10 shadow-lg"
            style={{
              backgroundColor: cor,
              width: '17px',
              height: '17px',
              fontSize: '9px',
              fontWeight: 900,
              color: '#0e0e10',
            }}
          >
            {count}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ────────────────────────────────────────────────
   Avatar com anel giratório + ilustração SVG
──────────────────────────────────────────────── */
function AvatarCard({ membro }: { membro: Membro }) {
  const { Avatar } = membro;
  return (
    <div className="relative flex-shrink-0">
      <motion.div
        className="absolute -inset-[3px] rounded-2xl opacity-80"
        style={{
          background: `conic-gradient(from 0deg, ${membro.cor}, ${membro.corSecundaria}, ${membro.cor})`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
      />
      <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-[#0e0e10] bg-[#1a1a2e]">
        <Avatar />
      </div>
      <div className="absolute -bottom-0.5 -right-0.5 z-10">
        <div className="relative">
          <div
            className="w-3 h-3 rounded-full border-2 border-[#0e0e10]"
            style={{ backgroundColor: STATUS_CONFIG[membro.status].cor }}
          />
          {STATUS_CONFIG[membro.status].pulso && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: STATUS_CONFIG[membro.status].cor }}
              animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────
   Partículas de trilha ao deletar
──────────────────────────────────────────────── */
function TrailParticles({ active, cor }: { active: boolean; cor: string }) {
  return (
    <AnimatePresence>
      {active &&
        [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full pointer-events-none z-50"
            style={{ backgroundColor: cor, left: '50%', top: '50%' }}
            initial={{ x: 0, y: 0, opacity: 0.9, scale: 1 }}
            animate={{ x: (Math.random() - 0.5) * 80, y: -25 - i * 14, opacity: 0, scale: 0 }}
            exit={{}}
            transition={{ duration: 0.6, delay: i * 0.05, ease: 'easeOut' }}
          />
        ))}
    </AnimatePresence>
  );
}

/* ────────────────────────────────────────────────
   Linha de membro ativo com fly-to-trash
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
  const [showTrail, setShowTrail] = useState(false);

  const handleRemover = useCallback(async () => {
    if (deleting || !trashRef.current || !rowRef.current) return;
    setDeleting(true);
    setShowTrail(true);

    const rowRect = rowRef.current.getBoundingClientRect();
    const trashRect = trashRef.current.getBoundingClientRect();
    const dx = trashRect.left + trashRect.width / 2 - (rowRect.left + rowRect.width / 2);
    const dy = trashRect.top + trashRect.height / 2 - (rowRect.top + rowRect.height / 2);

    setTimeout(() => setShowTrail(false), 450);

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
      <TrailParticles active={showTrail} cor={membro.cor} />
      <motion.div
        className={`group flex items-center gap-4 px-5 py-4 rounded-2xl border transition-colors duration-200 cursor-default relative overflow-hidden ${
          deleting ? 'border-red-500/20' : 'border-white/[0.07]'
        }`}
        style={
          deleting
            ? { background: 'rgba(239,68,68,0.04)' }
            : {
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.012) 100%)',
              }
        }
        whileHover={{
          background: `linear-gradient(135deg, ${membro.cor}0d 0%, rgba(255,255,255,0.018) 100%)`,
          borderColor: `${membro.cor}35`,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Marca d'água do personagem */}
        <CardWatermark simbolo={membro.simbolo} cor={membro.cor} />

        {/* Barra lateral colorida */}
        <div
          className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full opacity-75"
          style={{ backgroundColor: membro.cor }}
        />

        <AvatarCard membro={membro} />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-sm font-bold text-white/92 truncate">{membro.nome}</span>
            <span className="text-[10px] opacity-55">{membro.emoji}</span>
            <span
              className="text-[9px] font-semibold px-1.5 py-0.5 rounded-md ml-auto flex-shrink-0"
              style={{
                backgroundColor: STATUS_CONFIG[membro.status].cor + '20',
                color: STATUS_CONFIG[membro.status].cor,
              }}
            >
              {STATUS_CONFIG[membro.status].label}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-white/45 truncate">{membro.funcao}</span>
            <span className="text-white/14">·</span>
            <span
              className="text-[10px] font-medium truncate flex-shrink-0"
              style={{ color: membro.cor + 'cc' }}
            >
              {membro.universo}
            </span>
          </div>
          <p className="text-[9px] text-white/22 italic mt-0.5">{membro.personagem}</p>
        </div>

        {/* Botão deletar — lixeira */}
        <motion.button
          onClick={handleRemover}
          disabled={deleting}
          whileHover={{ scale: 1.15, rotate: -8 }}
          whileTap={{ scale: 0.82 }}
          className="relative flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-xl text-white/18 hover:text-red-400 hover:bg-red-500/12 transition-all duration-150 disabled:opacity-0"
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
  const [removidos, setRemovidos] = useState<Membro[]>([]);
  const [trashOpen, setTrashOpen] = useState(false);
  const trashRef = useRef<HTMLDivElement>(null);
  const pendingRef = useRef(0);

  const handleRemover = useCallback((id: number) => {
    const membro = MEMBROS_INICIAIS.find(m => m.id === id);
    if (membro) setRemovidos(prev => [...prev, membro]);
    pendingRef.current += 1;
    setTrashOpen(true);
    setMembros(prev => prev.filter(m => m.id !== id));
    setTimeout(() => {
      pendingRef.current -= 1;
      if (pendingRef.current === 0) setTrashOpen(false);
    }, 1000);
  }, []);

  const handleRestaurar = useCallback((id: number) => {
    const membro = MEMBROS_INICIAIS.find(m => m.id === id);
    if (!membro) return;
    setRemovidos(prev => prev.filter(m => m.id !== id));
    setMembros(prev => {
      const originalOrder = MEMBROS_INICIAIS.map(m => m.id);
      const newList = [...prev, membro];
      return newList.sort((a, b) => originalOrder.indexOf(a.id) - originalOrder.indexOf(b.id));
    });
  }, []);

  const totalRemovidos = removidos.length;

  return (
    <div className="min-h-screen bg-[#0e0e10] flex items-center justify-center p-6">
      {/* Grain texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.022]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="w-full max-w-lg relative z-10">
        {/* Cabeçalho */}
        <div className="flex items-start justify-between mb-7">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <h1 className="text-2xl font-black text-white/95 tracking-tight">Equipe de Elite</h1>
              <motion.div
                className="px-2 py-0.5 rounded-lg text-[10px] font-bold border"
                style={{
                  borderColor: 'rgba(129,140,248,0.3)',
                  color: '#818CF8',
                  backgroundColor: 'rgba(129,140,248,0.1)',
                }}
                animate={{ opacity: [0.65, 1, 0.65] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                ANIME
              </motion.div>
            </div>
            <p className="text-xs text-white/32">
              {membros.length} membro{membros.length !== 1 ? 's' : ''} ativos · Operações Especiais
            </p>
          </div>

          {/* Ações: Restaurar + Lixeira */}
          <div className="flex items-center gap-2.5">
            <BotaoRestaurar removidos={removidos} onRestaurar={handleRestaurar} />
            <LixeiraAnimada isOpen={trashOpen} count={totalRemovidos} innerRef={trashRef} />
          </div>
        </div>

        {/* Lista de membros ativos */}
        <div className="space-y-2.5">
          <AnimatePresence mode="popLayout">
            {membros.length === 0 ? (
              <motion.div
                key="vazio"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="flex flex-col items-center py-12 text-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-5xl mb-4"
                >
                  🗑️
                </motion.div>
                <p className="text-white/45 font-semibold text-sm mb-1">Todos removidos</p>
                <p className="text-white/22 text-xs">Use o botão ↩ para restaurar</p>
              </motion.div>
            ) : (
              membros.map(m => (
                <MembroLinha key={m.id} membro={m} trashRef={trashRef} onRemover={handleRemover} />
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Rodapé */}
        {membros.length > 0 && (
          <div className="mt-6 pt-4 border-t border-white/[0.055] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {['#818CF8', '#F87171', '#FB923C', '#38BDF8', '#A78BFA'].map((cor, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full border border-[#0e0e10]"
                    style={{ backgroundColor: cor + '88' }}
                  />
                ))}
              </div>
              <span className="text-[10px] text-white/28">
                © {new Date().getFullYear()} · Equipe de Elite
              </span>
            </div>
            <div className="flex items-center gap-2 text-[9px] text-white/16">
              <span>React</span>
              <span className="text-white/10">·</span>
              <span>Framer Motion</span>
              <span className="text-white/10">·</span>
              <span>Tailwind</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
