import useSEO from "../hooks/useSEO";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import { companyInfo } from "../data/companyInfo";

const sections = [
  {
    title: "Use of This Website",
    text: "This website is provided for general information about WEYV's services. Content is for informational purposes and does not constitute a formal project quote until confirmed in writing.",
  },
  {
    title: "Intellectual Property",
    text: "All designs, images and content on this site belong to WEYV unless otherwise credited, and may not be reproduced without written permission.",
  },
  {
    title: "Project Engagements",
    text: "Any design or execution engagement with WEYV is governed by a separate signed agreement, which takes precedence over any general statement made on this website.",
  },
  {
    title: "Limitation of Liability",
    text: "WEYV is not liable for any indirect or incidental damages arising from the use of this website or reliance on its content.",
  },
  {
    title: "Contact Us",
    text: `Questions about these terms can be sent to ${companyInfo.email}.`,
  },
];

export default function TermsConditions() {
  useSEO("Terms & Conditions | WEYV", "WEYV's terms and conditions of use.");

  return (
    <>
      <PageHero title="Terms & Conditions" breadcrumb={[{ label: "Terms & Conditions" }]} />
      <section className="section-pad bg-white">
        <Container className="max-w-3xl">
          <p className="body-md">Last updated: January 2026</p>
          <div className="mt-8 flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-xl">{s.title}</h2>
                <p className="body-md mt-3">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
