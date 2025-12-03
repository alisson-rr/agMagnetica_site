import { Button } from "@/components/ui/button";

const CTAFinalSection = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta-final" className="section-padding bg-gradient-to-br from-red-900/20 to-orange-900/10 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Pare de Perder <span className="gradient-text">Tempo</span>, 
          <span className="gradient-text"> Dinheiro</span> e <span className="gradient-text">Clientes</span>
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8">
            Cada minuto que passa é mais um potencial cliente sendo ignorado, mais um horário vazio na agenda, 
            mais dinheiro deixado na mesa.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            A <span className="gradient-text font-semibold">Agenda Magnética</span> foi criada especificamente 
            para profissionais de estética que querem elevar seu negócio ao próximo nível — com atendimento premium, 
            agenda otimizada e mais tempo para fazer o que realmente importa.
          </p>
        </div>

        <Button 
          onClick={scrollToForm}
          size="lg"
          className="btn-premium text-2xl px-16 py-8 mb-8 glow-effect"
        >
          QUERO TRANSFORMAR MINHA AGENDA AGORA →
        </Button>

        {/* Urgência */}
        <div className="card-premium p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-2xl animate-pulse">⚡</span>
            <span className="text-xl font-bold text-orange-400">OFERTA DE LANÇAMENTO</span>
            <span className="text-2xl animate-pulse">⚡</span>
          </div>
          
          <p className="text-lg text-foreground/80 mb-4">
            <span className="text-red-400 font-semibold">Por tempo limitado:</span> Setup Premium grátis apenas para os 
            <span className="text-orange-400 font-bold"> 10 primeiros</span>
          </p>
          
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <p className="text-red-400 font-medium">
              🔥 Restam apenas <span className="text-2xl font-bold">3 vagas</span> com desconto especial
            </p>
          </div>
        </div>

        {/* Benefícios finais */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="card-premium p-6">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold mb-2 gradient-text">Implementação Rápida</h3>
            <p className="text-foreground/70">Sua agenda funcionando em até 48h</p>
          </div>
          
          <div className="card-premium p-6">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2 gradient-text">Resultados Garantidos</h3>
            <p className="text-foreground/70">Ou seu dinheiro de volta em 15 dias</p>
          </div>
          
          <div className="card-premium p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2 gradient-text">Suporte Completo</h3>
            <p className="text-foreground/70">Acompanhamento até você dominar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFinalSection;