import { X } from "lucide-react";

const ProblemaSection = () => {
  const problemas = [
    {
      icon: "❌",
      titulo: "Horas no WhatsApp",
      descricao: "mas poucos orçamentos fechados"
    },
    {
      icon: "❌", 
      titulo: "Serviços premium",
      descricao: "que não são valorizados no preço"
    },
    {
      icon: "❌",
      titulo: "Dificuldade para vender",
      descricao: "pacotes completos de tratamento"
    },
    {
      icon: "❌",
      titulo: "Clientes que faltam",
      descricao: "sem avisar (e seu horário fica vazio)"
    },
    {
      icon: "❌",
      titulo: "Sempre \"de plantão\"",
      descricao: "sem conseguir se desconectar"
    },
    {
      icon: "❌",
      titulo: "Atendimento robotizado",
      descricao: "mas sem saber como humanizar"
    },
    {
      icon: "❌",
      titulo: "Medo de padronizar",
      descricao: "e perder a proximidade com o cliente"
    },
    {
      icon: "❌",
      titulo: "Concorrentes com preços menores",
      descricao: "\"roubando\" suas clientes"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-red-900/10 to-red-800/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Reconhece Algum Desses Sinais na Sua Clínica?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problemas.map((problema, index) => (
            <div 
              key={index}
              className="card-premium p-6 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{problema.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-red-400">
                {problema.titulo}
              </h3>
              <p className="text-foreground/70 text-sm">
                {problema.descricao}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            Se você identificou pelo menos <span className="text-orange-400 font-semibold">3 desses sinais</span>, 
            sua clínica está deixando dinheiro na mesa todos os dias — e a{" "}
            <span className="gradient-text font-semibold">Agenda Magnética</span>{" "}
            foi criada especificamente para você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemaSection;