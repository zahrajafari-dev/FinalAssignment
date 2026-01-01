"use client";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Calendar,
  Wifi,
  CreditCard,
  Wrench,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

const BusinessProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  // Mock business data - in real app, this would be fetched based on ID
  const business = {
    id: id || "1",
    name: "Elite Electrical Services",
    category: "Electrician",
    description:
      "Professional electrical services for residential and commercial properties. Licensed, insured, and experienced electricians providing quality workmanship with a 2-year warranty on all installations.",
    rating: 4.8,
    reviewCount: 127,
    verified: true,
    phone: "(555) 123-4567",
    email: "contact@eliteelectrical.com",
    address: "123 Main Street, Downtown, City 12345",
    hours: {
      Monday: "8:00 AM - 6:00 PM",
      Tuesday: "8:00 AM - 6:00 PM",
      Wednesday: "8:00 AM - 6:00 PM",
      Thursday: "8:00 AM - 6:00 PM",
      Friday: "8:00 AM - 6:00 PM",
      Saturday: "9:00 AM - 4:00 PM",
      Sunday: "Closed",
    },
    services: [
      "Electrical Repairs",
      "Wiring Installation",
      "Circuit Breaker Replacement",
      "Outlet Installation",
      "Lighting Installation",
      "Emergency Services",
      "Safety Inspections",
      "Smart Home Setup",
    ],
    features: [
      { icon: Shield, label: "Licensed & Insured" },
      { icon: Calendar, label: "Free Estimates" },
      { icon: Wifi, label: "Smart Home Expert" },
      { icon: CreditCard, label: "Multiple Payment Options" },
    ],
    photos: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    serviceAreas: [
      "Downtown",
      "Riverside",
      "Oak Hills",
      "Pine Valley",
      "Sunset District",
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Back Navigation */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Search Results
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Business Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-12 h-12 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h1 className="text-3xl font-bold">{business.name}</h1>
                      {business.verified && (
                        <Badge variant="secondary" className="w-fit">
                          <Shield className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                      <Badge variant="outline">{business.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{business.rating}</span>
                        <span className="text-muted-foreground">
                          ({business.reviewCount} reviews)
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {business.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t">
                  {business.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <feature.icon className="w-4 h-4 text-primary" />
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Photos Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Photos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {business.photos.map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-muted rounded-lg overflow-hidden"
                    >
                      <Image
                        src={photo}
                        alt={`${business.name} photo ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle>Services Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {business.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-accent/50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {business.serviceAreas.map((area, index) => (
                    <Badge key={index} variant="outline">
                      {area}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews & Ratings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Star className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Reviews and ratings feature coming soon</p>
                  <p className="text-sm">
                    Customers will be able to leave reviews and ratings here
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <a
                      href={`tel:${business.phone}`}
                      className="hover:text-primary transition-colors"
                    >
                      {business.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <a
                      href={`mailto:${business.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {business.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-0.5" />
                    <address className="not-italic">{business.address}</address>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(business.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="font-medium">{day}</span>
                      <span
                        className={
                          hours === "Closed" ? "text-muted-foreground" : ""
                        }
                      >
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Interactive map coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessProfile;
