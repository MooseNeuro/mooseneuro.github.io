import React, { useEffect, useState } from "react";
import "../styles/global.css";
import mooselogo from "../assets/moose_logo.png";
import { navItems } from "./nav-data";
import DesktopDropdown from "./DesktopDropdown";
import MobileDropdown from "./MobileDropdown";

export default function Navbar({ transparentOnTop = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!transparentOnTop) {
      setScrolled(true);
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      const banner = document.getElementById("top-banner");
      const threshold = banner ? banner.offsetHeight / 2 : 0;
      setScrolled(window.scrollY > threshold);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // initialize
    handleScroll();

    const onResize = () => {
      // recalc threshold on resize by invoking handler
      handleScroll();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [transparentOnTop]);


  const closeMobileMenu = () => setMobileOpen(false);

  const headerClass = `fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
    scrolled ? 'bg-black' : 'bg-transparent'
  }`;

  return (
    <div className="relative md:absolute">
      <header className={headerClass}>
        <nav
          className="flex items-center justify-between p-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 bg-transparent">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only text-black">MOOSE</span>
              <img
                className="h-10 w-auto saturate-200"
                src={mooselogo.src}
                alt="MOOSE Logo"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              aria-label="Open menu"
            >
              <span className="sr-only">main menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navItems.map((item) => (
              <DesktopDropdown key={item.title} item={item} />
            ))}
          </div>

          {/* Desktop GitHub */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="https://github.com/mooseneuro/"
              className="text-sm font-semibold text-white transition duration-200 hover:text-highlight-neon"
              aria-label="GitHub"
            >
              <span className="sr-only">Github</span>
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden">
            {/* Backdrop */}
            <button
              className="fixed inset-0 z-40 bg-black bg-opacity-25"
              aria-label="Close menu backdrop"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <div className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">MOOSE</span>
                  <img className="h-8 w-auto" src={mooselogo.src} alt="MOOSE Logo" />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-900"
                  aria-label="Close menu"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navItems.map((item) => (
                      <MobileDropdown
                        key={item.title}
                        item={item}
                        closeMobileMenu={closeMobileMenu}
                      />
                    ))}
                  </div>

                  {/* Mobile GitHub */}
                  <div className="py-6">
                    <a
                      href="https://github.com/mooseneuro/"
                      className="-mx-3 flex items-center rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <svg
                        className="h-6 w-6 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
