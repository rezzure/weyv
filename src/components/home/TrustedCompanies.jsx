import Container from "../common/Container";

const clients = [
  "Aurelia Group",
  "Northgate Realty",
  "Vantage Capital",
  "Solace Living",
  "Kindred Retail",
  "Marlowe & Co.",
];

export default function TrustedCompanies() {
  return (
    <section className="border-y border-line bg-soft py-12 sm:py-14">
      <Container>
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Trusted by Businesses &amp; Brands
        </p>
        <div className="flex gap-10 overflow-x-auto pb-2 sm:justify-between sm:gap-6 sm:overflow-visible">
          {clients.map((name) => (
            <div
              key={name}
              className="flex shrink-0 items-center justify-center px-2 font-display text-lg text-ink/30 grayscale transition-all duration-300 hover:text-ink/70 hover:grayscale-0"
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
