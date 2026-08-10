import { motion } from "framer-motion";
import {
  PenTool,
  ClipboardCheck,
  Gem,
  Eye,
  Clock,
  Users,
} from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const features = [
  {
    icon: PenTool,
    title: "Creative Design",
    text: "Original design thinking for every project — never a copy-paste template.",
  },
  {
    icon: ClipboardCheck,
    title: "End-to-End Execution",
    text: "One accountable team from concept through to final handover.",
  },
  {
    icon: Gem,
    title: "Quality Materials",
    text: "Sourced and specified for durability, finish and long-term value.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    text: "Clear timelines, real-time updates, and no surprise change orders.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    text: "Projects scheduled and tracked to meet the date we commit to.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    text: "Every decision measured against how you'll actually use the space.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="section-pad bg-ink-secondary">
      <Container>
        <SectionHeading
          eyebrow="Why Choose WEYV"
          title="Design Thinking, Backed by Disciplined Execution"
          tone="dark"
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-primary/50"
            >
              <f.icon size={26} className="text-accent" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-lg text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {f.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
