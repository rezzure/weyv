import { motion } from "framer-motion";
import Container from "../common/Container";
import Button from "../common/Button";

export default function AboutPreview() {
  return (
    <section className="section-pad bg-white">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <span className="eyebrow">
            <span className="h-px w-6 bg-current" />
            About WEYV
          </span>
          <h2 className="heading-lg mt-4 font-display">
            Interior Design That Turns Ideas Into Experiences
          </h2>
          <p className="body-md mt-6">
            WEYV was founded on a simple belief: a space should work exactly
            as hard as the people inside it. We bring architecture,
            functional planning and material craft together under one team,
            so every project moves from concept to completion without
            losing its original intent.
          </p>
          <p className="body-md mt-4">
            From corporate headquarters to family homes, our process stays
            the same — listen carefully, design deliberately, and execute
            with the same care we put into the first sketch.
          </p>
          <div className="mt-8">
            <Button to="/about">Discover More</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 lg:order-2"
        >
          <div className="aspect-[4/5] w-[80%] overflow-hidden bg-soft">
  <img
    src="https://images.unsplash.com/photo-1758448500688-3ababa93fd67?q=80&w=1200&auto=format&fit=crop"
    alt="WEYV commercial interior design project"
    loading="lazy"
    className="h-full w-full object-cover"
  />
</div>
<div className="absolute -bottom-8 -right-2 aspect-[4/5] w-[46%] overflow-hidden border-4 border-white bg-soft shadow-lift sm:-right-4">
  <img
    src="https://images.unsplash.com/photo-1758448721205-8465cebc26af?q=80&w=900&auto=format&fit=crop"
    alt="WEYV commercial interior detail"
    loading="lazy"
    className="h-full w-full object-cover"
  />
</div>
          <div className="absolute -left-2 bottom-8 flex flex-col items-start rounded-2xl bg-white px-5 py-4 shadow-lift sm:-left-6">
            <span className="font-display text-3xl text-primary">10+</span>
            <span className="text-xs text-muted">Years of Design Excellence</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
