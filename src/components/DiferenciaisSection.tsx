import { Check, Bot, Sparkles, Palette, ShieldCheck, Zap, X } from "lucide-react";

const DiferenciaisSection = () => {
  const diferenciais = [
    {
      icon: Bot,
      titulo: "IA Humanizada, Não Robótica",
      descricao: "Comunicação que parece humana, gerando conexão imediata",
      detalhes: "Personalidade alinhada ao tom da sua clínica"
    },
    {
      icon: Sparkles,
      titulo: "Especializada em Estética", 
      descricao: "Vocabulário e abordagem específicos para o mercado de beleza",
      detalhes: "Entende procedimentos e orienta adequadamente"
    },
    {
      icon: Palette,
      titulo: "100% Personalizada",
      descricao: "Adaptada ao seu jeito de falar e à sua marca",
      detalhes: "Ajustável conforme suas preferências específicas"
    },
    {
      icon: ShieldCheck,
      titulo: "Segura e Confiável",
      descricao: "Atende às normas da LGPD",
      detalhes: "Sistemas redundantes que nunca deixam você na mão"
    },
    {
      icon: Zap,
      titulo: "Implementação Descomplicada",
      descricao: "Setup simplificado, sem complicações técnicas", 
      detalhes: "Integração perfeita com seu fluxo atual"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O Que Torna a <span className="gradient-text">Agenda Magnética</span> Exclusiva Para Estética
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((diferencial, index) => (
            <div 
              key={index}
              className="card-premium p-8 text-center hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <diferencial.icon className="w-9 h-9 text-white" />
              </div>
              
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Check className="w-5 h-5 text-green-400" />
                <h3 className="text-xl font-bold gradient-text">
                  {diferencial.titulo}
                </h3>
              </div>
              
              <p className="text-foreground/80 mb-3 font-medium">
                {diferencial.descricao}
              </p>
              
              <p className="text-sm text-foreground/60">
                {diferencial.detalhes}
              </p>
            </div>
          ))}
        </div>

        {/* Comparação com concorrentes */}
        <div className="mt-16 card-premium p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 gradient-text">
            Agenda Magnética vs. Outros Sistemas
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4">Características</th>
                  <th className="text-center py-4 px-4 text-primary">Agenda Magnética</th>
                  <th className="text-center py-4 px-4 text-foreground/60">Chatbots Genéricos</th>
                  <th className="text-center py-4 px-4 text-foreground/60">Atendimento Manual</th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4">Atendimento 24h</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4">Especializado em Estética</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4">Comunicação Humanizada</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4">Custo Mensal</td>
                  <td className="text-center py-4 px-4 text-green-400">R$ 299+</td>
                  <td className="text-center py-4 px-4 text-yellow-400">R$ 150+</td>
                  <td className="text-center py-4 px-4 text-red-400">R$ 2.500+</td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Setup e Manutenção</td>
                  <td className="text-center py-4 px-4 text-green-400">Incluso</td>
                  <td className="text-center py-4 px-4 text-yellow-400">Complexo</td>
                  <td className="text-center py-4 px-4 text-red-400">Constante</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;