import { useState } from 'react';

interface Membro {
  id: number;
  nome: string;
  funcao: string;
  universo: string;
  cor: string;
}

const MEMBROS_INICIAIS: Membro[] = [
  {
    id: 1,
    nome: 'Satoru Gojo',
    funcao: 'Arquiteto de Sistemas',
    universo: 'Infinity Labs',
    cor: '#818CF8',
  },
  {
    id: 2,
    nome: 'Monkey D. Luffy',
    funcao: 'Capitão de Projetos',
    universo: 'Grand Line Co.',
    cor: '#F87171',
  },
  {
    id: 3,
    nome: 'Naruto Uzumaki',
    funcao: 'Diretor de Crescimento',
    universo: 'Konoha Corp',
    cor: '#FB923C',
  },
  {
    id: 4,
    nome: 'Killua Zoldyck',
    funcao: 'Especialista em Segurança',
    universo: 'Zoldyck Systems',
    cor: '#38BDF8',
  },
  {
    id: 5,
    nome: 'Mikasa Ackerman',
    funcao: 'Líder de Operações',
    universo: 'Survey Corps',
    cor: '#A78BFA',
  },
];

export default function EquipeDeElite() {
  const [membros, setMembros] = useState<Membro[]>(MEMBROS_INICIAIS);

  const remover = (id: number) => setMembros(prev => prev.filter(m => m.id !== id));

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0e0e10',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div style={{ width: '100%', maxWidth: '480px' }}>
        {/* Cabeçalho */}
        <div style={{ marginBottom: '28px' }}>
          <h1
            style={{
              fontSize: '22px',
              fontWeight: 900,
              color: 'rgba(255,255,255,0.95)',
              margin: 0,
              letterSpacing: '-0.5px',
            }}
          >
            Equipe de Elite
          </h1>
          <p
            style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.3)',
              margin: '4px 0 0',
            }}
          >
            {membros.length} membros ativos
          </p>
        </div>

        {/* Lista */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {membros.map(m => (
            <div
              key={m.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '14px 16px',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Avatar — círculo colorido (placeholder) */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  flexShrink: 0,
                  backgroundColor: m.cor + '28',
                  border: `2px solid ${m.cor}55`,
                }}
              />

              {/* Info */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.9)',
                  }}
                >
                  {m.nome}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: 'rgba(255,255,255,0.38)',
                    marginTop: '2px',
                  }}
                >
                  {m.funcao} · {m.universo}
                </div>
              </div>

              {/* Botão remover */}
              <button
                onClick={() => remover(m.id)}
                style={{
                  background: 'none',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.3)',
                  width: '30px',
                  height: '30px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLButtonElement).style.color = '#F87171';
                  (e.target as HTMLButtonElement).style.borderColor = 'rgba(248,113,113,0.4)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLButtonElement).style.color = 'rgba(255,255,255,0.3)';
                  (e.target as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                ×
              </button>
            </div>
          ))}

          {membros.length === 0 && (
            <p
              style={{
                textAlign: 'center',
                color: 'rgba(255,255,255,0.3)',
                padding: '40px 0',
                fontSize: '13px',
              }}
            >
              Equipe vazia.
            </p>
          )}
        </div>

        {/* Rodapé */}
        {membros.length > 0 && (
          <div
            style={{
              marginTop: '24px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              fontSize: '10px',
              color: 'rgba(255,255,255,0.2)',
            }}
          >
            © {new Date().getFullYear()} · Ricardo Willian
          </div>
        )}
      </div>
    </div>
  );
}
