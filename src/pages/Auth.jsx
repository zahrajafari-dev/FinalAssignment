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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  User,
  Building2,
  Shield,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  LogIn,
  ArrowLeft,
} from "lucide-react";

const Auth = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("login");
  const [selectedRole, setSelectedRole] = useState("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    businessName: "",
    phone: "",
  });

  const roleOptions = [
    {
      value: "customer",
      label: "Customer",
      icon: User,
      description: "Find and book services",
    },
    {
      value: "business",
      label: "Business Owner",
      icon: Building2,
      description: "List your services",
    },
    {
      value: "admin",
      label: "Admin",
      icon: Shield,
      description: "Manage platform",
    },
  ];

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      ...formData,
      role: selectedRole,
      action: activeTab,
    });

    if (selectedRole === "business" && activeTab === "register") {
      router.push("/business/onboarding");
    } else if (selectedRole === "business" && activeTab === "login") {
      router.push("/business/dashboard");
    } else if (selectedRole === "customer" && activeTab === "login") {
      router.push("/customer/dashboard");
    } 
    else {
      router.push("/");
    }
  };

  const selectedRoleData = roleOptions.find(
    (role) => role.value === selectedRole
  );

  return (
    <div className="min-h-screen bg-gradient-hero relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Back to Home */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-black/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/95">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-foreground pt-8">
                Welcome to{" "}
                <span className="text-2xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent tracking-tight hover:tracking-wide transition-all duration-300">
                  Locafy
                </span>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {activeTab === "login"
                  ? "Sign in to your account"
                  : "Create your account to get started"}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Role Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">I am a:</Label>
                <ToggleGroup
                  type="single"
                  value={selectedRole}
                  onValueChange={(value) => value && setSelectedRole(value)}
                  className="grid grid-cols-1 gap-2 w-full"
                >
                  {roleOptions.map((role) => {
                    const Icon = role.icon;
                    return (
                      <ToggleGroupItem
                        key={role.value}
                        value={role.value}
                        className="flex items-center justify-start p-3  h-auto data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                      >
                        <Icon className="w-4 h-4 mr-3" />
                        <div className="text-left">
                          <div className="font-medium">{role.label}</div>
                          <div className="text-xs opacity-80">
                            {role.description}
                          </div>
                        </div>
                        {role.value === "admin" && (
                          <Badge variant="outline" className="ml-auto text-xs">
                            Invite Only
                          </Badge>
                        )}
                      </ToggleGroupItem>
                    );
                  })}
                </ToggleGroup>
              </div>

              <Separator />

              {/* Auth Tabs */}
              <Tabs
                value={activeTab}
                onValueChange={(value) => setActiveTab(value)}
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login" className="flex items-center">
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger value="register" className="flex items-center">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Sign Up
                  </TabsTrigger>
                </TabsList>

                {/* Login Form */}
                <TabsContent value="login" className="space-y-4 mt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      Sign In as {selectedRoleData?.label}
                    </Button>
                  </form>
                </TabsContent>

                {/* Register Form */}
                <TabsContent value="register" className="space-y-4 mt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {selectedRole === "business" && (
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name</Label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="businessName"
                            name="businessName"
                            placeholder="Your Business Name"
                            value={formData.businessName}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      Create {selectedRoleData?.label} Account
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="text-center text-xs text-muted-foreground">
                By continuing, you agree to our{" "}
                <Link href="/terms" className="underline hover:text-foreground">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline hover:text-foreground">
                  Privacy Policy
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;
