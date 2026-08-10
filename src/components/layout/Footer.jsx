import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "../common/Container";
import { footerCompanyLinks, serviceLinks } from "../../data/navigation";
import { companyInfo } from "../../data/companyInfo";
import logoWhite from "../../assets/images/logo/weyv-logo-white.png";

const PinterestIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.03-.655 2.568-.994 3.995-.283 1.195.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.136.893 2.738a.36.36 0 0 1 .083.345c-.09.375-.293 1.194-.332 1.361-.052.219-.174.265-.4.16-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.738-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.116-2.595 7.431-6.199 7.431-1.211 0-2.35-.63-2.74-1.373l-.746 2.845c-.269 1.037-1.001 2.335-1.489 3.127C9.749 23.836 10.859 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2C16.5 3.1 15.4 3 14.2 3c-2.6 0-4.4 1.6-4.4 4.5v2.3H7v3.2h2.8v8h3.7z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92zM20.44 20h-3.37v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V20H9.5V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.21-1.77 3.44 0 4.07 2.26 4.07 5.2V20z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-ink-secondary text-white">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div>
          <Link to="/">
            <img src={logoWhite} alt="WEYV" className="h-7 w-auto" />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            {companyInfo.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { Icon: InstagramIcon, href: companyInfo.social.instagram, label: "Instagram" },
              { Icon: FacebookIcon, href: companyInfo.social.facebook, label: "Facebook" },
              { Icon: LinkedinIcon, href: companyInfo.social.linkedin, label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-200 hover:border-primary hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
            <a
              href={companyInfo.social.pinterest}
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-200 hover:border-primary hover:text-white"
            >
              <PinterestIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-base text-white">Company</h4>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-white/60">
            {footerCompanyLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-white">Services</h4>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-white/60">
            {serviceLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-white">Contact</h4>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-white/60">
            <li className="flex items-start gap-2.5">
              <Phone size={15} className="mt-0.5 shrink-0 text-primary" />
              <a href={`tel:${companyInfo.phoneHref}`} className="hover:text-white">
                {companyInfo.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={15} className="mt-0.5 shrink-0 text-primary" />
              <a href={`mailto:${companyInfo.email}`} className="hover:text-white">
                {companyInfo.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
              <span>{companyInfo.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
          <p>&copy; 2026 WEYV. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/terms-conditions" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
