import Container from "../common/Container";
import Button from "../common/Button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-secondary py-20 sm:py-28">
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-secondary via-ink-secondary/90 to-ink-secondary/60" />
      </div>
      <Container className="relative z-10 max-w-2xl">
        <h2 className="heading-lg font-display text-white">
          Ready to Transform Your Space?
        </h2>
        <p className="body-md mt-5 text-white/70">
          Tell us about your project and let&rsquo;s create an environment
          designed around the way you live, work and grow.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button to="/contact" variant="primary">
            Start Your Project
          </Button>
          <Button to="/contact" variant="ghostLight">
            Talk to WEYV
          </Button>
        </div>
      </Container>
    </section>
  );
}
