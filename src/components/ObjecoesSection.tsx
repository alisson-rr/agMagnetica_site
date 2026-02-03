import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Check, HelpCircle } from "lucide-react";

const ObjecoesSection = () => {
  const faqs = [
    {
      pergunta: "Não tenho tempo para organizar isso agora.",
      resposta: "Na verdade, é exatamente por não ter tempo que a Agenda Magnética existe. Ela tira peso da sua rotina, automatiza o que desgasta e te devolve horas por semana para focar no que realmente importa: os procedimentos e a satisfação das clientes."
    },
    {
      pergunta: "Eu já tenho agenda, funciona bem.",
      resposta: "Agenda funciona... até o movimento aumentar. O problema nunca é ter agenda, é perder dinheiro com encaixes ruins, dias furados e mensagens manuais. A Agenda Magnética resolve justamente o que a agenda tradicional não alcança."
    },
    {
      pergunta: "Atendo pelo WhatsApp, para que um sistema?",
      resposta: "Usar só o WhatsApp é como tentar administrar uma clínica com um bloco de notas: funciona até travar. A Agenda Magnética transforma o WhatsApp em um atendente inteligente, sem você precisar digitar tudo manualmente."
    },
    {
      pergunta: "Não sou muito tecnológica.",
      resposta: "Perfeito. Você não precisa ser. A inteligência da Agenda Magnética já faz o trabalho pesado. Você só precisa clicar e aprovar, igual mandar uma mensagem."
    },
    {
      pergunta: "E se der problema? E se eu ficar na mão?",
      resposta: "Você não fica. A Agenda Magnética tem suporte direto, respostas rápidas e tudo rodando em servidores profissionais. Nada de gambiarras."
    },
    {
      pergunta: "Será que vale o investimento?",
      resposta: "A pergunta real é: quanto custa não usar? Perda de horários, clientes que desistem, follow-up esquecido e tempo manual desperdiçado. Um dia mal preenchido já custa mais que a mensalidade."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-6 h-6 text-primary" />
            <p className="text-primary font-medium">DÚVIDAS FREQUENTES</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entendemos suas dúvidas. Aqui estão as respostas para as perguntas mais comuns:
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-xl bg-card shadow-soft overflow-hidden"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:text-primary transition-colors px-6 py-4 hover:no-underline">
                  {faq.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-5">
                  {faq.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Seção de garantia */}
        <div className="mt-20 text-center">
          <Card className="max-w-2xl mx-auto shadow-card border-t-4 border-t-green-500/50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-4">
                Garantia de 15 Dias
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6">
                Experimente sem compromisso. Se não ficar satisfeita, devolvemos 100% do seu dinheiro.
              </p>
              
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5 text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">Teste por 15 dias completos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">Suporte total durante o período</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">Cancelamento sem burocracia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">Reembolso integral garantido</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ObjecoesSection;