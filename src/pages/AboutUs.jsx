"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  Heart,
  Users,
  Zap,
  CheckCircle,
  TrendingUp,
  Shield,
} from "lucide-react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section py-20 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Connecting People to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Trusted Local Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Building stronger communities by bridging the gap between
              customers and exceptional local service providers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="hover-scale">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <section className="mb-20 animate-slide-up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Locafy was born from a simple observation: finding reliable
                  local service providers shouldn't be complicated. We noticed
                  that talented professionals in our communities often struggled
                  to reach customers who needed their services, while customers
                  spent hours searching for trustworthy providers.
                </p>
                <p>
                  We created Locafy to bridge this gap. Our platform empowers
                  local businesses by giving them the tools to showcase their
                  expertise, manage bookings, and grow their customer base. At
                  the same time, we make it effortless for customers to
                  discover, compare, and connect with quality service providers
                  in their area.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center hover-scale">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  10K+
                </div>
                <div className="text-sm text-muted-foreground">
                  Service Providers
                </div>
              </Card>
              <Card className="p-6 text-center hover-scale">
                <div className="text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">
                  50K+
                </div>
                <div className="text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </Card>
              <Card className="p-6 text-center hover-scale">
                <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <div className="text-sm text-muted-foreground">
                  Service Categories
                </div>
              </Card>
              <Card className="p-6 text-center hover-scale">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  4.9
                </div>
                <div className="text-sm text-muted-foreground">
                  Average Rating
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-20 animate-scale-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl blur-3xl"></div>
            <Card className="relative p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                  Our Mission
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
                  To empower local service providers with the technology and
                  visibility they need to thrive, while making it simple and
                  safe for customers to find and book trusted professionals in
                  their community. We believe in strengthening local economies,
                  one connection at a time.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Our Core Values
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            These principles guide everything we do and shape how we serve our
            community
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover-scale bg-gradient-to-br from-card to-primary/5 border-primary/20 group">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Community First
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to strengthening local communities by
                  supporting small businesses and fostering meaningful
                  connections between neighbors.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover-scale bg-gradient-to-br from-card to-secondary/5 border-secondary/20 group">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Trust & Transparency
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We build trust through verified reviews, transparent pricing,
                  and secure transactions that protect both customers and
                  service providers.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover-scale bg-gradient-to-br from-card to-accent/5 border-accent/20 group">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Simplicity & Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to make every interaction seamless and intuitive,
                  delivering excellence in both our technology and customer
                  service.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* How We Help */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Empowering Local Service Providers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide the tools and support that help local businesses thrive
              in the digital age
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover-scale border-l-4 border-l-primary">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Visibility & Growth
                  </h3>
                  <p className="text-muted-foreground">
                    Professional online presence and marketing tools to reach
                    more customers without expensive advertising campaigns.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-scale border-l-4 border-l-secondary">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Streamlined Operations
                  </h3>
                  <p className="text-muted-foreground">
                    Booking management and customer communications that save
                    time and reduce administrative burden.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-scale border-l-4 border-l-accent">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Fair Opportunities
                  </h3>
                  <p className="text-muted-foreground">
                    Level playing field that gives small businesses the same
                    visibility as larger competitors.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-scale border-l-4 border-l-primary">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Support & Resources
                  </h3>
                  <p className="text-muted-foreground">
                    Ongoing support, best practices, and resources to deliver
                    exceptional customer experiences.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 px-6 bg-gradient-hero rounded-3xl animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking for services or want to grow your business,
            we're here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:opacity-90"
              >
                List Your Business
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="hover-scale">
                Browse Services
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
