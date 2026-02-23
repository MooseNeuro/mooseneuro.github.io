import { useState, useEffect, useCallback } from "react";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Debounced scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (isDismissed) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const isAtTop = scrollTop <= 10; // Small threshold for better UX

    setIsVisible(isAtTop);
  }, [isDismissed]);

  // Set up scroll listener with throttling
  useEffect(() => {
    let timeoutId;

    const throttledScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 16); // ~60fps
    };

    // Check initial position
    handleScroll();

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Set banner height CSS variable and adjust navbar position
  useEffect(() => {
    const findNav = (cb) => {
      const nav = document.getElementsByTagName("header")[0];
      if (nav) return cb(nav);

      let attempts = 0;
      let rafId = null;
      const tryFind = () => {
        const n = document.getElementsByTagName("header")[0];
        if (n) {
          if (rafId) cancelAnimationFrame(rafId);
          return cb(n);
        }
        attempts += 1;
        if (attempts < 120) {
          rafId = requestAnimationFrame(tryFind);
        }
      };
      rafId = requestAnimationFrame(tryFind);
    };

    const updateBannerHeight = () => {
      const banner = document.getElementById("top-banner");

      if (banner && isVisible && !isDismissed) {
        const height = banner.offsetHeight;
        document.documentElement.style.setProperty("--banner-height", `${height}px`);

        // Push navbar down by banner height when header is available
        findNav((nav) => {
          try {
            nav.style.top = `${height}px`;
            nav.classList.remove("bg-black");
            nav.style.transition = "top 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
          } catch (e) {
            // ignore failures manipulating nav
          }
        });
      } else {
        document.documentElement.style.setProperty("--banner-height", "0px");

        // Reset navbar position when header exists
        findNav((nav) => {
          try {
            nav.style.top = "0px";
            nav.classList.add("bg-black");
            nav.style.transition = "top 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
          } catch (e) {
            // ignore
          }
        });
      }
    };

    updateBannerHeight();
    window.addEventListener("resize", updateBannerHeight);

    return () => window.removeEventListener("resize", updateBannerHeight);
  }, [isVisible, isDismissed]);

  // Smooth banner dismiss function
  const dismissBanner = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const banner = document.getElementById("top-banner");
    const nav = document.getElementsByTagName("header")[0];

    if (banner) {
      banner.style.transform = "translateY(-100%)";
      banner.style.opacity = "0";

      // Immediately start moving navbar back to top
      if (nav) {
        nav.style.top = "0px";
        nav.classList.add("bg-black");
        nav.style.transition = "top 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
      }

      setTimeout(() => {
        setIsDismissed(true);
        setIsVisible(false);
        document.documentElement.style.setProperty("--banner-height", "0px");
        setIsAnimating(false);
      }, 500);
    }
  };

  // Don't render if dismissed or not visible
  if (!isVisible || isDismissed) return null;

  return (
    <>
      <div
        id="top-banner"
        className="fixed top-0 left-0 right-0 z-50 isolate flex items-center justify-center gap-x-3 overflow-hidden bg-gray-50/95 px-3 py-2 backdrop-blur-sm sm:gap-x-6 sm:px-6 sm:py-2.5"
        role="banner"
        aria-label="Conference announcement"
        style={{
          transition:
            "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          opacity: isVisible ? 1 : 0,
          pointerEvents: isAnimating ? "none" : "auto",
        }}
      >
        {/* Modern gradient background */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-100/30 via-pink-100/30 to-indigo-100/30"
          aria-hidden="true"
        />

        {/* Decorative elements optimized for mobile */}
        <div
          className="absolute -left-4 top-1/2 -z-10 size-16 -translate-y-1/2 transform-gpu blur-xl sm:-left-8 sm:size-32 sm:blur-2xl"
          aria-hidden="true"
        >
          <div className="aspect-square w-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full" />
        </div>

        <div
          className="absolute -right-4 top-1/2 -z-10 size-16 -translate-y-1/2 transform-gpu blur-xl sm:-right-8 sm:size-32 sm:blur-2xl"
          aria-hidden="true"
        >
          <div className="aspect-square w-full bg-gradient-to-bl from-indigo-400/20 to-purple-400/20 rounded-full" />
        </div>

        {/* Content container with modern layout */}
        <div className="flex min-w-0 flex-1 items-center justify-center gap-x-2 sm:gap-x-4">
          {/* Main announcement text */}
          <div className="flex min-w-0 flex-1 items-center gap-x-2 text-xs leading-tight text-gray-900 sm:text-sm sm:leading-6">
            <span className="font-semibold">
              Take the survey for Neuroscience Software Development: A Request
              for Community Input.
            </span>
            {/*<svg
              viewBox="0 0 2 2"
              className="hidden size-1 fill-current sm:inline"
              aria-hidden="true"
            >
              <circle cx="1" cy="1" r="1" />
            </svg> */}
            {/* <span className="hidden sm:inline">
              Take the survey for Neuroscience Software Development: A Request
              for Community Input.
            </span> */}
            {/* <span className="sm:hidden">Denver June 7-9</span> */}
          </div>

          {/* CTA Button with modern styling */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeA8-Q3vlefGG1mMY20ZIrfZLOQdsiOh0S6Q7lXsG4s97u03A/viewform"
            className="flex-shrink-0 rounded-full bg-gray-900 px-2.5 py-1 text-xs font-medium text-white shadow-sm transition-all duration-200 hover:bg-gray-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 sm:px-3.5 sm:text-sm"
            aria-label="communityInput"
          >
            <span className="sm:hidden">Submit</span>
            <span className="hidden sm:inline">Submit</span>
            <span aria-hidden="true" className="ml-1">
              &rarr;
            </span>
          </a>
        </div>

        {/* Dismiss button with better accessibility */}
        <button
          type="button"
          className="-m-2 flex-shrink-0 p-2 transition-colors duration-200 hover:bg-gray-200/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 rounded-md"
          onClick={dismissBanner}
          aria-label="Dismiss announcement"
          disabled={isAnimating}
        >
          <span className="sr-only">Dismiss</span>
          <svg
            className="size-4 text-gray-700 sm:size-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>
      </div>

      {/* CSS styles injected via style tag */}
      <style>{`
        :root {
          --banner-height: 0px; /* Hidden by default */
        }

        /* Smooth content adjustment */
        [style*="margin-top: var(--banner-height)"] {
          transition: margin-top 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (prefers-reduced-motion: reduce) {
          #top-banner {
            transition: opacity 0.2s ease !important;
          }

          [style*="margin-top: var(--banner-height)"] {
            transition: margin-top 0.2s ease !important;
          }
        }
      `}</style>
    </>
  );
}
