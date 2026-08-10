import { motion } from "framer-motion";
import { Compass, HardHat, Gem } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";

const trustIndicators = [
  { icon: Compass, label: "Thoughtful Design" },
  { icon: HardHat, label: "End-to-End Execution" },
  { icon: Gem, label: "Quality Driven" },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-ink sm:min-h-[85vh] lg:min-h-[90vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2200&auto=format&fit=crop"
          alt="Modern interior architecture"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      </div>

      <Container className="relative z-10 pb-16 pt-40 sm:pb-24 sm:pt-48">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow text-accent"
        >
          <span className="h-px w-6 bg-accent" />
          Interior Design &amp; Turnkey Solutions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="heading-xl mt-5 max-w-3xl font-display text-white"
        >
          Designing Spaces That Inspire, Perform &amp; Belong.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="body-md mt-6 max-w-xl text-white/75"
        >
          WEYV creates thoughtful interior environments that combine
          architecture, functionality and distinctive design to transform the
          way people live and work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button to="/services" variant="primary">
            Explore Our Services
          </Button>
          <Button to="/gallery" variant="ghostLight">
            View Our Projects
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-7 sm:mt-16"
        >
          {trustIndicators.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-white/85">
              <Icon size={18} className="text-accent" strokeWidth={1.5} />
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
