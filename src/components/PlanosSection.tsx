import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const PlanosSection = () => {
  const planos = [
    {
      nome: "PLANO ESSENCIAL",
      preco: "R$ 297",
      periodo: "/mês (Plano Anual)",
      precoAnual: "R$ 399/mês)",
      popular: false,
      recursos: [
        "Atendente Humanizado 24h/dia",
        "Resposta automática instantânea", 
        "Agendamento automático",
        "Suporte e manutenção contínuos"
      ],
      cta: "ESCOLHER ESTE PLANO"
    },
    {
      nome: "PLANO PREMIUM",
      preco: "R$ 467",
      periodo: "/mês (Plano Anual)",
      precoMensal: "R$ 599/mês (Mensal)",
      popular: true,
      recursos: [
        "Tudo do Plano Essencial",
        "Multi profissionais",
        "Lembretes de consulta",
        "Histórico do cliente para recomendações",
        "Avaliações pós-consulta",
        "Acompanhamento por 90 dias"
      ],
      cta: "ESCOLHER ESTE PLANO - MAIS POPULAR"
    },
    {
      nome: "PLANO PERSONALIZADO", 
      preco: "A partir de R$ 799",
      periodo: "/mês",
      popular: false,
      recursos: [
        "Tudo dos planos anteriores",
        "Cadastro automático de clientes",
        "Envio de links de pagamento",
        "Campanhas inteligentes (aniversários, retornos)",
        "Triagem inicial inteligente",
        "Funcionalidades exclusivas para sua clínica"
      ],
      cta: "QUERO UM PLANO PERSONALIZADO"
    }
  ];

  const handlePlanClick = (planName: string) => {
    // Scroll to lead form
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="planos" className="section-padding bg-gradient-to-br from-purple-900/10 to-blue-900/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Escolha o Plano <span className="gradient-text">Ideal</span> Para Sua Clínica
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Todos os planos incluem setup gratuito e suporte completo
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {planos.map((plano, index) => (
            <div 
              key={index}
              className={`card-premium p-8 text-center relative hover:scale-105 transition-all duration-300 ${
                plano.popular ? 'ring-2 ring-orange-500/50 glow-effect' : ''
              }`}
            >
              {plano.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-purple-500 text-white px-4 py-1">
                  <Star className="w-4 h-4 mr-1" />
                  MAIS POPULAR
                </Badge>
              )}
              
              <h3 className="text-xl font-bold mb-4 gradient-text">
                {plano.nome}
              </h3>
              
              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  {plano.preco}
                </div>
                <div className="text-foreground/60">
                  {plano.periodo}
                </div>
                {plano.precoAnual && (
                  <div className="text-sm text-green-400 mt-1">
                    ou {plano.precoAnual}
                  </div>
                )}
                {plano.precoMensal && (
                  <div className="text-sm text-foreground/60 mt-1">
                    {plano.precoMensal}
                  </div>
                )}
              </div>
              
              <ul className="space-y-3 mb-8 text-left">
                {plano.recursos.map((recurso, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{recurso}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => handlePlanClick(plano.nome)}
                className={`w-full ${plano.popular ? 'btn-premium' : 'bg-card-foreground text-card hover:bg-card-foreground/90'}`}
              >
                {plano.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Bônus exclusivos */}
        <div className="card-premium p-8 text-center mb-8">
          <h3 className="text-2xl font-bold mb-6 gradient-text">
            🎁 BÔNUS EXCLUSIVOS
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-orange-400 mb-3">
                Template de Calendário Editorial para Estética
              </h4>
              <div className="text-2xl font-bold text-orange-400 mb-2">
                <span className="line-through text-foreground/50">R$ 197</span> GRÁTIS
              </div>
              <p className="text-sm text-foreground/70">
                Conteúdo pronto para suas redes sociais por 12 meses
              </p>
            </div>
            
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-purple-400 mb-3">
                Pagando Plano Anual
              </h4>
              <div className="text-2xl font-bold text-purple-400 mb-2">
                GANHE 2 ANOS!
              </div>
              <p className="text-sm text-foreground/70">
                Pague 1 ano e use por 2 anos completos
              </p>
            </div>
          </div>
        </div>

        {/* Garantia */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3">
            <span className="text-2xl">🛡️</span>
            <span className="text-green-400 font-semibold">
              GARANTIA DE 15 DIAS - Experimente sem compromisso
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanosSection;
