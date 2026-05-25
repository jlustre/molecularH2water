import { PageLayout } from "../layout/PageLayout";
import { LifeChangingImpactSection } from "./LifeChangingImpactSection";
import { RecommendedByExpertsSection } from "./RecommendedByExpertsSection";

export function ResourcesPage() {
  return (
    <PageLayout>
      <RecommendedByExpertsSection />
      <LifeChangingImpactSection />
    </PageLayout>
  );
}
