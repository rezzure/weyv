import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown, Phone } from "lucide-react";
import { mainNav } from "../../data/navigation";
import { companyInfo } from "../../data/companyInfo";
import logo from "../../assets/images/logo/weyv-logo.png";

export default function MobileMenu({ open, onClose }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm lg:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[70] flex w-[86%] max-w-sm flex-col bg-white shadow-lift lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <img src={logo} alt="WEYV" className="h-6 w-auto" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="flex flex-col gap-1">
                {mainNav.map((item) =>
                  item.children ? (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => setServicesOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3.5 text-left text-base font-medium text-ink"
                      >
                        {item.label}
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            servicesOpen ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pl-3"
                          >
                            {item.children.map((child) => (
                              <li key={child.path}>
                                <NavLink
                                  to={child.path}
                                  className={({ isActive }) =>
                                    `block rounded-lg px-3 py-3 text-sm ${
                                      isActive ? "text-primary" : "text-muted"
                                    }`
                                  }
                                >
                                  {child.label}
                                </NavLink>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        end={item.path === "/"}
                        className={({ isActive }) =>
                          `block rounded-xl px-3 py-3.5 text-base font-medium ${
                            isActive ? "text-primary" : "text-ink"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </nav>

            <div className="border-t border-line px-6 py-6">
              <a
                href={`tel:${companyInfo.phoneHref}`}
                className="mb-4 flex items-center gap-2 text-sm text-muted"
              >
                <Phone size={15} className="text-primary" /> {companyInfo.phone}
              </a>
              <Link
                to="/contact"
                className="flex min-h-[44px] w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-white"
              >
                Let&rsquo;s Talk
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
