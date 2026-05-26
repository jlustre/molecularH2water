import { PageLayout } from "../layout/PageLayout";
import { LifeChangingImpactSection } from "./LifeChangingImpactSection";
import { RecommendedByExpertsSection } from "./RecommendedByExpertsSection";
import { BonusMachineProgramSection } from "./BonusMachineProgramSection";

export function ResourcesPage() {
  return (
    <PageLayout>
      <RecommendedByExpertsSection />
      <LifeChangingImpactSection />
      <BonusMachineProgramSection />
    </PageLayout>
  );
}
