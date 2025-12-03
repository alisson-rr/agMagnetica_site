const SolucaoSection = () => {
  return (
    <section id="solucao" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Apresentando a <span className="gradient-text">Agenda Magnética</span>: 
            O Único Sistema de Agendamento que Vende Por Você
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
              A Agenda Magnética é o único sistema de agendamento que transforma seu WhatsApp em um 
              atendente inteligente capaz de vender, confirmar e organizar a rotina da sua clínica 
              de forma automática, 24h por dia, sem depender de equipe e sem falhas humanas.
            </p>
            
            <p className="text-lg text-foreground/70 leading-relaxed">
              Diferente de chatbots robóticos e limitados, nossa IA é{" "}
              <span className="text-orange-400 font-semibold">humanizada e calorosa</span>, 
              treinada com as melhores práticas de vendas para o mercado de estética e 
              personalizada com o seu próprio jeito de falar.
            </p>
          </div>
        </div>

        {/* Mockup da interface */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 glow-effect">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Interface do WhatsApp */}
              <div className="bg-gray-900 rounded-2xl overflow-hidden">
                <div className="bg-green-600 p-4 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">AM</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Agenda Magnética</h3>
                    <p className="text-white/70 text-sm">online</p>
                  </div>
                </div>
                
                <div className="p-4 space-y-4 h-96 overflow-y-auto">
                  <div className="bg-white/10 rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Olá! Gostaria de saber sobre preços de botox</p>
                    <span className="text-xs text-foreground/50">14:30</span>
                  </div>
                  
                  <div className="bg-green-600/80 rounded-lg p-3 max-w-xs ml-auto">
                    <p className="text-sm text-white">Oi! Que bom te ver aqui! 😊 O botox é um dos nossos procedimentos mais procurados. Vou te passar todas as informações!</p>
                    <span className="text-xs text-white/70">14:30</span>
                  </div>
                  
                  <div className="bg-green-600/80 rounded-lg p-3 max-w-xs ml-auto">
                    <p className="text-sm text-white">Temos pacotes especiais que incluem avaliação + aplicação + retorno. Qual região você gostaria de tratar?</p>
                    <span className="text-xs text-white/70">14:31</span>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Testa e ao redor dos olhos</p>
                    <span className="text-xs text-foreground/50">14:32</span>
                  </div>
                  
                  <div className="bg-green-600/80 rounded-lg p-3 max-w-xs ml-auto">
                    <p className="text-sm text-white">Perfeito! Para essa região, temos horários disponíveis esta semana. Que tal agendarmos uma avaliação gratuita? 📅</p>
                    <span className="text-xs text-white/70">14:32</span>
                  </div>
                </div>
              </div>

              {/* Benefícios */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">24h</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Atendimento 24/7</h3>
                    <p className="text-foreground/70">Nunca mais perca um cliente por não responder na hora</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">💰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Vende Automaticamente</h3>
                    <p className="text-foreground/70">Converte leads em agendamentos sem sua intervenção</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">IA Humanizada</h3>
                    <p className="text-foreground/70">Conversa como você, mantendo sua personalidade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolucaoSection;