import React, { useState } from 'react';
import { MODULES, FAQS, BONUS, TESTIMONIALS } from './constants';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md py-5 px-6 border-b border-gold-400/10">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gold-btn rounded flex items-center justify-center text-black font-bold text-xl serif">BD</div>
        <span className="font-bold tracking-tighter text-xl text-white uppercase serif">Base do Direito</span>
      </div>
      <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-slate-400">
        <a href="#metodo" className="hover:text-gold-400 transition">O Método</a>
        <a href="#conteudo" className="hover:text-gold-400 transition">Conteúdo</a>
        <a href="#bonus" className="hover:text-gold-400 transition">Bônus</a>
      </div>
      <a href="#oferta" className="hidden sm:block bg-gold-btn text-black px-6 py-2.5 rounded font-bold text-xs uppercase tracking-tighter hover:brightness-110 transition shadow-[0_0_20px_rgba(212,175,55,0.3)]">
        Matricule-se Agora
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-slate-950">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
    
    <div className="max-w-6xl mx-auto relative z-10 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass premium-border mb-8 animate-fadeIn">
        <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
        <span className="text-gold-400 text-[10px] font-bold uppercase tracking-[0.2em]">Padrão de Excelência Jurídica</span>
      </div>
      
      <h1 className="text-5xl md:text-8xl font-extrabold mb-8 leading-[1.1] serif text-white">
        A Base que a Faculdade <br />
        <span className="text-gold italic">Pressupõe</span> que Você Já Tenha.
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
        Não seja o calouro que fica perdido no "juridiquês". Domine os fundamentos, ganhe segurança e entenda a lógica do Direito de forma <span className="text-white font-medium">clara, direta e profissional.</span>
      </p>

      {/* Video Section - Fixed with nocookie and better parameters */}
      <div className="max-w-4xl mx-auto mb-16 aspect-video rounded-3xl overflow-hidden premium-border shadow-[0_0_50px_rgba(212,175,55,0.15)] bg-black relative group">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube-nocookie.com/embed/ewJlR78Ezyw?rel=0&modestbranding=1&showinfo=0" 
          title="Vídeo de Apresentação - A Base do Direito" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a href="#oferta" className="w-full sm:w-auto bg-gold-btn text-black px-12 py-6 rounded text-lg font-black uppercase tracking-tight shadow-2xl hover:scale-105 transition-all active:scale-95 text-center">
          Quero Começar Preparado
        </a>
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map(i => (
            <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-slate-950" />
          ))}
          <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-slate-400">+2k</div>
        </div>
        <span className="text-slate-500 text-sm font-medium">Alunos já transformados</span>
      </div>
    </div>
  </section>
);

