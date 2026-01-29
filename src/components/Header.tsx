import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl tracking-tight text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Wondera
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("packages")} className="text-gray-700 hover:text-primary transition-colors">
              Packages
            </button>
            <button onClick={() => scrollToSection("destinations")} className="text-gray-700 hover:text-primary transition-colors">
              Destinations
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-primary transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection("corporate")} className="text-gray-700 hover:text-primary transition-colors">
              Corporate Travel
            </button>
            <button onClick={() => scrollToSection("faqs")} className="text-gray-700 hover:text-primary transition-colors">
              FAQs
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-white px-6 py-2.5 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="px-6 py-4 space-y-3">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("packages")} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition-colors">
              Packages
            </button>
            <button onClick={() => scrollToSection("destinations")} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition-colors">
              Destinations
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection("corporate")} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition-colors">
              Corporate Travel
            </button>
            <button onClick={() => scrollToSection("faqs")} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition-colors">
              FAQs
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition-colors">
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-accent text-white px-6 py-2.5 rounded-lg hover:bg-accent/90 transition-colors mt-4"
            >
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
