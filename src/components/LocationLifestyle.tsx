import React from 'react';
import { ShieldCheck, Compass, Gem, TrendingUp, Trees, SunMedium, CheckCircle2 } from 'lucide-react';

export function LocationLifestyle() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Segurança & Privacidade 24h',
      tag: 'Tranquilidade Real',
      description:
        'Condomínio fechado com portaria monitorada 24 horas, controle de acesso rigoroso e vizinhança seleta. Liberdade plena para sua família e crianças viverem sem preocupações.',
      highlight: 'Portaria 24 horas e ronda preventiva',
    },
    {
      icon: Compass,
      title: 'Localização Privilegiada',
      tag: 'Fácil Acesso em Bom Despacho',
      description:
        'A poucos minutos do centro da cidade, com acesso rápido e seguro. Você desfruta do silêncio, ar puro e clima de fazenda sem abrir mão da conveniência de escolas, comércios e serviços.',
      highlight: 'Acesso rápido com total comodidade',
    },
    {
      icon: SunMedium,
      title: 'Lazer de Resort Privativo',
      tag: 'Momentos Inesquecíveis',
      description:
        'Piscina com vista aberta, espaço gourmet completo para churrascos, varanda espaçosa e gramado amplo. O refúgio perfeito para reunir amigos e relaxar nos fins de semana.',
      highlight: 'Piscina ensolarada e espaço gourmet',
    },
    {
      icon: TrendingUp,
      title: 'Valorização & Potencial de Renda',
      tag: 'Investimento Inteligente',
      description:
        'Com 3.120 m² de terreno nobre, a propriedade já conta com projeto aprovado para construir mais 2 chalés independentes. Excelente para locação por temporada ou ampliação.',
      highlight: 'Projeto pronto para 2 chalés extras',
    },
  ];

  return (
    <section className="py-14 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative z-10">
      {/* Luz ambiente de destaque */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Cabeçalho da Seção */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a1836] border border-sky-400/40 text-xs font-mono font-bold tracking-[0.25em] text-sky-300 uppercase mb-4 shadow-lg">
          <Gem className="w-3.5 h-3.5 text-sky-300" />
          <span>ESTILO DE VIDA & LOCALIZAÇÃO</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif-luxury font-black text-white tracking-wide uppercase text-3d-glow leading-tight">
          POR QUE ESTE É O <br />
          <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
            LUGAR PERFEITO PARA VOCÊ?
          </span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
          Mais do que uma chácara, uma conquista definitiva. O Condomínio Alphaville em Bom Despacho une a paz do campo ao conforto e sofisticação que você e sua família merecem.
        </p>
      </div>

      {/* Grid de 4 Pilares de Convencimento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {pillars.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="relative group rounded-3xl p-px bg-gradient-to-b from-sky-400/30 via-slate-800 to-slate-900 shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_45px_rgba(56,189,248,0.2)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-[#0e1b38]/95 via-[#091328]/95 to-[#060c1c]/95 backdrop-blur-xl h-full flex flex-col justify-between relative overflow-hidden">
                {/* Top specular reflection */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-600/10 border border-sky-400/40 flex items-center justify-center text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-sky-300" />
                    </div>
                    <span className="text-[11px] font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-sky-950/80 border border-sky-400/30 text-sky-300 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white mb-3 tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-sky-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Citação Emocional de Alto Padrão */}
      <div className="mt-10 relative rounded-3xl p-px bg-gradient-to-r from-sky-400/40 via-sky-300/20 to-sky-400/40 shadow-2xl">
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#0d1f42] via-[#09152e] to-[#0d1f42] backdrop-blur-xl text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex p-3 rounded-full bg-sky-500/10 text-sky-300 border border-sky-400/30 mb-1 shadow-md">
              <Trees className="w-6 h-6 text-sky-300" />
            </div>
            <p className="text-lg sm:text-2xl font-serif-luxury italic text-slate-100 font-medium leading-snug">
              &ldquo;Acordar com o cantar dos pássaros, respirar ar puro todos os dias e ter um refúgio seguro com espaço de sobra para viver os melhores momentos da vida.&rdquo;
            </p>
            <div className="pt-2">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-sky-300 uppercase block">
                CONDOMÍNIO ALPHAVILLE • BOM DESPACHO / MG
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
