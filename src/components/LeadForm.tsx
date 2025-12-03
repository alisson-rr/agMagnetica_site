import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulação de envio - em produção, integrar com Google Sheets ou webhook
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log dos dados para desenvolvimento
      console.log('Lead capturado:', {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        timestamp: new Date().toISOString(),
        source: 'Landing Page Agenda Magnética'
      });

      toast({
        title: "Sucesso!",
        description: "Seus dados foram enviados. Em breve entraremos em contato!",
      });
      
      setFormData({ nome: "", email: "", telefone: "" });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="lead-form" className="section-padding bg-gradient-to-br from-orange-900/10 to-purple-900/10">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="card-premium p-8 glow-effect">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Garante Sua Agenda Magnética Agora!
              </h2>
              <p className="text-lg text-foreground/80">
                Preencha os dados abaixo e receba todas as informações para transformar sua clínica
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nome" className="text-foreground/80 mb-2 block">
                  Nome Completo *
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="bg-background/50 border-white/20 focus:border-orange-500"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground/80 mb-2 block">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background/50 border-white/20 focus:border-orange-500"
                  placeholder="Digite seu melhor e-mail"
                />
              </div>

              <div>
                <Label htmlFor="telefone" className="text-foreground/80 mb-2 block">
                  WhatsApp *
                </Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={handleChange}
                  className="bg-background/50 border-white/20 focus:border-orange-500"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-premium text-lg py-6"
              >
                {isSubmitting ? "ENVIANDO..." : "QUERO MINHA AGENDA MAGNÉTICA AGORA! →"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-foreground/60">
                🔒 Seus dados estão seguros conosco. Não enviamos spam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;