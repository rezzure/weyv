import ServiceDetail from "./ServiceDetail";

// Thin wrapper so /services/retail-interior resolves through the shared
// ServiceDetail template while keeping a dedicated page file per spec.
export default function RetailInterior() {
  return <ServiceDetail forcedSlug="retail-interior" />;
}
