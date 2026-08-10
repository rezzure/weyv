import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "./Container";

export default function PageHero({ eyebrow, title, breadcrumb = [], image }) {
  return (
    <section className="relative flex min-h-[42vh] items-end overflow-hidden bg-ink-secondary pt-28 pb-14 sm:min-h-[48vh] sm:pt-32">
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        </div>
      )}
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {breadcrumb.length > 0 && (
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Home</Link>
              {breadcrumb.map((b, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span>/</span>
                  {b.path ? (
                    <Link to={b.path} className="hover:text-white">{b.label}</Link>
                  ) : (
                    <span className="text-white/90">{b.label}</span>
                  )}
                </span>
              ))}
            </div>
          )}
          {eyebrow && <span className="eyebrow text-accent">{eyebrow}</span>}
          <h1 className="heading-xl mt-3 font-display text-white">{title}</h1>
        </motion.div>
      </Container>
    </section>
  );
}
