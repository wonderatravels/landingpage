import { Award, Clock, HeadphonesIcon } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Custom Packages",
      description: "Tailored travel experiences designed around your preferences and budget"
    },
    {
      icon: Clock,
      title: "Expert Planning",
      description: "Years of experience crafting seamless journeys across Asia and beyond"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock assistance ensuring peace of mind throughout your trip"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
            About Wondera
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We are your trusted travel partner, specializing in creating exceptional international travel experiences 
            for both individual adventurers and corporate clients. With deep expertise in Asia's most captivating destinations, 
            we transform your travel dreams into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl mb-4 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
