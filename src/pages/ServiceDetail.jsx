import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import useSEO from "../hooks/useSEO";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import ProjectCard from "../components/common/ProjectCard";
import { getServiceBySlug, services } from "../data/services";
import { projects } from "../data/projects";

export default function ServiceDetail({ forcedSlug }) {
  const { slug: routeSlug } = useParams();
  const slug = forcedSlug || routeSlug;
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  useSEO(`${service.title} Design | WEYV`, service.description);

  const relatedProjects = projects
    .filter((p) => p.category === service.shortTitle)
    .slice(0, 3);
  const fallbackProjects = relatedProjects.length ? relatedProjects : projects.slice(0, 3);

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={service.heroTitle}
        breadcrumb={[
          { label: "Our Services", path: "/services" },
          { label: service.title },
        ]}
        image={service.heroImage}
      />

      <section className="section-pad bg-white">
        <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg font-display">{service.tagline}</h2>
            <p className="body-md mt-6">{service.longIntro}</p>
            <p className="body-md mt-4">{service.description}</p>
            <div className="mt-8">
              <Button to="/contact">Start a Project</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-[4/5] overflow-hidden bg-soft"
          >
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </Container>
      </section>

      <section className="section-pad bg-ink-secondary">
        <Container>
          <SectionHeading
            eyebrow="What's Included"
            title={`${service.title} — Our Focus Areas`}
            tone="dark"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-primary/50"
              >
                <h3 className="font-display text-lg text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{f.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-soft">
        <Container>
          <SectionHeading
            eyebrow="Featured Work"
            title={`${service.shortTitle} Projects`}
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fallbackProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} className="aspect-[4/5]" />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading eyebrow="Explore More" title="Other Services" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex items-center justify-between rounded-xl border border-line px-6 py-5 transition-colors hover:border-primary"
              >
                <span className="font-display text-base">{s.title}</span>
                <ArrowRight size={16} className="text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-secondary py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="heading-lg max-w-xl font-display text-white">
            Ready to Start Your {service.shortTitle} Project?
          </h2>
          <Button to="/contact" variant="primary">
            Talk to WEYV
          </Button>
        </Container>
      </section>
    </>
  );
}
