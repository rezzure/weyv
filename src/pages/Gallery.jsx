import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSEO from "../hooks/useSEO";
import { SEO } from "../utils/constants";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import ProjectCard from "../components/common/ProjectCard";
import { projects, projectCategories } from "../data/projects";

export default function Gallery() {
  useSEO(SEO.gallery.title, SEO.gallery.description);
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Interior Design Projects"
        breadcrumb={[{ label: "Gallery" }]}
        image="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="section-pad bg-white">
        <Container>
          <div className="flex flex-wrap gap-3">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`min-h-[44px] rounded-full border px-5 text-sm font-medium transition-colors duration-200 ${
                  active === cat
                    ? "border-primary bg-primary text-white"
                    : "border-line text-ink/70 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={project} className="aspect-[4/5]" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
