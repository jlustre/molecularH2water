import { navItems } from "../../data/siteContent";
import { BrandMark } from "../ui/BrandMark";

export function Footer() {
  return (
    <footer className="bg-marine py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <BrandMark inverted subtitle="Hydrogen Water Education" />
          <p className="mt-5 max-w-md text-sm leading-7 text-cyan-50/80">
            A clean public-facing site for hydrogen water presentations,
            technology education, resource sharing, and compliant wellness copy.
          </p>
        </div>

        <div>
          <h3 className="font-black">Navigation</h3>
          <div className="mt-4 grid gap-2 text-sm text-cyan-50/80">
            {navItems.map((item) => (
              <a className="hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black">Contact</h3>
          <div className="mt-4 grid gap-2 text-sm text-cyan-50/80">
            <p>info@example.com</p>
            <p>(000) 000-0000</p>
            <p>Your City, State</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-sm text-cyan-50/70 sm:px-6 lg:px-8">
        <p>
          Copyright 2026 H2Systems. All rights reserved. Replace with your legal
          business information.
        </p>
      </div>
    </footer>
  );
}
