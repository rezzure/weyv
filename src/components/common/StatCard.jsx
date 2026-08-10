import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatCard({ value, suffix, label, tone = "light" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-2"
    >
      <div
        className={`font-display text-4xl sm:text-5xl lg:text-6xl ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        <Counter value={value} suffix={suffix} />
      </div>
      <p
        className={`text-sm tracking-wide ${
          tone === "dark" ? "text-white/60" : "text-muted"
        }`}
      >
        {label}
      </p>
    </motion.div>
  );
}
