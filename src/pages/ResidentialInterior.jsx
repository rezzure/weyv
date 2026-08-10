import ServiceDetail from "./ServiceDetail";

// Thin wrapper so /services/residential-interior resolves through the shared
// ServiceDetail template while keeping a dedicated page file per spec.
export default function ResidentialInterior() {
  return <ServiceDetail forcedSlug="residential-interior" />;
}