const PainPoint = () => (
  <section id="metodo" className="py-24 px-6 bg-slate-950 relative border-y border-white/5 scroll-mt-24">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gold-400/5 blur-2xl rounded-full"></div>
          <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070" className="rounded-2xl shadow-2xl relative z-10 border border-white/10" alt="Law Library" />
          <div className="absolute -bottom-8 -right-8 glass p-6 rounded-xl hidden md:block z-20 premium-border">
            <p className="text-gold font-bold text-lg mb-1">Para quem trabalha</p>
            <p className="text-slate-400 text-xs font-medium">Conteúdo otimizado para <br />máxima retenção em pouco tempo.</p>
          </div>
        </div>
        
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold serif leading-tight text-white">
            Pare de apenas "sobreviver" ao primeiro semestre.
          </h2>
          <div className="space-y-6 text-slate-400 text-lg font-light leading-relaxed">
            <p>
              Entrar na faculdade é um sonho, mas a realidade bate forte: textos densos, professores que não explicam o básico e a sensação constante de estar <span className="text-white font-medium">correndo atrás do próprio rabo.</span>
            </p>
            <div className="space-y-4">
              {[
                "Chega de se sentir inferior nas discussões.",
                "Chega de ler 50 páginas e não entender nada.",
                "Chega de medo do 'juridiquês' técnico."
              ].map((text, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-gold-400 mt-1">✦</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <p className="text-white font-medium italic">
              Nós mastigamos o conteúdo para você focar no que importa: <span className="text-gold">aprender de verdade.</span>
            </p>
            <a href="#oferta" className="inline-block bg-gold-btn text-black px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl">
              Quero sair do zero agora
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BonusSection = () => (
  <section id="bonus" className="py-24 px-6 bg-slate-950 scroll-mt-24">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-4">Presentes Exclusivos</h2>
        <h3 className="text-4xl md:text-6xl font-bold serif text-white">Bônus de Alto Valor</h3>
        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Ao garantir sua vaga hoje, você desbloqueia esses recursos adicionais sem custo extra.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {BONUS.map((b, i) => (
          <div key={i} className="glass rounded-3xl overflow-hidden premium-border hover:bg-white/5 transition group flex flex-col">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={b.image} 
                alt={b.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="p-8 space-y-4 flex-1 flex flex-col">
              <div className="inline-block px-3 py-1 bg-gold-400/10 border border-gold-400/20 rounded-full text-gold-400 text-[10px] font-bold uppercase tracking-widest w-fit">
                Bônus Exclusivo
              </div>
              <div className="text-gold-400 font-bold text-xs uppercase tracking-tighter">Valor original: {b.value}</div>
              <h4 className="text-xl font-bold text-white serif leading-tight">{b.title}</h4>
              <p className="text-slate-400 font-light text-sm leading-relaxed flex-1">{b.description}</p>
              <div className="pt-4 flex items-center gap-2 text-gold-400 font-bold text-xs uppercase tracking-widest">
                <span className="w-4 h-[1px] bg-gold-400"></span>
                Incluso Grátis
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a href="#oferta" className="inline-block bg-white text-black px-12 py-5 rounded-2xl font-black uppercase tracking-tight hover:bg-gold-400 transition-all shadow-xl">
          Quero todos esses bônus hoje
        </a>
      </div>
    </div>
  </section>
);

const ValueStack = () => (
  <section id="oferta" className="py-24 md:py-32 px-4 bg-slate-950 relative overflow-hidden scroll-mt-32">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-400/5 via-transparent to-transparent pointer-events-none"></div>
    
    <div className="max-w-5xl mx-auto glass rounded-[40px] p-6 md:p-20 premium-border relative">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-7xl font-bold serif text-white mb-6 leading-tight">Sua Nova Jornada Começa <span className="text-gold">Aqui.</span></h2>
        <p className="text-slate-500 text-sm md:text-lg uppercase tracking-[0.2em] font-medium">O que você está prestes a adquirir:</p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8 mb-12 md:mb-16">
        {[
          { text: "Treinamento Base Jurídica Completo", desc: "Aulas direto ao ponto sobre as 8 matérias base." },
          { text: "Manual Estratégico do Vade Mecum", desc: "Economize horas de estudo com consulta rápida." },
          { text: "Comunidade Ouro de Networking", desc: "Conecte-se com quem compartilha o mesmo objetivo." },
          { text: "Guia Master de Oratória Jurídica", desc: "Destaque-se em seminários e sustentações." },
          { text: "Suporte Prioritário para Alunos", desc: "Dúvidas respondidas por monitores especializados." },
          { text: "Certificado de Conclusão Premium", desc: "Válido para horas complementares na faculdade." },
          { text: "Acesso Vitalício e Ilimitado", desc: "Consulte o material em qualquer semestre do curso." },
          { text: "Garantia Incondicional de 7 Dias", desc: "Risco zero. Experimente e decida depois." }
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 md:gap-4 text-slate-200">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gold-400/10 flex items-center justify-center border border-gold-400/30 mt-1 flex-shrink-0">
              <span className="text-gold-400 text-[10px] md:text-xs font-bold">✓</span>
            </div>
            <div>
              <span className="text-base md:text-lg font-bold tracking-tight block">{item.text}</span>
              <span className="text-xs md:text-sm text-slate-500 font-light">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Optimized Pricing Card matching the reference image */}
      <div className="bg-slate-950/90 p-8 md:p-12 rounded-[40px] border border-white/5 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient opacity-60"></div>
        
        <p className="text-slate-600 line-through text-sm md:text-xl mb-2 font-medium">Valor de Mercado: R$ 1.147,00</p>
        <p className="text-white font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-10 md:mb-12 italic">OFERTA EXCLUSIVA PARA NOVOS ALUNOS</p>
        
        <div className="flex flex-col items-center mb-10">
          <span className="text-slate-400 text-3xl md:text-4xl font-light mb-4">12x de</span>
          <div className="flex flex-col items-center leading-tight">
             <span className="text-7xl md:text-8xl font-black text-white serif mb-1">R$</span>
             <span className="text-[110px] md:text-[180px] font-black text-white serif tracking-tighter leading-none">14,26</span>
          </div>
        </div>
        
        <p className="text-slate-400 text-xl md:text-2xl mb-12 max-w-xs mx-auto md:max-w-none leading-relaxed">
          Ou apenas <span className="text-white font-bold">R$ 137,90 à vista</span> <br /> no PIX ou Cartão.
        </p>
        
        <div className="relative group max-w-md mx-auto mb-10">
          <div className="absolute -inset-1 bg-gold-400/30 rounded-3xl blur-2xl opacity-20 group-hover:opacity-100 transition duration-500"></div>
          <a href="https://pay.kiwify.com.br/7cbf9tP" target="_blank" rel="noopener noreferrer" className="relative block w-full bg-gold-btn text-black py-7 md:py-9 rounded-[30px] text-2xl md:text-3xl font-black uppercase tracking-tight shadow-[0_20px_60px_rgba(212,175,55,0.4)] hover:scale-[1.03] transition-all active:scale-95 text-center leading-tight">
            GARANTIR MEU <br className="md:hidden" /> ACESSO PREMIUM
          </a>
        </div>
        
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-slate-500 text-[10px] md:text-sm font-bold uppercase tracking-[0.25em]">
            <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
            </svg>
            TRANSAÇÃO CRIPTOGRAFADA
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WarrantySection = () => (
  <section className="py-24 px-6 bg-slate-950 relative overflow-hidden border-t border-white/5">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-block p-4 bg-gold-400/10 rounded-full mb-8 border border-gold-400/20">
        <svg className="w-16 h-16 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold serif text-white mb-8">Risco Zero: <span className="text-gold">Sua Satisfação Blindada</span></h2>
      <div className="glass p-10 rounded-3xl premium-border space-y-6">
        <p className="text-xl text-slate-300 font-light leading-relaxed">
          Nós acreditamos tanto na transformação que a <span className="text-white font-medium italic">Base Jurídica</span> trará para o seu primeiro semestre, que oferecemos uma garantia blindada de <span className="text-gold-400 font-bold">7 dias.</span>
        </p>
        <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Entre na plataforma, assista aos primeiros módulos, baixe os bônus e teste nossa metodologia. Se por qualquer motivo você achar que não é para você, basta nos enviar um único e-mail. Devolvemos 100% do seu investimento, sem letras miúdas, sem perguntas e sem ressentimentos.
        </p>
        <div className="pt-6">
          <span className="px-6 py-2 border border-gold-400/30 rounded-full text-gold-400 text-xs font-bold uppercase tracking-widest bg-gold-400/5">
            Garantia Incondicional Legalmente Registrada
          </span>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center serif text-white">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="glass rounded-2xl overflow-hidden premium-border">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-8 text-left flex justify-between items-center hover:bg-white/5 transition"
              >
                <span className="font-bold text-white text-lg">{faq.question}</span>
                <span className={`text-gold-400 text-3xl transition-transform ${openIdx === idx ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openIdx === idx && (
                <div className="p-8 pt-0 text-slate-400 border-t border-white/5 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Bio = () => (
  <section className="py-32 px-6 bg-slate-950 border-t border-white/5">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gold-400 blur-3xl opacity-20 group-hover:opacity-30 transition"></div>
          <div className="w-72 h-96 rounded-2xl overflow-hidden relative z-10 border-2 border-gold-400/30">
            <img 
              src="https://nataneodireito.com/wp-content/uploads/2026/02/natan-bio-scaled.jpeg" 
              alt="Natan Campos" 
              className="w-full h-full object-cover transition-all duration-300" 
            />
          </div>
        </div>
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-gold font-bold text-sm uppercase tracking-[0.3em]">O Fundador</h3>
            <h2 className="text-5xl font-bold serif text-white">Natan Campos</h2>
            <p className="text-gold-400 font-medium tracking-wide">Veterano no curso de Direito</p>
          </div>
          <div className="text-slate-400 text-lg font-light leading-relaxed space-y-4">
            <p>
              Me chamo Natan Campos. Veterano no curso de Direito e ajudo calouros — ou pessoas que desejam estudar Direito — a entenderem a base do Direito de forma clara e organizada.
            </p>
            <p>
              Estudei na PUC/RS, uma das melhores universidades privadas do Brasil, e minha missão é tornar sua jornada de aprendizagem mais simples, leve e eficiente.
            </p>
            <p>
              Nos últimos anos, desenvolvi uma estratégia prática que permite economizar tempo, evitar confusão e acelerar a evolução nos estudos, sem métodos complicados e sem perder meses estudando sozinho.
            </p>
            <p>
              Hoje, ensino esse método passo a passo no meu ebook, ajudando qualquer pessoa a aprender os primeiros 6 meses da faculdade de Direito em apenas 7 dias.
            </p>
            <p>
              Se você sonha em começar a faculdade com vantagem e confiança, esse material foi feito para você.
            </p>
            <div className="pt-4">
              <a 
                href="https://instagram.com/nataneodireito" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-white font-bold hover:text-gold-400 transition"
              >
                <span>Me acompanha no Instagram:</span>
                <span className="text-gold-400">@nataneodireito</span>
              </a>
            </div>
            <p className="text-white font-bold text-xl serif italic pt-4">
              Fuii… te espero do outro lado 🚀
            </p>
            <div className="pt-6">
              <a href="#oferta" className="inline-block bg-gold-btn text-black px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm shadow-xl hover:scale-105 transition-all">
                Garantir Minha Vaga
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-600 py-20 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
      <div className="space-y-4">
        <div className="flex items-center justify-center md:justify-start gap-3">
          <div className="w-8 h-8 bg-gold-btn rounded flex items-center justify-center text-black font-bold serif">BD</div>
          <span className="font-bold text-white serif uppercase tracking-widest">Base do Direito</span>
        </div>
        <p className="text-sm max-w-xs">Capacitando a nova geração de juristas brasileiros com fundamentos sólidos e didática moderna.</p>
      </div>
      
      <div className="text-[10px] uppercase tracking-widest text-slate-700">
        © 2026 Todos os Direitos Reservados.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-gold-400 selection:text-black">
      <Navbar />
      <Hero />
      <PainPoint />
      
      {/* Curriculum Grid */}
      <section id="conteudo" className="py-32 px-6 bg-slate-950 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold serif text-white mb-6">O Caminho do Domínio</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Módulos desenhados para uma evolução lógica e sem lacunas.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {MODULES.map((m, i) => (
              <div key={i} className="glass p-8 rounded-2xl premium-border hover:translate-y-[-5px] transition-all duration-300">
                <div className="text-3xl mb-4 opacity-80">{m.icon}</div>
                <h4 className="text-lg font-bold text-white mb-3 serif">{m.title}</h4>
                <p className="text-slate-500 text-sm font-light mb-6">{m.description}</p>
                <div className="space-y-2">
                  {m.details.slice(0, 3).map((d, di) => (
                    <div key={di} className="text-[10px] text-slate-400 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold-400/50"></div> {d}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#oferta" className="inline-block bg-gold-btn text-black px-12 py-5 rounded-xl font-black uppercase tracking-widest text-sm shadow-2xl hover:scale-105 transition-all">
              Quero Dominar o 1º Semestre
            </a>
          </div>
        </div>
      </section>

      <BonusSection />
      <ValueStack />
      <WarrantySection />
      <FAQ />
      <Bio />
      <Footer />
    </div>
  );
}