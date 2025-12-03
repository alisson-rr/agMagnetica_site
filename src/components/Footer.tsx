const Footer = () => {
  return (
    <footer className="bg-background/50 border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e descrição */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Agenda Magnética" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold gradient-text">Agenda Magnética</span>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Transformando clínicas de estética com atendimento automatizado e humanizado. 
              Mais agendamentos, menos trabalho manual.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Contato</h3>
            <div className="space-y-2 text-sm text-foreground/70">
              <p>📱 WhatsApp: (51) 99440-8307</p>
              <p>📧 contato@agendamagnetica.com.br</p>
              <p>🕒 Atendimento: Seg-Sex, 9h às 18h</p>
            </div>
          </div>

          {/* Links úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Links Úteis</h3>
            <div className="space-y-2 text-sm text-foreground/70">
              <p>📋 Política de Privacidade</p>
              <p>📄 Termos de Uso</p>
              <p>🛡️ Garantia de 15 dias</p>
              <p>❓ Perguntas Frequentes</p>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-foreground/60">
              © 2025 Agenda Magnética | CNPJ: 56.419.023/0001-90
            </div>
            
            <div className="text-sm text-foreground/60 text-center md:text-right">
              Desenvolvido por <span className="text-orange-400 font-medium">Alisson Rosa</span><br/>
              Especialista em Automação para Estética
            </div>
          </div>
        </div>

        {/* Selo de confiança */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3">
            <span className="text-green-400 text-sm font-medium">
              🔒 Site Seguro | 🛡️ Dados Protegidos | ✅ LGPD Compliance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;