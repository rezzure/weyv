import { Phone, Mail, MapPin, Clock } from "lucide-react";
import useSEO from "../hooks/useSEO";
import { SEO } from "../utils/constants";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import ContactForm from "../components/contact/ContactForm";
import { companyInfo } from "../data/companyInfo";

export default function Contact() {
  useSEO(SEO.contact.title, SEO.contact.description);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Create Something Exceptional"
        breadcrumb={[{ label: "Contact Us" }]}
        image="https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="section-pad bg-white">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16">
          <div>
            <h2 className="heading-lg font-display">Contact Information</h2>
            <p className="body-md mt-4">
              Reach out directly, or fill out the form and we&rsquo;ll get
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
                  <p className="text-xs uppercase tracking-wide text-muted">Business Hours</p>
                  <p className="font-display text-lg text-ink">{companyInfo.hours}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-soft p-6 sm:p-10">
            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="h-[380px] w-full bg-soft">
        <div className="flex h-full w-full items-center justify-center border-t border-line text-sm text-muted">
          Map placeholder — embed will go here
        </div>
      </section>
    </>
  );
}
