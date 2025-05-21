import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/Layout/WhatsAppButton";
import Hero from "@/components/Home/Hero";
import AboutSection from "@/components/About/AboutSection";
import ServicesSection from "@/components/Services/ServicesSection";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";
import GallerySection from "@/components/Gallery/GallerySection";
import ContactSection from "@/components/Contact/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
