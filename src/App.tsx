import { useEffect, useState } from "react";
import { AboutPage } from "./components/sections/AboutPage";
import { ComplimentaryProductEcosystemPage } from "./components/sections/ComplimentaryProductEcosystemPage";
import { HomePage } from "./components/sections/HomePage";
import { InstallationQuestionnairePage } from "./components/sections/InstallationQuestionnairePage";
import { MediaResourcesPage } from "./components/sections/MediaResourcesPage";
import { ProofComparisonPage } from "./components/sections/ProofComparisonPage";
import { ResourcesPage } from "./components/sections/ResourcesPage";
import { TechnologyPage } from "./components/sections/TechnologyPage";
import { TestimonialsPage } from "./components/sections/TestimonialsPage";
import { WarrantyRegistrationPage } from "./components/sections/WarrantyRegistrationPage";

function scrollToHashTarget() {
  const hash = window.location.hash;

  if (!hash) {
    window.scrollTo({ behavior: "auto", top: 0 });
    return;
  }

  const targetId = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  const navOffset = 40;
  const targetTop =
    target.getBoundingClientRect().top + window.scrollY - navOffset;

  window.scrollTo({
    behavior: "smooth",
    top: Math.max(targetTop, 0),
  });
}

function App() {
  const [locationKey, setLocationKey] = useState(
    `${window.location.pathname}${window.location.hash}`,
  );
  const isAboutPage = window.location.pathname === "/about";
  const isTestimonialsPage = window.location.pathname === "/testimonials";
  const isInstallationPage = window.location.pathname === "/installation";
  const isProofComparisonPage = window.location.pathname === "/proof-comparison";
  const isMediaResourcesPage =
    window.location.pathname === "/resources/media" ||
    window.location.pathname.startsWith("/resources/media/");
  const isResourcesPage = window.location.pathname === "/resources";
  const isTechnologyPage = window.location.pathname === "/technology";
  const isWarrantyPage = window.location.pathname === "/warranty";
  const isComplimentaryProductEcosystemPage =
    window.location.pathname === "/complimentary-product-ecosystem" ||
    window.location.pathname === "/complimentary-product-ecosytem";

  useEffect(() => {
    const updateLocation = () => {
      setLocationKey(`${window.location.pathname}${window.location.hash}`);
    };

    const handlePageLinkClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = (event.target as Element | null)?.closest("a[href]");

      if (!(link instanceof HTMLAnchorElement)) {
        return;
      }

      const nextUrl = new URL(link.href);
      const currentUrl = new URL(window.location.href);

      if (
        nextUrl.origin !== currentUrl.origin ||
        (!nextUrl.hash && nextUrl.pathname === currentUrl.pathname)
      ) {
        return;
      }

      const supportedPath =
        nextUrl.pathname === "/" ||
        nextUrl.pathname === "/about" ||
        nextUrl.pathname === "/testimonials" ||
        nextUrl.pathname === "/installation" ||
        nextUrl.pathname === "/proof-comparison" ||
        nextUrl.pathname === "/resources" ||
        nextUrl.pathname === "/resources/media" ||
        nextUrl.pathname.startsWith("/resources/media/") ||
        nextUrl.pathname === "/technology" ||
        nextUrl.pathname === "/warranty" ||
        nextUrl.pathname === "/complimentary-product-ecosystem" ||
        nextUrl.pathname === "/complimentary-product-ecosytem";

      if (!supportedPath) {
        return;
      }

      event.preventDefault();

      if (
        nextUrl.pathname === currentUrl.pathname &&
        nextUrl.hash === currentUrl.hash
      ) {
        window.requestAnimationFrame(scrollToHashTarget);
        return;
      }

      window.history.pushState(null, "", `${nextUrl.pathname}${nextUrl.hash}`);
      updateLocation();
    };

    window.addEventListener("popstate", updateLocation);
    window.addEventListener("hashchange", updateLocation);
    document.addEventListener("click", handlePageLinkClick);

    return () => {
      window.removeEventListener("popstate", updateLocation);
      window.removeEventListener("hashchange", updateLocation);
      document.removeEventListener("click", handlePageLinkClick);
    };
  }, []);

  useEffect(() => {
    const frameIds: number[] = [];
    const timeoutIds: number[] = [];

    frameIds.push(
      window.requestAnimationFrame(() => {
        frameIds.push(window.requestAnimationFrame(scrollToHashTarget));
        [120, 450, 900, 1400].forEach((delay) => {
          timeoutIds.push(window.setTimeout(scrollToHashTarget, delay));
        });
      }),
    );

    return () => {
      frameIds.forEach((frameId) => window.cancelAnimationFrame(frameId));
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [locationKey]);

  if (isInstallationPage) {
    return <InstallationQuestionnairePage />;
  }

  if (isWarrantyPage) {
    return <WarrantyRegistrationPage />;
  }

  if (isTechnologyPage) {
    return <TechnologyPage />;
  }

  if (isProofComparisonPage) {
    return <ProofComparisonPage />;
  }

  if (isAboutPage) {
    return <AboutPage />;
  }

  if (isTestimonialsPage) {
    return <TestimonialsPage />;
  }

  if (isResourcesPage) {
    return <ResourcesPage />;
  }

  if (isMediaResourcesPage) {
    return <MediaResourcesPage key={locationKey} />;
  }

  if (isComplimentaryProductEcosystemPage) {
    return <ComplimentaryProductEcosystemPage />;
  }

  return <HomePage />;
}

export default App;
