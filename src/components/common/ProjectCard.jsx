import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function ProjectCard({ project, className = "" }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group relative block overflow-hidden ${className}`}
    >
      <div className="aspect-[4/5] w-full overflow-hidden bg-soft">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.06]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
            {project.category}
          </span>
          <h3 className="mt-1.5 font-display text-xl text-white">
            {project.name}
          </h3>
          <p className="mt-1 flex items-center gap-1 text-xs text-white/70">
            <MapPin size={12} /> {project.location}
          </p>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-ink">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}
