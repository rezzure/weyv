export default function Badge({ children, tone = "light" }) {
  const tones = {
    light: "bg-primary-light text-primary-dark",
    dark: "bg-white/10 text-white border border-white/20",
    outline: "border border-line text-muted",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
