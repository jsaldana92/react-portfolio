// src/components/TopNav.jsx
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "ResearchObs",
    children: [
      { label: "Lab Deployment", to: "/ResearchObs" },
      { label: "Public Release", to: "/ResearchObs/PublicRelease" },
    ],
  },
  { label: "DataPuller", to: "/DataPuller" },
  { label: "Hyperlink", to: "/HyperlinkEngagement" },
  { label: "GTA Grading", to: "/GTAGradingExperience" },
  { label: "SEEHB", to: "/SEEHB" },
];

function navClass({ isActive }) {
  return [
    "relative inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors",
    isActive
      ? "bg-brandred text-white shadow-sm"
      : "text-muted hover:bg-brandred/10 hover:text-brandred",
  ].join(" ");
}

function parentNavClass(isActive) {
  return [
    "relative inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors",
    isActive
      ? "bg-brandred text-white shadow-sm"
      : "text-muted hover:bg-brandred/10 hover:text-brandred",
  ].join(" ");
}

function mobileNavClass({ isActive }) {
  return [
    "rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
    isActive
      ? "bg-brandred text-white"
      : "text-muted hover:bg-brandred/10 hover:text-brandred",
  ].join(" ");
}

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 5px)",
    },
  },
};

function AnimatedHamburgerButton({ active, onClick }) {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        type="button"
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={onClick}
        aria-label={active ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={active}
        className="relative h-10 w-10 rounded-full transition-colors hover:bg-brandred/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandred/50"
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className="absolute h-0.5 w-5 rounded-full bg-brandred"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className="absolute h-0.5 w-5 rounded-full bg-brandred"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className="absolute h-0.5 w-2.5 rounded-full bg-brandred"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 5px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}

export default function TopNav() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollYRef = useRef(0);

  const closeDesktopDropdowns = () => {
    document
      .querySelectorAll("header details[open]")
      .forEach((details) => details.removeAttribute("open"));
  };

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!event.target.closest("header details")) {
        closeDesktopDropdowns();
      }

      if (
        isMobileMenuOpen &&
        !event.target.closest("[data-mobile-menu]") &&
        !event.target.closest("[data-mobile-toggle]")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      closeDesktopDropdowns();
      setIsScrolled(currentScrollY > 12);

      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setIsNavbarVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      if (currentScrollY <= 16) {
        setIsNavbarVisible(true);
      } else if (scrollDelta > 8) {
        setIsNavbarVisible(false);
      } else if (scrollDelta < -8) {
        setIsNavbarVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    lastScrollYRef.current = window.scrollY || 0;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "border-brandred/15 bg-surface/90 shadow-sm backdrop-blur-xl"
            : "border-transparent bg-gradient-to-b from-backgroundwhite/95 via-backgroundwhite/70 to-backgroundwhite/0 shadow-none"
        }`}
      >
        <nav className="navbar relative mx-auto max-w-7xl px-4 py-2">
          <div className="navbar-start">
            <div className="lg:hidden" data-mobile-toggle>
              <AnimatedHamburgerButton
                active={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((open) => !open)}
              />
            </div>

            <Link
              to="/"
              className="hidden h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-brandred/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandred/50 lg:inline-flex"
              aria-label="Go to homepage"
              onClick={() => {
                setIsMobileMenuOpen(false);
                closeDesktopDropdowns();
              }}
            >
              <img
                src="/favicon.png"
                alt="Jhonatan Saldana logo"
                className="h-8 w-8 object-contain"
              />
            </Link>
          </div>

          <Link
            to="/"
            className="absolute left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full transition-colors hover:bg-brandred/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandred/50 lg:hidden"
            aria-label="Go to homepage"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src="/favicon.png"
              alt="Jhonatan Saldana logo"
              className="h-8 w-8 object-contain"
            />
          </Link>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal items-center gap-1 px-1">
              {navItems.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <details>
                      <summary
                        className={parentNavClass(
                          location.pathname.startsWith("/ResearchObs"),
                        )}
                      >
                        {item.label}
                      </summary>

                      <ul className="z-50 mt-2 w-52 rounded-2xl border border-brandred/15 bg-surface p-2 shadow-xl">
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <NavLink
                              to={child.to}
                              end={child.to === "/ResearchObs"}
                              className={mobileNavClass}
                              onClick={closeDesktopDropdowns}
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={navClass}
                      onClick={closeDesktopDropdowns}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="navbar-end">
            <a
              href="mailto:jsaldana92@gmail.com"
              className="btn btn-sm border-none bg-brandred text-white hover:bg-branddark"
            >
              Contact
            </a>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div
            className="mx-auto max-w-7xl px-4 pb-4 lg:hidden"
            data-mobile-menu
          >
            <div className="rounded-2xl border border-brandred/15 bg-surface/95 p-2 shadow-xl backdrop-blur-xl">
              <div className="flex flex-col gap-1">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.label} className="rounded-xl">
                      <p className="px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-subtletext">
                        {item.label}
                      </p>

                      <div className="ml-3 flex flex-col gap-1 border-l border-brandred/15 pl-3">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            end={child.to === "/ResearchObs"}
                            className={mobileNavClass}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === "/"}
                      className={mobileNavClass}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ),
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
