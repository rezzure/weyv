import useSEO from "../hooks/useSEO";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import { companyInfo } from "../data/companyInfo";

const sections = [
  {
    title: "Information We Collect",
    text: "When you fill out our contact form or get in touch by phone or email, we collect the details you provide — such as your name, email, phone number and project information — solely to respond to your enquiry.",
  },
  {
    title: "How We Use Your Information",
    text: "We use the information you share to respond to enquiries, prepare proposals and, where you've agreed, deliver project updates. We do not sell or rent your information to third parties.",
  },
  {
    title: "Cookies",
    text: "Our website may use cookies to understand how visitors use our site and to improve the browsing experience. You can disable cookies through your browser settings at any time.",
  },
  {
    title: "Data Security",
    text: "We take reasonable technical and organisational measures to protect the information you share with us against unauthorised access or disclosure.",
  },
  {
    title: "Contact Us",
    text: `If you have questions about this policy, reach us at ${companyInfo.email}.`,
  },
];

export default function PrivacyPolicy() {
  useSEO("Privacy Policy | WEYV", "WEYV's privacy policy and data handling practices.");

  return (
    <>
      <PageHero title="Privacy Policy" breadcrumb={[{ label: "Privacy Policy" }]} />
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
