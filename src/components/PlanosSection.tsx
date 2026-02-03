import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star, Gift, Calendar, Shield } from "lucide-react";

const PlanosSection = () => {
  const planos = [
    {
      nome: "PLANO ESSENCIAL",
      preco: "R$ 299",
      periodo: "/mês",
      precoAnual: "R$ 3.564/ano (R$ 297/mês)",
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
      cta: "ESCOLHER PLANO PREMIUM"
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
        "Campanhas inteligentes",
        "Triagem inicial inteligente",
        "Funcionalidades exclusivas"
      ],
      cta: "QUERO PERSONALIZADO"
    }
  ];

  const handlePlanClick = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="planos" className="py-20 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">INVESTIMENTO</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Escolha o Plano <span className="text-primary">Ideal</span> Para Sua Clínica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todos os planos incluem setup gratuito e suporte completo
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {planos.map((plano, index) => (
            <Card 
              key={index}
              className={`relative hover:-translate-y-1 transition-all duration-300 ${
                plano.popular 
                  ? 'border-2 border-primary shadow-lg scale-105 lg:scale-110' 
                  : 'border border-border/50 shadow-soft'
              }`}
            >
              {plano.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 shadow-md">
                  <Star className="w-4 h-4 mr-1" />
                  MAIS POPULAR
                </Badge>
              )}
              
              <CardHeader className="text-center pb-2 pt-8">
                <h3 className="text-lg font-bold text-primary">
                  {plano.nome}
                </h3>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-4xl font-bold font-display mb-1">
                    {plano.preco}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {plano.periodo}
                  </div>
                  {plano.precoAnual && (
                    <div className="text-xs text-green-600 mt-2 font-medium">
                      ou {plano.precoAnual}
                    </div>
                  )}
                  {plano.precoMensal && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {plano.precoMensal}
                    </div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-6 text-left">
                  {plano.recursos.map((recurso, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{recurso}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={handlePlanClick}
                  className={`w-full py-3 h-auto text-sm font-semibold ${
                    plano.popular 
                      ? 'btn-premium' 
                      : 'bg-foreground text-background hover:bg-foreground/90'
                  }`}
                >
                  {plano.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bônus exclusivos */}
        <Card className="max-w-4xl mx-auto shadow-card mb-8">
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Gift className="w-6 h-6 text-primary" />
              <h3 className="font-display text-2xl font-bold">BÔNUS EXCLUSIVOS</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Agenda integrada para o seu controle
                </h4>
                <div className="text-xl font-bold text-primary mb-1">
                  <span className="line-through text-muted-foreground text-base mr-2">R$ 197/mês</span>
                  GRÁTIS
                </div>
                <p className="text-sm text-muted-foreground">
                  Sem custo adicional para sempre!
                </p>
              </div>
              
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6 text-center">
                <Gift className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Pagando Plano Anual
                </h4>
                <div className="text-xl font-bold text-green-600 mb-1">
                  GANHE 2 ANOS!
                </div>
                <p className="text-sm text-muted-foreground">
                  Pague 1 ano e use por 2 anos completos
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Garantia */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-green-600 font-semibold text-sm">
              GARANTIA DE 15 DIAS - Experimente sem compromisso
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanosSection;