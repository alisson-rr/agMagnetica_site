import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemaSection from "@/components/ProblemaSection";
import SolucaoSection from "@/components/SolucaoSection";
import MetodoSection from "@/components/MetodoSection";
import BeneficiosSection from "@/components/BeneficiosSection";
import FuncionamentoSection from "@/components/FuncionamentoSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import ObjecoesSection from "@/components/ObjecoesSection";
import PlanosSection from "@/components/PlanosSection";
import LeadForm from "@/components/LeadForm";
import CTAFinalSection from "@/components/CTAFinalSection";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemaSection />
      <SolucaoSection />
      <MetodoSection />
      <BeneficiosSection />
      <FuncionamentoSection />
      <DiferenciaisSection />
      <ObjecoesSection />
      <PlanosSection />
      <CTAFinalSection />
      <LeadForm />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
