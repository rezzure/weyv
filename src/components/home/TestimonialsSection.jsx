import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import TestimonialCard from "../common/TestimonialCard";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeading
          eyebrow="Client Words"
          title="What Clients Say About Working With WEYV"
          align="center"
        />
        <div className="mt-14">
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
