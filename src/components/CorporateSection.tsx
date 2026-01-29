import { Briefcase, CalendarCheck, Users, TrendingUp } from "lucide-react";

export function CorporateSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Users,
      title: "Team Retreats",
      description: "Build stronger teams with curated experiences in inspiring locations"
    },
    {
      icon: Briefcase,
      title: "Business Travel",
      description: "Seamless corporate travel management for meetings and conferences"
    },
    {
      icon: CalendarCheck,
      title: "Event Planning",
      description: "Professional organization of corporate events and incentive programs"
    },
    {
      icon: TrendingUp,
      title: "Incentive Trips",
      description: "Reward excellence with memorable luxury travel experiences"
    }
  ];

  return (
    <section id="corporate" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1730084783279-5b51d3b6d49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYXZlbCUyMGFpcnBvcnR8ZW58MXx8fHwxNzY4OTA0MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Corporate travel"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Corporate Travel Solutions
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Elevate your business with our comprehensive corporate travel services. From team-building retreats 
            to executive conferences, we handle every detail with professionalism and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Transform Your Corporate Travel?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let us create a customized corporate travel solution that aligns with your business goals and budget.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105 shadow-xl"
          >
            Request Corporate Proposal
          </button>
        </div>
      </div>
    </section>
  );
}
