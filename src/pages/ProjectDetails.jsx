import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, Tag, Check } from "lucide-react";
import useSEO from "../hooks/useSEO";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import ProjectCard from "../components/common/ProjectCard";
import Button from "../components/common/Button";
import { getProjectBySlug, projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <Navigate to="/gallery" replace />;

  useSEO(`${project.name} | WEYV Projects`, project.overview);

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);
  const relatedFallback = related.length
    ? related
    : projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const metaItems = [
    { icon: Tag, label: "Category", value: project.category },
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Calendar, label: "Year", value: project.year },
  ];

  return (
    <>
      <PageHero
        title={project.name}
        breadcrumb={[
          { label: "Gallery", path: "/gallery" },
          { label: project.name },
        ]}
        image={project.image}
      />

      <section className="section-pad bg-white">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <ul className="flex flex-col gap-6 border-t border-line pt-8">
              {metaItems.map((m) => (
                <li key={m.label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                    <m.icon size={16} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted">{m.label}</p>
                    <p className="font-display text-lg">{m.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button to="/contact">Start a Similar Project</Button>
            </div>
          </div>

          <div>
            <h2 className="heading-lg font-display">Project Overview</h2>
            <p className="body-md mt-5">{project.overview}</p>

            <h3 className="mt-10 font-display text-xl">Design Concept</h3>
            <p className="body-md mt-3">{project.concept}</p>

            <h3 className="mt-8 font-display text-xl">The Challenge</h3>
            <p className="body-md mt-3">{project.challenge}</p>

            <h3 className="mt-8 font-display text-xl">Our Solution</h3>
            <p className="body-md mt-3">{project.solution}</p>

            <h3 className="mt-8 font-display text-xl">Key Features</h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-ink/80">
                  <Check size={15} className="shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-soft py-4 sm:py-6">
        <Container className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {project.gallery.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img
                src={src}
                alt={`${project.name} detail ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading eyebrow="More Work" title="Related Projects" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {relatedFallback.map((p) => (
              <ProjectCard key={p.slug} project={p} className="aspect-[4/5]" />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
