import BgGradient from "@/components/common/bg-gradient";
import DemoSection from "@/components/home/demo-section";
import HeroSection from "@/components/home/hero-section";
import HowItWorkSection from "@/components/home/how-it-works";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
      </div>
      <DemoSection />
      <HowItWorkSection />
      {/* <PricingSection /> */}
      {/* <CTASection /> */}
    </div>
  );
}
