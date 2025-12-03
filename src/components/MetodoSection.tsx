import { Badge } from "@/components/ui/badge";

const MetodoSection = () => {
  const metodoCare = [
    {
      letra: "C",
      titulo: "CAPTURAR",
      descricao: "a atenção desde o primeiro contato",
      detalhes: "Mensagens impactantes que fazem o cliente parar e prestar atenção na sua clínica",
      cor: "from-orange-500 to-orange-600"
    },
    {
      letra: "A", 
      titulo: "ACOLHER",
      descricao: "com mensagens que geram conexão emocional",
      detalhes: "Comunicação calorosa que faz o cliente se sentir especial e bem-vindo",
      cor: "from-purple-500 to-purple-600"
    },
    {
      letra: "R",
      titulo: "RESPONDER", 
      descricao: "de forma padronizada mas personalizada",
      detalhes: "Respostas consistentes que mantêm a qualidade, mas com o seu toque pessoal",
      cor: "from-pink-500 to-pink-600"
    },
    {
      letra: "E",
      titulo: "ENCANTAR",
      descricao: "transformando clientes em fãs da sua clínica", 
      detalhes: "Experiência tão boa que gera indicações espontâneas e fidelização",
      cor: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="metodo" className="section-padding bg-gradient-to-br from-purple-900/10 to-blue-900/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O Método <span className="gradient-text">C.A.R.E</span>: 
            Exclusivo para o Mercado de Estética
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl text-foreground/80 mb-6 leading-relaxed">
              Desenvolvido por <span className="text-orange-400 font-semibold">Alisson Rosa</span>, 
              especialista em automações e vendas humanizadas, o Método C.A.R.E já ajudou mais de{" "}
              <span className="text-purple-400 font-semibold">500 profissionais de estética</span>{" "}
              a aumentar agendamentos, reduzir faltas e multiplicar o faturamento.
            </p>
            
            <Badge variant="outline" className="border-orange-500/30 text-orange-400 bg-orange-500/10 text-lg px-6 py-2">
              Criador do Ebook "Guia Definitivo para Clínicas de Estética" — Referência no setor
            </Badge>
          </div>
          
          <p className="text-lg text-foreground/70 mb-12">
            Cada letra representa uma fase crucial do atendimento perfeito:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metodoCare.map((fase, index) => (
            <div 
              key={index}
              className="card-premium p-8 text-center hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${fase.cor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl font-bold text-white">{fase.letra}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 gradient-text">
                {fase.titulo}
              </h3>
              
              <p className="text-foreground/80 mb-4 font-medium">
                {fase.descricao}
              </p>
              
              <p className="text-sm text-foreground/60 leading-relaxed">
                {fase.detalhes}
              </p>
            </div>
          ))}
        </div>

        {/* Fluxo visual */}
        <div className="mt-16 relative">
          <div className="flex justify-center items-center space-x-4 md:space-x-8">
            {metodoCare.map((fase, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${fase.cor} rounded-full flex items-center justify-center`}>
                  <span className="text-xl font-bold text-white">{fase.letra}</span>
                </div>
                {index < metodoCare.length - 1 && (
                  <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-2 md:mx-4" />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-foreground/70">
              = <span className="gradient-text font-bold text-xl">Clientes Encantados e Agenda Lotada</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetodoSection;