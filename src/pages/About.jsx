import { motion } from "framer-motion";
import { Target, Eye as EyeIcon, HeartHandshake } from "lucide-react";
import useSEO from "../hooks/useSEO";
import { SEO } from "../utils/constants";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import StatCard from "../components/common/StatCard";
import Button from "../components/common/Button";
import { companyInfo } from "../data/companyInfo";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To design and deliver interiors that perform as well as they look — planned around how people actually use a space, and executed without compromise.",
  },
  {
    icon: EyeIcon,
    title: "Our Vision",
    text: "To be the studio Indian businesses and homeowners trust for spaces that age well, both in material quality and design relevance.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    text: "Honesty in every estimate, care in every material choice, and accountability from first sketch through final handover.",
  },
];

const whyChoose = [
  { title: "Integrity", text: "Transparent quotes and honest timelines from day one." },
  { title: "Collaborative", text: "We design with you, not just for you." },
  { title: "Reliable", text: "Projects delivered on schedule, without cutting corners." },
  { title: "Innovative", text: "Fresh material thinking on every project we take on." },
  { title: "Client-Centric", text: "Every decision measured against how you'll live or work in the space." },
  { title: "Efficient", text: "Disciplined project management that respects your budget." },
];

export default function About() {
  useSEO(SEO.about.title, SEO.about.description);

  return (
    <>
      <PageHero
        eyebrow="About WEYV"
        title="Designing Spaces With Purpose"
        breadcrumb={[{ label: "About Us" }]}
        image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="section-pad bg-white">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow"><span className="h-px w-6 bg-current" />Who We Are</span>
            <h2 className="heading-lg mt-4 font-display">
              A Studio Built on Craft, Not Templates
            </h2>
            <p className="body-md mt-6">{companyInfo.description}</p>
            <p className="body-md mt-4">
              Founded in {companyInfo.founded}, WEYV has grown from a small
              residential practice into a full-service studio covering
              corporate, commercial and retail interiors —
              without losing the attention to detail we started with.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-[4/5] overflow-hidden bg-soft"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop"
              alt="WEYV studio at work"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </Container>
      </section>

      <section className="section-pad bg-soft">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-line bg-white p-8"
              >
                <v.icon size={26} className="text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-ink-secondary">
        <Container>
          <SectionHeading
            eyebrow="Why Choose WEYV"
            title="What Sets Our Studio Apart"
            tone="dark"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <h3 className="font-display text-lg text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-16 sm:py-20">
        <Container className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {companyInfo.stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </Container>
      </section>

      <section className="section-pad bg-soft">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="heading-lg max-w-xl font-display">
            Ready to Start a Project With WEYV?
          </h2>
          <Button to="/contact">Get In Touch</Button>
        </Container>
      </section>
    </>
  );
}
