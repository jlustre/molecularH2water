import { PageLayout } from "../layout/PageLayout";
import { AboutTestimonialThemesSection } from "./about/AboutTestimonialThemesSection";
import { AboutTestimonialsSection } from "./about/AboutTestimonialsSection";

export function TestimonialsPage() {
  return (
    <PageLayout>
      <AboutTestimonialsSection />
      <AboutTestimonialThemesSection />
    </PageLayout>
  );
}
