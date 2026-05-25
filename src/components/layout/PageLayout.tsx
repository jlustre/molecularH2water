import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { GoToTopButton } from "./GoToTopButton";
import { TopNav } from "./TopNav";

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="bg-white text-slate-800 antialiased">
      <TopNav />
      <main>{children}</main>
      <Footer />
      <GoToTopButton />
    </div>
  );
}
