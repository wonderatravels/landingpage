import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Wondera
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Your gateway to unforgettable travel experiences across the world's most beautiful destinations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-white/80 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-white/80 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("packages")} className="text-white/80 hover:text-white transition-colors">
                  Packages
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("destinations")} className="text-white/80 hover:text-white transition-colors">
                  Destinations
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("corporate")} className="text-white/80 hover:text-white transition-colors">
                  Corporate Travel
                </button>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Destinations
            </h4>
            <ul className="space-y-3 text-white/80">
              <li>Bali, Indonesia</li>
              <li>Vietnam</li>
              <li>Thailand</li>
              <li>Cambodia</li>
              <li>Dubai, UAE</li>
              <li>Malaysia</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/80">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>hello@wondera.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Travel Street<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Wondera Travel Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
