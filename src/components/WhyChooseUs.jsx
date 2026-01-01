import { DollarSign, MessageCircle, Clock, Star } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Real-Time Price Estimation",
    description: "Get instant, accurate price quotes for your service needs with our real-time estimation tool.",
    gradient: "from-primary to-primary-dark"
  },
  {
    icon: MessageCircle,
    title: "Instant Chat",
    description: "Connect with service providers instantly through our live chat feature for immediate assistance.",
    gradient: "from-secondary to-success"
  },
  {
    icon: Clock,
    title: "Live Queue & Wait Time Tool",
    description: "Track your service request in real-time and see accurate wait times for complete transparency.",
    gradient: "from-accent to-warning"
  },
  {
    icon: Star,
    title: "Real-Time Review & Updates",
    description: "Stay informed with live updates on your service and access up-to-the-minute reviews from customers.",
    gradient: "from-primary to-secondary"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Locafy</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just another service marketplace. We're your trusted partner in home care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon with Gradient */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Animated Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <p className="text-lg font-medium text-foreground">
              Ready to experience the difference?
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
