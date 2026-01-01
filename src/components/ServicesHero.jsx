import { Sparkles } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-secondary-light to-accent-light opacity-10"></div>
      
      {/* Animated Background Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6 animate-scale-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Professional Services at Your Doorstep</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            Expert Services for
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Every Home Need
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Connect with verified professionals for all your home maintenance needs. 
            Quality service, transparent pricing, guaranteed satisfaction.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Verified Professionals</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-success bg-clip-text text-transparent">10k+</div>
              <div className="text-sm text-muted-foreground mt-1">Happy Customers</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent">4.9★</div>
              <div className="text-sm text-muted-foreground mt-1">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
