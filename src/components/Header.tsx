import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/images/logo.png" 
            alt="Agenda Magnética" 
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold gradient-text">Agenda Magnética</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('solucao')}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Solução
          </button>
          <button 
            onClick={() => scrollToSection('metodo')}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Método C.A.R.E
          </button>
          <button 
            onClick={() => scrollToSection('planos')}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Planos
          </button>
          <Button 
            onClick={() => scrollToSection('cta-final')}
            className="btn-premium"
          >
            Começar Agora
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;