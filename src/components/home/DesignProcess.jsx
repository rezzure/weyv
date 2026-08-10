import { motion } from "framer-motion";
import { Search, Lightbulb, Hammer, PackageCheck } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const stages = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    text: "We start by understanding how you use space — your goals, constraints and the way you actually move through a day.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Concept",
    text: "Layout options, mood direction and material stories are developed until the concept feels unmistakably yours.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Design & Execute",
    text: "Detailed drawings, procurement and on-site execution run in parallel, tracked against one shared timeline.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Deliver & Support",
    text: "A final walkthrough, snagging and handover — with support on call after you've moved in.",
  },
];

export default function DesignProcess() {
  return (
    <section className="section-pad bg-soft">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="Our Design Process"
          align="center"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-line lg:block" />
          {stages.map((stage, i) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col items-start gap-4"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <stage.icon size={20} strokeWidth={1.5} />
              </div>
              <span className="font-display text-sm text-primary">{stage.number}</span>
              <h3 className="font-display text-xl text-ink">{stage.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{stage.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
