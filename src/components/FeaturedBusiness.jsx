import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, MapPin, Phone, Clock, CheckCircle } from "lucide-react";
import electricalImage from "@/assets/business-electrical.jpg";
import plumbingImage from "@/assets/business-plumbing.jpg";
import paintingImage from "@/assets/business-painting.jpg";
import Image from "next/image";
const featuredBusinesses = [
  {
    id: 1,
    name: "Elite Electrical Solutions",
    category: "Electrical",
    rating: 4.9,
    reviewCount: 127,
    image: electricalImage,
    location: "Downtown Area",
    description: "Licensed electricians specializing in residential and commercial electrical work. Available 24/7 for emergencies.",
    price: "From $75/hour",
    verified: true,
    featured: true,
    services: ["Wiring", "Panel Upgrades", "Emergency Repairs"],
    responseTime: "Within 2 hours"
  },
  {
    id: 2,
    name: "ProPlumb Masters",
    category: "Plumbing",
    rating: 4.8,
    reviewCount: 203,
    image: plumbingImage,
    location: "Citywide Service",
    description: "Expert plumbers with over 15 years of experience. Free estimates and warranty on all work.",
    price: "From $90/hour",
    verified: true,
    featured: true,
    services: ["Leak Repairs", "Drain Cleaning", "Fixture Installation"],
    responseTime: "Same day"
  },
  {
    id: 3,
    name: "Precision Painters",
    category: "Painting",
    rating: 4.7,
    reviewCount: 89,
    image:  paintingImage,
    location: "North Side",
    description: "Professional painting services for interior and exterior projects. Eco-friendly paints available.",
    price: "From $3/sq ft",
    verified: true,
    featured: false,
    services: ["Interior Painting", "Exterior Painting", "Color Consultation"],
    responseTime: "Within 24 hours"
  }
];

const FeaturedBusinesses = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Service Providers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover top-rated professionals in your area. All featured businesses are verified and highly recommended.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBusinesses.map((business, index) => (
            <Card 
              key={business.id} 
              className="business-card animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <Image
                  src={business.image} 
                  alt={business.name}
                  className="w-full h-50 object-cover rounded-t-lg"
                />
                {business.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="featured-badge">Featured</span>
                  </div>
                )}
                {business.verified && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-success text-success-foreground p-1 rounded-full">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">
                      {business.name}
                    </h3>
                    <span className="service-area">
                      {business.category}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-accent fill-current" />
                    <span className="ml-1 text-sm font-medium text-foreground">
                      {business.rating}
                    </span>
                    <span className="ml-1 text-sm text-muted-foreground">
                      ({business.reviewCount})
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {business.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    {business.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-secondary" />
                    Response: {business.responseTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {business.services.slice(0, 2).map((service) => (
                    <span 
                      key={service}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                  {business.services.length > 2 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{business.services.length - 2} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary">
                    {business.price}
                  </span>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 space-x-3">
                <Button variant="outline" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
                <Button className="flex-1 bg-gradient-primary">
                  View Profile
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Featured Businesses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;