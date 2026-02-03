import { Button } from "@/components/ui/button";
import { Zap, Flame, Clock, Target, Rocket } from "lucide-react";

const CTAFinalSection = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta-final" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
          Pare de Perder <span className="text-primary">Tempo</span>, 
          <span className="text-primary"> Dinheiro</span> e <span className="text-primary">Clientes</span>
        </h2>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Cada minuto que passa é mais um potencial cliente sendo ignorado, mais um horário vazio na agenda, 
            mais dinheiro deixado na mesa.
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            A <span className="text-primary font-semibold">Agenda Magnética</span> foi criada especificamente 
            para profissionais de estética que querem elevar seu negócio ao próximo nível.
          </p>
        </div>

        <Button 
          onClick={scrollToForm}
          size="lg"
          className="btn-premium text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 mb-10 h-auto"
        >
          QUERO TRANSFORMAR MINHA AGENDA AGORA →
        </Button>

        {/* Urgência */}
        <div className="bg-card border border-border/50 shadow-card rounded-2xl p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-xl font-bold text-primary">OFERTA DE LANÇAMENTO</span>
            <Zap className="w-6 h-6 text-primary animate-pulse" />
          </div>
          
          <p className="text-lg text-foreground/80 mb-4">
            <span className="text-red-500 font-semibold">Por tempo limitado:</span> Setup Premium grátis apenas para os 
            <span className="text-primary font-bold"> 10 primeiros</span>
          </p>
          
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center justify-center gap-2">
            <Flame className="w-5 h-5 text-red-500" />
            <p className="text-red-500 font-medium">
              Restam apenas <span className="text-xl font-bold">3 vagas</span> com desconto especial
            </p>
          </div>
        </div>

        {/* Benefícios finais */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-card border border-border/50 shadow-soft rounded-xl p-6 text-center">
            <div className="w-14 h-14 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Implementação Rápida</h3>
            <p className="text-muted-foreground text-sm">Sua agenda funcionando em até 48h</p>
          </div>
          
          <div className="bg-card border border-border/50 shadow-soft rounded-xl p-6 text-center">
            <div className="w-14 h-14 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Resultados Garantidos</h3>
            <p className="text-muted-foreground text-sm">Ou seu dinheiro de volta em 15 dias</p>
          </div>
          
          <div className="bg-card border border-border/50 shadow-soft rounded-xl p-6 text-center">
            <div className="w-14 h-14 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Suporte Completo</h3>
            <p className="text-muted-foreground text-sm">Acompanhamento até você dominar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFinalSection;