import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import CorporateInterior from "../pages/CorporateInterior";
import CommercialInterior from "../pages/CommercialInterior";
import ResidentialInterior from "../pages/ResidentialInterior";
import RetailInterior from "../pages/RetailInterior";
import Gallery from "../pages/Gallery";
import ProjectDetails from "../pages/ProjectDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/corporate-interior" element={<CorporateInterior />} />
      <Route path="/services/commercial-interior" element={<CommercialInterior />} />
      <Route path="/services/residential-interior" element={<ResidentialInterior />} />
      <Route path="/services/retail-interior" element={<RetailInterior />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/projects/:slug" element={<ProjectDetails />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
