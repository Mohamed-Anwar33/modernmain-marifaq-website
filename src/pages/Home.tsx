
import { useEffect } from "react";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogPreview from "../components/BlogPreview";
import ContactFormSection from "../components/ContactFormSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "المرافق المختصة - الرئيسية";
  }, []);

  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectsSection />
      <StatsSection />
      <TestimonialsSection />
      <BlogPreview />
      <ContactFormSection />
    </>
  );
};

export default Home;
