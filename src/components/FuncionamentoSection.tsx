const FuncionamentoSection = () => {
  const etapas = [
    {
      numero: "1",
      titulo: "Atendimento Humanizado 24/7",
      descricao: "Sua IA personalizada responde dúvidas e interage como se fosse você",
      detalhes: "Comunicação calorosa que mantém a identidade da sua clínica",
      icon: "🤖"
    },
    {
      numero: "2", 
      titulo: "Agendamento Inteligente",
      descricao: "Mostra horários disponíveis e organiza sua agenda automaticamente",
      detalhes: "Confirmações e lembretes que reduzem faltas drasticamente",
      icon: "📅"
    },
    {
      numero: "3",
      titulo: "Acompanhamento Contínuo",
      descricao: "Envio de orientações pré e pós-procedimento",
      detalhes: "Lembretes de retorno para aumentar recorrência",
      icon: "💌"
    },
    {
      numero: "4",
      titulo: "Análise de Resultados", 
      descricao: "Relatórios de desempenho para otimizar sua operação",
      detalhes: "Insights sobre horários mais procurados e serviços mais populares",
      icon: "📊"
    }
  ];

  const scrollToPlanos = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-gradient-to-br from-blue-900/10 to-purple-900/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Como a <span className="gradient-text">Agenda Magnética</span> Trabalha Por Você
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Fluxo visual */}
          <div className="space-y-8">
            {etapas.map((etapa, index) => (
              <div 
                key={index}
                className="flex items-start space-x-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{etapa.icon}</span>
                  </div>
                  {index < etapas.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-orange-500 to-purple-500 mx-auto mt-4" />
                  )}
                </div>
                
                <div className="flex-1 card-premium p-6 group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{etapa.numero}</span>
                    </div>
                    <h3 className="text-xl font-bold gradient-text">{etapa.titulo}</h3>
                  </div>
                  
                  <p className="text-foreground/80 mb-2 font-medium">
                    {etapa.descricao}
                  </p>
                  
                  <p className="text-sm text-foreground/60">
                    {etapa.detalhes}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Demonstração visual */}
          <div className="relative">
            <div className="card-premium p-8 glow-effect">
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                Fluxo Automatizado em Ação
              </h3>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-blue-400 font-medium">Cliente entra em contato</span>
                  </div>
                  <p className="text-sm text-foreground/70">"Oi, gostaria de saber sobre preenchimento labial"</p>
                </div>
                
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-orange-400 font-medium">IA responde instantaneamente</span>
                  </div>
                  <p className="text-sm text-foreground/70">"Olá! Que bom te ver aqui! 😊 Vou te ajudar com todas as informações sobre preenchimento labial..."</p>
                </div>
                
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-purple-400 font-medium">Agendamento automático</span>
                  </div>
                  <p className="text-sm text-foreground/70">"Tenho horários disponíveis amanhã às 14h e sexta às 10h. Qual prefere?"</p>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400 font-medium">Confirmação e lembretes</span>
                  </div>
                  <p className="text-sm text-foreground/70">"Agendamento confirmado! Vou te enviar lembretes e orientações pré-procedimento."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={scrollToPlanos}
            className="btn-premium text-lg px-8 py-4"
          >
            QUERO AUTOMATIZAR MINHA AGENDA AGORA →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FuncionamentoSection;