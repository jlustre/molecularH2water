import { PageLayout } from "../layout/PageLayout";
import { AntioxidantHeroSection } from "./AntioxidantHeroSection";
import { BenefitsSection } from "./BenefitsSection";
import { ProblemSection } from "./ProblemSection";
import { DrinkingWaterPathSection } from "./DrinkingWaterPathSection";
import { EnemySection } from "./EnemySection";
import { HeroSection } from "./HeroSection";
import { RecommendedByExpertsSection } from "./RecommendedByExpertsSection";

export function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <ProblemSection />
      <EnemySection />
      <AntioxidantHeroSection />
      <DrinkingWaterPathSection />
      <BenefitsSection />
      <RecommendedByExpertsSection />
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
