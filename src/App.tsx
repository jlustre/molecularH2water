import { useEffect, useState } from "react";
import { AboutPage } from "./components/sections/AboutPage";
import { HomePage } from "./components/sections/HomePage";
import { ResourcesPage } from "./components/sections/ResourcesPage";
import { TechnologyPage } from "./components/sections/TechnologyPage";

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

  const navOffset = 92;
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
  const isResourcesPage = window.location.pathname === "/resources";
  const isTechnologyPage = window.location.pathname === "/technology";

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
        nextUrl.pathname === "/resources" ||
        nextUrl.pathname === "/technology";

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

  if (isTechnologyPage) {
    return <TechnologyPage />;
  }

  if (isAboutPage) {
    return <AboutPage />;
  }

  if (isResourcesPage) {
    return <ResourcesPage />;
  }

  return <HomePage />;
}

export default App;
