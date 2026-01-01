"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import heroImage from "@/assets/hero-maintenances.jpg";
import Image from "next/image";

const HeroSection = () => {
  const router = useRouter();
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    router.push("/search");
  };

  return (
    <section className="hero-section relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
  <Image
    src={heroImage}
    alt="Hero Maintenance"
    fill
    className="object-cover object-center"
  />
</div>
      <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Find Trusted{" "}
            <span className="block text-accent">Home Maintenance Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up">
            Connect with verified professionals for all your home repair and
            maintenance needs. Quality work, fair prices, guaranteed.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12 animate-scale-in">
            <div className="flex flex-col md:flex-row gap-4 p-2 bg-card rounded-2xl shadow-xl border border-border">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="What service do you need?"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="pl-12 h-14 text-base border-0 bg-transparent focus-visible:ring-0"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-12 h-14 text-base border-0 bg-transparent focus-visible:ring-0"
                />
              </div>
              <Button
                onClick={handleSearch}
                className="h-14 px-8 bg-gradient-primary text-primary-foreground text-base font-semibold hover:opacity-90 transition-opacity rounded-xl"
              >
                Search Services
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="trust-indicator">
              <div className="w-6 h-6 bg-secondary rounded-full" />
              <span className="text-white  text-xl">
                1000+ Verified Businesses
              </span>
            </div>
            <div className="trust-indicator">
              <div className="w-6 h-6 bg-accent rounded-full" />
              <span className="text-white  text-xl">24/7 Customer Support</span>
            </div>
            <div className="trust-indicator">
              <div className="w-6 h-6 bg-primary-light rounded-full" />
              <span className="text-white  text-xl">
                Satisfaction Guaranteed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
