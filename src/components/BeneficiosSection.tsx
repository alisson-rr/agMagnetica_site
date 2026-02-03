import { Clock, CalendarCheck, DollarSign, Star, BarChart3, Check } from "lucide-react";

const BeneficiosSection = () => {
  const beneficios = [
    {
      icon: Clock,
      titulo: "Respostas Imediatas, Mais Conversões",
      estatistica: "32% dos potenciais clientes desistem nos primeiros 5 minutos",
      resultado: "Responder em até 5 minutos aumenta suas chances de fechamento em até 21 vezes!",
      cor: "from-primary to-primary"
    },
    {
      icon: CalendarCheck, 
      titulo: "Agenda Lotada, Sem Faltas",
      estatistica: "Reduza no-shows em até 52% com lembretes inteligentes",
      resultado: "Aumente sua taxa de ocupação para mais de 85%",
      cor: "from-accent to-accent"
    },
    {
      icon: DollarSign,
      titulo: "Economia Real e Tangível", 
      estatistica: "Economize as 16 horas/mês gastas em atendimento manual",
      resultado: "Equivalente a R$3.200 em potencial de faturamento \"travado\"",
      cor: "from-green-500 to-green-600"
    },
    {
      icon: Star,
      titulo: "Experiência Premium para Seus Clientes",
      estatistica: "NPS acima de 50 (considerado excelente no setor de estética)",
      resultado: "Taxa de retenção de clientes superior a 70%",
      cor: "from-blue-500 to-blue-500"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Resultados <span className="gradient-text">Reais</span> Para Sua Clínica de Estética
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {beneficios.map((beneficio, index) => (
            <div 
              key={index}
              className="card-premium p-8 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${beneficio.cor} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <beneficio.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 gradient-text">
                    {beneficio.titulo}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <p className="text-red-400 font-medium text-sm flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" /> {beneficio.estatistica}
                      </p>
                    </div>
                    
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <p className="text-green-400 font-medium text-sm flex items-center gap-2">
                        <Check className="w-4 h-4" /> {beneficio.resultado}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de economia */}
        <div className="mt-16 card-premium p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
            Substitua um Assistente Administrativo
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-red-400 mb-4">Custo Tradicional</h4>
              <div className="text-3xl font-bold text-red-400 mb-2">R$ 2.100 - R$ 2.500</div>
              <p className="text-red-300">por mês + encargos</p>
              <ul className="text-sm text-red-300/80 mt-4 space-y-1">
                <li>• Salário + benefícios</li>
                <li>• Treinamento constante</li>
                <li>• Falhas humanas</li>
                <li>• Horário limitado</li>
              </ul>
            </div>
            
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-green-400 mb-4">Agenda Magnética</h4>
              <div className="text-3xl font-bold text-green-400 mb-2">A partir de R$ 299</div>
              <p className="text-green-300">por mês</p>
              <ul className="text-sm text-green-300/80 mt-4 space-y-1">
                <li>• Sem encargos trabalhistas</li>
                <li>• Atendimento 24/7</li>
                <li>• Zero falhas</li>
                <li>• Sempre disponível</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xl text-foreground/80">
              <span className="gradient-text font-bold">Economia de até 88%</span> nos custos de atendimento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;