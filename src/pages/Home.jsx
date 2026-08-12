import useSEO from "../hooks/useSEO";
import { SEO } from "../utils/constants";
import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";
import TrustedCompanies from "../components/home/TrustedCompanies";
import ServicesSection from "../components/home/ServicesSection";
import FeaturesSection from "../components/home/FeaturesSection";
import StatsSection from "../components/home/StatsSection";
import PopularProjects from "../components/home/PopularProjects";
import DesignProcess from "../components/home/DesignProcess";
import TestimonialsSection from "../components/home/TestimonialsSection";
import BlogPreview from "../components/home/BlogPreview";
import FinalCTA from "../components/home/FinalCTA";
import ContactTeaser from "../components/home/ContactTeaser";
import VideoSection from "../components/home/VideoSection";

export default function Home() {
  useSEO(SEO.home.title, SEO.home.description);

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <TrustedCompanies />
      <ServicesSection />
      <VideoSection />
      <FeaturesSection />
      <StatsSection />
      <PopularProjects />
      <DesignProcess />
      <TestimonialsSection />
      <BlogPreview />
      <FinalCTA />
      <ContactTeaser />
    </>
  );
}
