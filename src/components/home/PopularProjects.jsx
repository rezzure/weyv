import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "../common/ProjectCard";
import Button from "../common/Button";
import { projects } from "../../data/projects";

export default function PopularProjects() {
  return (
    <section className="section-pad overflow-hidden bg-white">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Popular Projects"
            title="A Selection of Recent Work"
          />
          <div className="flex items-center gap-3">
            <button
              aria-label="Previous project"
              className="popular-prev flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              aria-label="Next project"
              className="popular-next flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </Container>

      <div className="container-wrap mt-12">
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: ".popular-prev", nextEl: ".popular-next" }}
          spaceBetween={20}
          slidesPerView={1.15}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3.2, spaceBetween: 24 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.slug}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Container className="mt-10 flex justify-center">
        <Button to="/gallery" variant="outline">
          View All Projects
        </Button>
      </Container>
    </section>
  );
}
