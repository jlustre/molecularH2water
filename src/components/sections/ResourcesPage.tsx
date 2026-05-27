import { PageLayout } from "../layout/PageLayout";
import { LifeChangingImpactSection } from "./LifeChangingImpactSection";
import { RecommendedByExpertsSection } from "./RecommendedByExpertsSection";
import { BonusMachineProgramSection } from "./BonusMachineProgramSection";
import { WhatResearchShowsSection } from "./WhatResearchShowsSection";

export function ResourcesPage() {
  return (
    <PageLayout>
      <RecommendedByExpertsSection />
      <LifeChangingImpactSection />
      <WhatResearchShowsSection />
      <BonusMachineProgramSection />
    </PageLayout>
  );
}
