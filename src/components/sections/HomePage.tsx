import { PageLayout } from "../layout/PageLayout";
import { AntioxidantHeroSection } from "./AntioxidantHeroSection";
import { BenefitsSection } from "./BenefitsSection";
import { ProblemSection } from "./ProblemSection";
import { DrinkingWaterPathSection } from "./DrinkingWaterPathSection";
import { EnemySection } from "./EnemySection";
import { HealthImpactSection } from "./HealthImpactSection";
import { HeroSection } from "./HeroSection";

export function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <ProblemSection />
      <EnemySection />
      <HealthImpactSection />
      <AntioxidantHeroSection />
      <DrinkingWaterPathSection />
      <BenefitsSection />
      {/* <HiddenDriverSection />
      <TechnologySection />
      <ResourcesSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
      <DisclaimerSection /> */}
    </PageLayout>
  );
}
