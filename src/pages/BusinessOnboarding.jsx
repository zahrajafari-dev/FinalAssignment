"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Phone,
  Clock,
  Camera,
  Wrench,
  CheckCircle,
} from "lucide-react";

const BusinessOnboarding = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [businessData, setBusinessData] = useState({
    businessName: "",
    category: "",
    services: [],
    description: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    website: "",
    hours: {
      monday: { open: "09:00", close: "17:00", closed: false },
      tuesday: { open: "09:00", close: "17:00", closed: false },
      wednesday: { open: "09:00", close: "17:00", closed: false },
      thursday: { open: "09:00", close: "17:00", closed: false },
      friday: { open: "09:00", close: "17:00", closed: false },
      saturday: { open: "09:00", close: "15:00", closed: false },
      sunday: { open: "09:00", close: "15:00", closed: true },
    },
    photos: [],
  });

  const categories = [
    "Electrician",
    "Plumber",
    "Carpenter",
    "Painter",
    "HVAC Technician",
    "Appliance Repair",
    "Handyman",
    "Roofing",
    "Landscaping",
    "Cleaning Services",
  ];

  const servicesByCategory = {
    Electrician: [
      "Wiring Installation",
      "Panel Upgrades",
      "Outlet Installation",
      "Lighting",
      "Emergency Repairs",
    ],
    Plumber: [
      "Pipe Repair",
      "Drain Cleaning",
      "Water Heater",
      "Bathroom Renovation",
      "Emergency Service",
    ],
    Carpenter: [
      "Custom Cabinets",
      "Furniture Repair",
      "Deck Building",
      "Trim Work",
      "Home Renovation",
    ],
    Painter: [
      "Interior Painting",
      "Exterior Painting",
      "Cabinet Painting",
      "Wallpaper",
      "Color Consultation",
    ],
    "HVAC Technician": [
      "AC Installation",
      "Heating Repair",
      "Duct Cleaning",
      "Maintenance",
      "System Replacement",
    ],
    "Appliance Repair": [
      "Refrigerator Repair",
      "Washer/Dryer",
      "Dishwasher",
      "Oven Repair",
      "Microwave",
    ],
    Handyman: [
      "General Repairs",
      "Fixture Installation",
      "Drywall",
      "Tile Work",
      "Assembly",
    ],
    Roofing: [
      "Roof Repair",
      "Gutter Installation",
      "Shingle Replacement",
      "Leak Repair",
      "Inspection",
    ],
    Landscaping: [
      "Lawn Care",
      "Tree Trimming",
      "Garden Design",
      "Irrigation",
      "Seasonal Cleanup",
    ],
    "Cleaning Services": [
      "House Cleaning",
      "Deep Cleaning",
      "Move-out Cleaning",
      "Office Cleaning",
      "Post-Construction",
    ],
  };

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Business registration completed:", businessData);
      router.push("/business/dashboard");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateBusinessData = (field, value) => {
    setBusinessData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (service) => {
    setBusinessData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const updateHours = (day, field, value) => {
    setBusinessData((prev) => ({
      ...prev,
      hours: {
        ...prev.hours,
        [day]: { ...prev.hours[day], [field]: value },
      },
    }));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files || []);
    setBusinessData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...files],
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Building2 className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-2xl font-bold">
                Tell us about your business
              </h2>
              <p className="text-muted-foreground">
                Let's start with the basics
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  placeholder="e.g., Mike's Electric Services"
                  value={businessData.businessName}
                  onChange={(e) =>
                    updateBusinessData("businessName", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Business Category *</Label>
                <Select
                  onValueChange={(value) =>
                    updateBusinessData("category", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Business Description</Label>
                <Textarea
                  id="description"
                  placeholder="Tell customers about your business, experience, and what makes you special..."
                  value={businessData.description}
                  onChange={(e) =>
                    updateBusinessData("description", e.target.value)
                  }
                  rows={4}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Wrench className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-2xl font-bold">
                What services do you offer?
              </h2>
              <p className="text-muted-foreground">
                Select all that apply to your business
              </p>
            </div>

            {businessData.category && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  {servicesByCategory[businessData.category]?.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={businessData.services.includes(service)}
                        onCheckedChange={() => toggleService(service)}
                      />
                      <Label
                        htmlFor={service}
                        className="text-sm font-medium leading-none"
                      >
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Selected Services</Label>
                  <div className="flex flex-wrap gap-2">
                    {businessData.services.map((service) => (
                      <Badge
                        key={service}
                        variant="secondary"
                        className="text-xs"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Phone className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground">
                How can customers reach you?
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={businessData.phone}
                    onChange={(e) =>
                      updateBusinessData("phone", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="contact@yourbusiness.com"
                    value={businessData.email}
                    onChange={(e) =>
                      updateBusinessData("email", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Street Address *</Label>
                <Input
                  id="address"
                  placeholder="123 Main Street"
                  value={businessData.address}
                  onChange={(e) =>
                    updateBusinessData("address", e.target.value)
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    placeholder="Your City"
                    value={businessData.city}
                    onChange={(e) => updateBusinessData("city", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="zipCode">ZIP Code *</Label>
                  <Input
                    id="zipCode"
                    placeholder="12345"
                    value={businessData.zipCode}
                    onChange={(e) =>
                      updateBusinessData("zipCode", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website (Optional)</Label>
                <Input
                  id="website"
                  placeholder="www.yourbusiness.com"
                  value={businessData.website}
                  onChange={(e) =>
                    updateBusinessData("website", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Clock className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-2xl font-bold">Business Hours</h2>
              <p className="text-muted-foreground">
                When are you available for work?
              </p>
            </div>

            <div className="space-y-4">
              {Object.entries(businessData.hours).map(([day, hours]) => (
                <div
                  key={day}
                  className="flex items-center space-x-4 p-3 border rounded-lg"
                >
                  <div className="w-20">
                    <Label className="capitalize font-medium">{day}</Label>
                  </div>

                  <Checkbox
                    checked={!hours.closed}
                    onCheckedChange={(checked) =>
                      updateHours(day, "closed", !checked)
                    }
                  />

                  {!hours.closed ? (
                    <div className="flex items-center space-x-2 flex-1">
                      <Input
                        type="time"
                        value={hours.open}
                        onChange={(e) =>
                          updateHours(day, "open", e.target.value)
                        }
                        className="w-24"
                      />
                      <span className="text-muted-foreground">to</span>
                      <Input
                        type="time"
                        value={hours.close}
                        onChange={(e) =>
                          updateHours(day, "close", e.target.value)
                        }
                        className="w-24"
                      />
                    </div>
                  ) : (
                    <span className="text-muted-foreground italic">Closed</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Camera className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-2xl font-bold">Showcase Your Work</h2>
              <p className="text-muted-foreground">
                Add photos to help customers trust your business
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <label htmlFor="photo-upload" className="cursor-pointer">
                  <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Click to upload photos of your work, team, or business
                  </p>
                  <Button type="button" variant="outline">
                    Choose Photos
                  </Button>
                </label>
              </div>

              {businessData.photos.length > 0 && (
                <div>
                  <Label className="text-sm font-medium">
                    Uploaded Photos ({businessData.photos.length})
                  </Label>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {businessData.photos.map((photo, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>{photo.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent tracking-tight hover:tracking-wide transition-all duration-300">
                Locafy
              </span>
            </div>

            <p className="text-black/80">
              Welcome to the community of trusted local professionals
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-black/80">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-black/80">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/95">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Business Registration</CardTitle>
              <CardDescription>
                Join hundreds of local professionals growing their business with
                Locafy
              </CardDescription>
            </CardHeader>

            <CardContent>
              {renderStep()}

              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="flex items-center"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <Button onClick={handleNext} className="flex items-center">
                  {currentStep === totalSteps ? "Complete Setup" : "Next"}
                  {currentStep < totalSteps && (
                    <ChevronRight className="w-4 h-4 ml-2" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BusinessOnboarding;
