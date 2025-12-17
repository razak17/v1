/** biome-ignore-all lint/a11y/useValidAnchor: use anchor */
"use client";

import { useEffect, useState } from "react";

import { navLinks } from "../config/site";

export function Navbar() {
  const [activeLink, setActiveLink] = useState("#");

  useEffect(() => {
    const sectionIds = navLinks.map(
      (link) => link.url.replace("#", "") || null,
    );

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= docHeight - 50) {
        const lastSection = navLinks[navLinks.length - 1];
        if (lastSection) setActiveLink(lastSection.url);
        return;
      }

      for (const id of sectionIds) {
        if (!id) {
          if (scrollY < 100) {
            setActiveLink("#");
            return;
          }
          continue;
        }
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveLink(`#${id}`);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative top-0 z-[1100] h-[110px] overflow-hidden bg-primary md:sticky md:h-[70px]">
      <div className="flex h-full flex-col items-center justify-between px-4 md:flex-row lg:mx-auto lg:max-w-7xl lg:p-0 lg:px-0">
        <a href="#">
          <h1 className="py-3 font-bold font-mono text-3xl text-background md:py-0">
            Razak Mo.
          </h1>
        </a>

        <nav className="flex items-center justify-center">
          <ul className="flex gap-4 bg-black/10 p-4 md:bg-transparent md:p-0">
            {navLinks.map((item) => (
              <li
                key={`link-${item.name}`}
                onClick={() => setActiveLink(item.url)}
              >
                <a
                  className={`mx-0.5 px-4 py-2.5 text-background capitalize hover:border-white hover:border-b-2 ${
                    activeLink === item.url ? "border-white border-b-2" : ""
                  }`}
                  href={item.url}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          onClick={() => setActiveLink("#contact")}
          className="hidden cursor-pointer rounded-md bg-alert px-6 py-2 text-background hover:scale-[0.98] hover:bg-primary-hover md:inline-block"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
