"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import electricalImage from "@/assets/business-electrical.jpg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  Filter,
  Map,
  List,
  Search,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

// Mock search results data
const searchResults = [
  {
    id: 1,
    name: "Elite Electrical Solutions",
    category: "Electrical",
    rating: 4.9,
    reviewCount: 127,
    image: electricalImage,
    location: "Downtown Area",
    distance: "2.3 km",
    description:
      "Licensed electricians specializing in residential and commercial electrical work. Available 24/7 for emergencies.",
    price: "From $75/hour",
    verified: true,
    featured: true,
    services: [
      "Wiring",
      "Panel Upgrades",
      "Emergency Repairs",
      "Lighting Installation",
    ],
    responseTime: "Within 2 hours",
  },
  {
    id: 2,
    name: "ProPlumb Masters",
    category: "Plumbing",
    rating: 4.8,
    reviewCount: 203,
    image:
      "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=400&h=300&fit=crop&crop=face",
    location: "Citywide Service",
    distance: "1.8 km",
    description:
      "Expert plumbers with over 15 years of experience. Free estimates and warranty on all work.",
    price: "From $90/hour",
    verified: true,
    featured: false,
    services: ["Leak Repairs", "Drain Cleaning", "Fixture Installation"],
    responseTime: "Same day",
  },
  {
    id: 3,
    name: "QuickFix Handyman",
    category: "General",
    rating: 4.6,
    reviewCount: 85,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=face",
    location: "East Side",
    distance: "3.1 km",
    description:
      "Reliable handyman services for all your home repair needs. No job too small!",
    price: "From $60/hour",
    verified: true,
    featured: false,
    services: ["Furniture Assembly", "Minor Repairs", "Maintenance"],
    responseTime: "Within 4 hours",
  },
  {
    id: 4,
    name: "Green Lawn Care",
    category: "Landscaping",
    rating: 4.7,
    reviewCount: 142,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=face",
    location: "Suburban Areas",
    distance: "4.2 km",
    description:
      "Professional landscaping and lawn care services. Eco-friendly solutions for beautiful gardens.",
    price: "From $50/visit",
    verified: false,
    featured: false,
    services: ["Lawn Mowing", "Garden Design", "Tree Trimming"],
    responseTime: "Within 24 hours",
  },
  {
    id: 5,
    name: "Climate Control Experts",
    category: "HVAC",
    rating: 4.9,
    reviewCount: 98,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&crop=face",
    location: "Metro Area",
    distance: "5.5 km",
    description:
      "Heating, ventilation, and air conditioning specialists. Emergency repair services available.",
    price: "From $85/hour",
    verified: true,
    featured: true,
    services: ["AC Repair", "Heating Installation", "Duct Cleaning"],
    responseTime: "Within 3 hours",
  },
];

const categories = [
  "All Categories",
  "Electrical",
  "Plumbing",
  "HVAC",
  "Painting",
  "Carpentry",
  "Landscaping",
  "Cleaning",
  "General",
];

const ratings = [
  "All Ratings",
  "4.5+ stars",
  "4.0+ stars",
  "3.5+ stars",
  "3.0+ stars",
];

const SearchResults = () => {
  const [viewMode, setViewMode] = useState("list");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedRating, setSelectedRating] = useState("All Ratings");
  const [locationFilter, setLocationFilter] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const filteredResults = searchResults.filter((business) => {
    const categoryMatch =
      selectedCategory === "All Categories" ||
      business.category === selectedCategory;
    const ratingMatch =
      selectedRating === "All Ratings" ||
      (selectedRating === "4.5+ stars" && business.rating >= 4.5) ||
      (selectedRating === "4.0+ stars" && business.rating >= 4.0) ||
      (selectedRating === "3.5+ stars" && business.rating >= 3.5) ||
      (selectedRating === "3.0+ stars" && business.rating >= 3.0);
    const locationMatch =
      !locationFilter ||
      business.location.toLowerCase().includes(locationFilter.toLowerCase());

    return categoryMatch && ratingMatch && locationMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Search Header */}
      <section className="bg-gradient-hero py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Search Results
            </h1>
            <p className="text-lg text-muted-foreground">
              Found {filteredResults.length} service providers in your area
            </p>
          </div>

          {/* Quick Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search for services or business names..."
                className="pl-12 h-12 text-lg bg-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">
                  Filters:
                </span>
              </div>

              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedRating} onValueChange={setSelectedRating}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  {ratings.map((rating) => (
                    <SelectItem key={rating} value={rating}>
                      {rating}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Input
                placeholder="Location filter..."
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-48"
              />

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="distance">Distance</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="reviews">Reviews</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="flex items-center gap-2"
              >
                <List className="h-4 w-4" />
                List
              </Button>
              <Button
                variant={viewMode === "map" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("map")}
                className="flex items-center gap-2"
              >
                <Map className="h-4 w-4" />
                Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === "list" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map((business, index) => (
                <Card
                  key={business.id}
                  className="business-card animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <Image
                      src={business.image}
                      alt={business.name}
                      className="w-full h-48 object-cover rounded-t-lg"
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
                    <div className="absolute bottom-3 right-3">
                      <Badge
                        variant="secondary"
                        className="bg-card/90 text-card-foreground"
                      >
                        {business.distance}
                      </Badge>
                    </div>
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
                    <Link href={`/business/${business.id}`}>
                      <Button className="flex-1 bg-gradient-primary">
                        View Profile
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Map className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Map View Coming Soon
                </h3>
                <p className="text-muted-foreground">
                  Interactive map with business locations will be available in
                  the next update.
                </p>
              </div>
            </div>
          )}

          {filteredResults.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No businesses found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All Categories");
                  setSelectedRating("All Ratings");
                  setLocationFilter("");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SearchResults;
