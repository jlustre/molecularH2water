import { PageLayout } from "../layout/PageLayout";
import { AntioxidantHeroSection } from "./AntioxidantHeroSection";
import { ProblemSection } from "./ProblemSection";
import { CtaSection } from "./CtaSection";
import { DisclaimerSection } from "./DisclaimerSection";
import { EnemySection } from "./EnemySection";
import { FaqSection } from "./FaqSection";
import { HiddenDriverSection } from "./HiddenDriverSection";
import { HeroSection } from "./HeroSection";
import { ResourcesSection } from "./ResourcesSection";
import { TechnologySection } from "./TechnologySection";
import { TestimonialSection } from "./TestimonialSection";

export function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <ProblemSection />
      <EnemySection />
      <AntioxidantHeroSection />

      <HiddenDriverSection />
      
      <TechnologySection />
      <ResourcesSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
      <DisclaimerSection />
    </PageLayout>
  );
}
