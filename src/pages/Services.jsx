import useSEO from "../hooks/useSEO";
import { SEO } from "../utils/constants";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import ServiceCard from "../components/common/ServiceCard";
import DesignProcess from "../components/home/DesignProcess";
import FeaturesSection from "../components/home/FeaturesSection";
import FinalCTA from "../components/home/FinalCTA";
import { services } from "../data/services";

export default function Services() {
  useSEO(SEO.services.title, SEO.services.description);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Interior Design Services"
        breadcrumb={[{ label: "Our Services" }]}
        image="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow="What We Offer"
            title="Four Disciplines, One Accountable Team"
            text="Whichever type of space you're designing, WEYV manages the full journey — concept, procurement and on-site execution — under a single roof."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard service={service} key={service.slug} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <DesignProcess />
      <FeaturesSection />
      <FinalCTA />
    </>
  );
}
