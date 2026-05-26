import { PageLayout } from "../layout/PageLayout";
import { AboutContactSection } from "./about/AboutContactSection";
import { AboutFaqSection } from "./about/AboutFaqSection";
import { AboutHydrationSpecialistSection } from "./about/AboutHydrationSpecialistSection";
import { AboutScheduleShowSection } from "./about/AboutScheduleShowSection";
import { AboutWellnessAdvocateSection } from "./about/AboutWellnessAdvocateSection";
import { AboutWhoWeAreSection } from "./about/AboutWhoWeAreSection";

export function AboutPage() {
  return (
    <PageLayout>
      <AboutWhoWeAreSection />
      <AboutFaqSection />
      <AboutContactSection />
      <AboutHydrationSpecialistSection />
      <AboutWellnessAdvocateSection />
      <AboutScheduleShowSection />
    </PageLayout>
  );
}
