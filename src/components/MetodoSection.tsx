import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Heart, Target, Sparkles } from "lucide-react";

const MetodoSection = () => {
  const metodoCare = [
    {
      letra: "C",
      titulo: "Capturar Atenção",
      descricao: "Você aprende a responder de um jeito que mantém o interesse ativo desde a primeira mensagem.",
      icon: MessageSquare,
    },
    {
      letra: "A", 
      titulo: "Acolher com Conexão",
      descricao: "O lead se sente seguro, entendido e confiante antes mesmo de falar em preço.",
      icon: Heart,
    },
    {
      letra: "R",
      titulo: "Resolver para Converter", 
      descricao: "A conversa avança naturalmente para o agendamento, sem insistência.",
      icon: Target,
    },
    {
      letra: "E",
      titulo: "Encantar para Fidelizar",
      descricao: "Menos faltas, mais retorno e mais indicações.", 
      icon: Sparkles,
    }
  ];

  return (
    <section id="metodo" className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">O MÉTODO</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Atendimento não é só responder.{" "}
            <span className="text-primary">É saber conduzir até o agendamento.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            O Método C.A.R.E é um método simples de condução de conversas,
            criado especialmente para profissionais de estética que querem lotar a agenda sem precisar insistir ou baixar preço.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metodoCare.map((item, index) => (
            <div key={index}>
              <Card className="h-full shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary/30 bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white">{item.letra}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{item.titulo}</h3>
                  <p className="text-muted-foreground">{item.descricao}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-lg font-medium text-foreground">
          Esse método te dá controle da conversa, sem forçar venda.
        </p>
      </div>
    </section>
  );
};

export default MetodoSection;