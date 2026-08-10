import Container from "../components/common/Container";
import Button from "../components/common/Button";
import useSEO from "../hooks/useSEO";

export default function NotFound() {
  useSEO("Page Not Found | WEYV", "The page you're looking for doesn't exist.");

  return (
    <section className="flex min-h-[80vh] items-center bg-white py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="font-display text-8xl text-primary-light sm:text-9xl">404</span>
        <h1 className="heading-lg font-display">This Space Hasn&rsquo;t Been Designed Yet</h1>
        <p className="body-md max-w-md">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have
          moved. Let&rsquo;s get you back on track.
        </p>
        <Button to="/">Back to Home</Button>
      </Container>
    </section>
  );
}
