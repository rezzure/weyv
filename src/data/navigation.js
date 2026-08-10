export const serviceLinks = [
  { label: "Corporate Interior", path: "/services/corporate-interior" },
  { label: "Commercial Interior", path: "/services/commercial-interior" },
  { label: "Residential Interior", path: "/services/residential-interior" },
  { label: "Retail Interior", path: "/services/retail-interior" },
];

export const mainNav = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Services", path: "/services", children: serviceLinks },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
];

export const footerCompanyLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];
