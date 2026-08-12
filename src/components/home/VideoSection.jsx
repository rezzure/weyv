import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import VideoCard from "../common/VideoCard";
import { videos } from "../../data/videos";

export default function VideoSection() {
  return (
    <section className="pt-0 pb-16 sm:pb-20 lg:pb-28 bg-white">
      <Container>
        <SectionHeading
          eyebrow="See It In Motion"
          title="A Closer Look At How We Bring Spaces To Life"
          align="left"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => (
            <VideoCard video={video} key={video.slug} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}