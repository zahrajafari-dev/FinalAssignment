import { 
  Zap, 
  Wrench, 
  Paintbrush, 
  Hammer, 
  Home, 
  Leaf, 
  ShieldCheck, 
  Car,
  Wind,
  Lightbulb,
  Pipette,
  TreePine
} from "lucide-react";

const categories = [
  {
    id: "electrical",
    name: "Electrical",
    icon: Zap,
    description: "Licensed electricians for all electrical needs",
    count: "150+ services",
    color: "text-accent"
  },
  {
    id: "plumbing",
    name: "Plumbing",
    icon: Wrench,
    description: "Professional plumbers for repairs and installations",
    count: "200+ services",
    color: "text-primary"
  },
  {
    id: "painting",
    name: "Painting",
    icon: Paintbrush,
    description: "Interior and exterior painting specialists",
    count: "120+ services",
    color: "text-secondary"
  },
  {
    id: "carpentry",
    name: "Carpentry",
    icon: Hammer,
    description: "Skilled carpenters for custom woodwork",
    count: "90+ services",
    color: "text-accent"
  },
  {
    id: "roofing",
    name: "Roofing",
    icon: Home,
    description: "Roofing experts for repairs and replacements",
    count: "80+ services",
    color: "text-primary"
  },
  {
    id: "landscaping",
    name: "Landscaping",
    icon: Leaf,
    description: "Transform your outdoor spaces",
    count: "110+ services",
    color: "text-secondary"
  },
  {
    id: "security",
    name: "Security",
    icon: ShieldCheck,
    description: "Home security and alarm systems",
    count: "60+ services",
    color: "text-accent"
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: Car,
    description: "Mobile mechanics and car services",
    count: "70+ services",
    color: "text-primary"
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Service Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our most requested home maintenance services. All professionals are verified and highly rated.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.id}
                className="category-card group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {category.description}
                </p>
                <div className="text-sm text-primary font-medium">
                  {category.count}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary-dark font-medium inline-flex items-center group">
            View All Categories
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;