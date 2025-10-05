import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import AttorneysSection from "@/components/AttorneysSection";
import InsuranceSection from "@/components/InsuranceSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProcessSection />
      <PricingSection />
      <AttorneysSection />
      <InsuranceSection />
      <CTASection />
    </div>
  );
}
