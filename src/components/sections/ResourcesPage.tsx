import { PageLayout } from "../layout/PageLayout";
import { LifeChangingImpactSection } from "./LifeChangingImpactSection";
import { RecommendedByExpertsSection } from "./RecommendedByExpertsSection";
import { BonusMachineProgramSection } from "./BonusMachineProgramSection";
import { ExploreMoreSection } from "./ExploreMoreSection";
import { WhatResearchShowsSection } from "./WhatResearchShowsSection";

export function ResourcesPage() {
  return (
    <PageLayout>
      <RecommendedByExpertsSection />
      <LifeChangingImpactSection />
      <WhatResearchShowsSection />
      <BonusMachineProgramSection />
      <ExploreMoreSection />
    </PageLayout>
  );
}
