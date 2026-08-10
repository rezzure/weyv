import ServiceDetail from "./ServiceDetail";

// Thin wrapper so /services/corporate-interior resolves through the shared
// ServiceDetail template while keeping a dedicated page file per spec.
export default function CorporateInterior() {
  return <ServiceDetail forcedSlug="corporate-interior" />;
}
