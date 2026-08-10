import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light",
  className = "",
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const textColor = tone === "dark" ? "text-white/70" : "text-muted";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-4 max-w-2xl ${alignment} ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${tone === "dark" ? "text-accent" : ""}`}>
          <span className="h-px w-6 bg-current" />
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className={`heading-lg font-display ${titleColor}`}>{title}</h2>
      )}
      {text && <p className={`body-md ${textColor}`}>{text}</p>}
    </motion.div>
  );
}
