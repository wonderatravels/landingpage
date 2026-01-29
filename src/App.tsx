import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { DestinationsSection } from "./components/DestinationsSection";
import { PackagesSection } from "./components/PackagesSection";
import { CorporateSection } from "./components/CorporateSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { GallerySection } from "./components/GallerySection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DestinationsSection />
        <PackagesSection />
        <CorporateSection />
        <TestimonialsSection />
        <GallerySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
