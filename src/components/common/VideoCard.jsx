import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function VideoCard({ video, index = 0 }) {
  const videoRef = useRef(null);

  const handleEnter = () => videoRef.current?.play();
  const handleLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/services/${video.slug}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="group block overflow-hidden border border-line bg-white transition-colors duration-300 hover:border-primary"
      >
        <div className="relative aspect-[5/4] overflow-hidden bg-soft">
          <video
            ref={videoRef}
            src={video.video}
            poster={video.poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink shadow-lift">
              <Play size={18} className="ml-0.5" fill="currentColor" />
            </span>
          </div>
        </div>
        <div className="flex items-start justify-between gap-4 p-6">
          <div>
            <h3 className="font-display text-xl text-ink">{video.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {video.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              Watch More
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}