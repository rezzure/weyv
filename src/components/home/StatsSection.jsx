import Container from "../common/Container";
import StatCard from "../common/StatCard";
import { companyInfo } from "../../data/companyInfo";

export default function StatsSection() {
  return (
    <section className="border-y border-line bg-soft py-14 sm:py-16">
      <Container className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {companyInfo.stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </Container>
    </section>
  );
}
