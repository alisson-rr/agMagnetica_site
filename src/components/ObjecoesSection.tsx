import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    <section className="section-padding bg-gradient-to-br from-gray-900/20 to-gray-800/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Entendemos suas dúvidas. Aqui estão as respostas para as perguntas mais comuns:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-premium border-none"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-orange-400 transition-colors px-6 py-4">
                  "{faq.pergunta}"
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed px-6 pb-6">
                  {faq.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Seção de garantia */}
        <div className="mt-16 text-center">
          <div className="card-premium p-8 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🛡️</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Garantia de 15 Dias
            </h3>
            
            <p className="text-lg text-foreground/80 mb-6">
              Experimente sem compromisso. Se não ficar satisfeita, devolvemos 100% do seu dinheiro.
            </p>
            
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <p className="text-green-400 font-medium">
                ✅ Teste por 15 dias completos<br/>
                ✅ Suporte total durante o período<br/>
                ✅ Cancelamento sem burocracia<br/>
                ✅ Reembolso integral garantido
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjecoesSection;