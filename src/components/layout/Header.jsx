import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../common/Container";
import Button from "../common/Button";
import MobileMenu from "./MobileMenu";
import useScrollPosition from "../../hooks/useScrollPosition";
import { mainNav } from "../../data/navigation";
import logo from "../../assets/images/logo/weyv-logo.png";
import logoWhite from "../../assets/images/logo/weyv-logo-white.png";

export default function Header() {
  const scrolled = useScrollPosition(30);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ease-premium ${
          transparent
            ? "bg-transparent py-5"
            : "border-b border-line/70 bg-white/90 py-3 shadow-sm backdrop-blur-md"
        }`}
      >
        <Container className="flex items-center justify-between">
          <Link to="/" className="relative z-10 flex items-center" onClick={() => setMobileOpen(false)}>
            <img
              src={transparent ? logoWhite : logo}
              alt="WEYV"
              className="h-7 w-auto sm:h-8 transition-all duration-300"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                        transparent
                          ? "text-white/90 hover:text-white"
                          : isActive
                          ? "text-primary"
                          : "text-ink/80 hover:text-primary"
                      }`
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </NavLink>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-2xl border border-ink-secondary bg-ink-secondary shadow-lift">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              className={({ isActive }) =>
                                `block px-5 py-3.5 text-sm transition-colors duration-200 ${
                                  isActive
                                    ? "bg-white/10 text-accent"
                                    : "text-white/80 hover:bg-white/5 hover:text-white"
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                      transparent
                        ? "text-white/90 hover:text-white"
                        : isActive
                        ? "text-primary"
                        : "text-ink/80 hover:text-primary"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              to="/contact"
              variant={transparent ? "ghostLight" : "primary"}
              className="hidden sm:inline-flex"
              icon={false}
            >
              Let&rsquo;s Talk
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 lg:hidden ${
                transparent
                  ? "border-white/40 text-white"
                  : "border-line text-ink"
              }`}
            >
              <Menu size={20} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
