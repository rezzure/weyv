import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "../common/Container";
import { companyInfo } from "../../data/companyInfo";

export default function ContactTeaser() {
  return (
    <section className="section-pad bg-white">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="eyebrow">
            <span className="h-px w-6 bg-current" />
            Get In Touch
          </span>
          <h2 className="heading-lg mt-4 font-display">Let&rsquo;s Talk</h2>
          <p className="body-md mt-5 max-w-md">
            Share your project details and one of our designers will get
            back to you within one business day.
          </p>

          <ul className="mt-9 flex flex-col gap-6">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">Phone</p>
                <a href={`tel:${companyInfo.phoneHref}`} className="font-display text-lg text-ink">
                  {companyInfo.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">Email</p>
                <a href={`mailto:${companyInfo.email}`} className="font-display text-lg text-ink">
                  {companyInfo.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">Studio</p>
                <p className="font-display text-lg text-ink">{companyInfo.address}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                <Clock size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">Hours</p>
                <p className="font-display text-lg text-ink">{companyInfo.hours}</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="aspect-[4/5] w-full overflow-hidden bg-soft lg:aspect-auto">
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1200&auto=format&fit=crop"
            //this image is not showing
            alt="WEYV studio interior"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
