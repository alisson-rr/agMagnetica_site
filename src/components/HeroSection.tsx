import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const scrollToPlanos = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding pt-32 text-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Badges de confiança */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10">
            ✓ Especializado em Clínicas de Estética
          </Badge>
          <Badge variant="outline" className="border-accent/30 text-accent bg-accent/10">
            ✓ Método C.A.R.E Exclusivo
          </Badge>
          <Badge variant="outline" className="border-green-500/30 text-green-400 bg-green-500/10">
            ✓ Garantia de 15 dias
          </Badge>
        </div>

        {/* Headline Principal */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Transforme seu WhatsApp em uma{" "}
          <span className="gradient-text">Máquina de Agendamentos</span>{" "}
          que Trabalha por Você{" "}
          <span className="gradient-text">24h/dia</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-4xl mx-auto leading-relaxed">
          Atendimento humanizado, respostas imediatas e agendamentos automáticos que aumentam sua ocupação em até{" "}
          <span className="text-primary font-semibold">85%</span> — mesmo quando você está ocupada atendendo
        </p>

        {/* CTA Principal */}
        <Button 
          onClick={scrollToPlanos}
          size="lg"
          className="btn-premium text-sm sm:text-lg px-6 sm:px-12 py-4 sm:py-6 mb-8 glow-effect h-auto"
        >
          GARANTIR MINHA AGENDA MAGNÉTICA AGORA →
        </Button>

        {/* Mockup placeholder */}
        <div className="mt-16 relative">
          <div className="bg-gray-900 rounded-2xl overflow-hidden max-w-2xl mx-auto shadow-2xl">
            <div className="bg-green-600 p-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">AM</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Agenda Magnética</h3>
                <p className="text-white/70 text-sm">online</p>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-white/10 rounded-lg p-3 max-w-xs">
                <p className="text-sm text-white text-left">Oi! Gostaria de agendar um procedimento de harmonização facial</p>
                <span className="text-xs text-white/50 text-left block">14:32</span>
              </div>
              <div className="bg-green-600/80 rounded-lg p-3 max-w-xs ml-auto">
                <p className="text-sm text-white text-left">Olá! Que bom te ver por aqui! Vou te ajudar com o agendamento da harmonização facial. Temos horários disponíveis esta semana. Qual dia seria melhor para você?</p>
                <span className="text-xs text-white/70 text-left block">14:32</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;