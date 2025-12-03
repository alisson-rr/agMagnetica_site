import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const scrollToPlanos = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding pt-32 text-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Badges de confiança */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="outline" className="border-orange-500/30 text-orange-400 bg-orange-500/10">
            ✓ Especializado em Clínicas de Estética
          </Badge>
          <Badge variant="outline" className="border-purple-500/30 text-purple-400 bg-purple-500/10">
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
          <span className="text-orange-400 font-semibold">85%</span> — mesmo quando você está ocupada atendendo
        </p>

        {/* CTA Principal */}
        <Button 
          onClick={scrollToPlanos}
          size="lg"
          className="btn-premium text-lg px-12 py-6 mb-8 glow-effect"
        >
          GARANTIR MINHA AGENDA MAGNÉTICA AGORA →
        </Button>

        {/* Mockup placeholder */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="bg-green-600 rounded-t-xl p-4 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-white text-sm ml-4">WhatsApp Business</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4 text-left">
                <p className="text-sm text-foreground/60 mb-2">Cliente • 14:32</p>
                <p>Oi! Gostaria de agendar um procedimento de harmonização facial</p>
              </div>
              <div className="bg-green-600/20 rounded-lg p-4 text-left ml-8">
                <p className="text-sm text-foreground/60 mb-2">Agenda Magnética • 14:32</p>
                <p>Olá! Que bom te ver por aqui! 😊 Vou te ajudar com o agendamento da harmonização facial. Temos horários disponíveis esta semana. Qual dia seria melhor para você?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;