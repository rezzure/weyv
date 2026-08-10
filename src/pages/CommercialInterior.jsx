import ServiceDetail from "./ServiceDetail";

// Thin wrapper so /services/commercial-interior resolves through the shared
// ServiceDetail template while keeping a dedicated page file per spec.
export default function CommercialInterior() {
  return <ServiceDetail forcedSlug="commercial-interior" />;
}
