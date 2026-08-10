import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="flex h-full flex-col justify-between gap-6 border border-line bg-white p-8">
      <Quote className="text-primary/30" size={32} strokeWidth={1.5} />
      <p className="body-md text-ink/80">&ldquo;{testimonial.quote}&rdquo;</p>
      <div>
        <div className="mb-3 flex gap-0.5 text-sand">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <p className="font-display text-base text-ink">{testimonial.name}</p>
        <p className="text-xs text-muted">
          {testimonial.role} &middot; {testimonial.project}
        </p>
      </div>
    </div>
  );
}
