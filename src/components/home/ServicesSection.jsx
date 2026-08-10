import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "../common/ServiceCard";
import { services } from "../../data/services";

export default function ServicesSection() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Interior Design Solutions Built Around Your Vision"
          align="left"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard service={service} key={service.slug} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
