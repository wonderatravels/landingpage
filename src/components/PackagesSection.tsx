import { Calendar, MapPin, Users } from "lucide-react";

export function PackagesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const packages = [
    {
      title: "Bali Paradise Escape",
      type: "Individual",
      duration: "7 Days / 6 Nights",
      highlights: ["Ubud Rice Terraces", "Beach Resorts", "Temple Tours", "Spa & Wellness"],
      image: "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwcmljZSUyMHRlcnJhY2VzfGVufDF8fHx8MTc2ODg5MjgwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $1,299"
    },
    {
      title: "Vietnam Discovery Tour",
      type: "Individual",
      duration: "10 Days / 9 Nights",
      highlights: ["Halong Bay Cruise", "Hanoi & Ho Chi Minh", "Cultural Immersion", "Local Cuisine"],
      image: "https://images.unsplash.com/photo-1732272933438-e04c490a293d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwaGFsb25nJTIwYmF5fGVufDF8fHx8MTc2ODg1MjkxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $1,599"
    },
    {
      title: "Thailand Adventure",
      type: "Individual",
      duration: "8 Days / 7 Nights",
      highlights: ["Bangkok Temples", "Phuket Beaches", "Night Markets", "Island Hopping"],
      image: "https://images.unsplash.com/photo-1677127307966-e3db82b1b935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMGJhbmdrb2slMjB0ZW1wbGV8ZW58MXx8fHwxNzY4OTAwNzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $1,199"
    },
    {
      title: "Dubai Luxury Experience",
      type: "Individual",
      duration: "5 Days / 4 Nights",
      highlights: ["Burj Khalifa", "Desert Safari", "Luxury Shopping", "Fine Dining"],
      image: "https://images.unsplash.com/photo-1706798636444-d4eb076fb63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGJ1cmolMjBraGFsaWZhfGVufDF8fHx8MTc2ODc5MDcxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $1,899"
    },
    {
      title: "Corporate Retreat - Bali",
      type: "Corporate",
      duration: "5 Days / 4 Nights",
      highlights: ["Team Building", "Conference Facilities", "Networking Events", "Luxury Accommodations"],
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2ODc5MzY0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "Custom Pricing"
    },
    {
      title: "Cambodia Heritage Tour",
      type: "Individual",
      duration: "6 Days / 5 Nights",
      highlights: ["Angkor Wat", "Siem Reap", "Historical Sites", "Local Markets"],
      image: "https://images.unsplash.com/photo-1680960964783-cc3a22c141b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1ib2RpYSUyMGFuZ2tvciUyMHdhdHxlbnwxfHx8fDE3Njg5MDQyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $999"
    }
  ];

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Travel Packages
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Handcrafted travel experiences tailored for every type of traveler
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-1.5 rounded-full text-sm ${
                    pkg.type === "Corporate" 
                      ? "bg-primary text-white" 
                      : "bg-accent text-white"
                  }`}>
                    {pkg.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {pkg.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Calendar size={18} />
                  <span>{pkg.duration}</span>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Highlights:</p>
                  <ul className="space-y-1">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <MapPin size={14} className="mr-2 mt-1 flex-shrink-0 text-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xl text-primary">
                    {pkg.price}
                  </span>
                  <button
                    onClick={scrollToContact}
                    className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
