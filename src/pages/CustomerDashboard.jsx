"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  User, 
  Calendar, 
  Wrench, 
  MessageCircle, 
  Edit3, 
  Star, 
  Clock,
  CheckCircle,
  AlertCircle,
  Bell,
  CalendarCheck
} from "lucide-react";

const CustomerDashboard = () => {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingNotes, setBookingNotes] = useState("");

  // Mock data
  const customerData = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    membershipLevel: "Premium",
    profileCompletion: 85,
    avatar: "/placeholder.svg"
  };

  const serviceProviders = [
    {
      id: 1,
      name: "Mike's Plumbing",
      type: "Plumbing",
      rating: 4.9,
      reviews: 127,
      availability: "Available Today",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Elite Electrical",
      type: "Electrical",
      rating: 4.8,
      reviews: 98,
      availability: "Next Day",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "CleanPro Services",
      type: "Cleaning",
      rating: 5.0,
      reviews: 215,
      availability: "Available Today",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "HandyFix Repairs",
      type: "Handyman",
      rating: 4.7,
      reviews: 156,
      availability: "Available Tomorrow",
      image: "/placeholder.svg"
    }
  ];

  const recentBookings = [
    {
      id: 1,
      service: "Plumbing Repair",
      provider: "Mike's Plumbing",
      date: "2024-01-15",
      status: "completed",
      amount: "$150"
    },
    {
      id: 2,
      service: "Electrical Inspection",
      provider: "Elite Electrical",
      date: "2024-01-20",
      status: "pending",
      amount: "$200"
    },
    {
      id: 3,
      service: "House Cleaning",
      provider: "CleanPro Services",
      date: "2024-01-18",
      status: "completed",
      amount: "$120"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "appointment",
      message: "Upcoming appointment with Elite Electrical tomorrow at 2:00 PM",
      time: "2 hours ago"
    },
    {
      id: 2,
      type: "message",
      message: "Mike's Plumbing sent you a message",
      time: "5 hours ago"
    },
    {
      id: 3,
      type: "update",
      message: "Your profile completion is now at 85%",
      time: "1 day ago"
    }
  ];

  const handleBookService = () => {
    console.log("Booking:", { selectedProvider, bookingDate, bookingTime, bookingNotes });
    setSelectedProvider(null);
    setBookingDate("");
    setBookingTime("");
    setBookingNotes("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        
        {/* Animated Background Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Welcome back,{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {customerData.name}!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Manage your bookings, discover new services, and connect with trusted local professionals
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Profile Summary */}
        <section className="mb-12 animate-fade-in">
          <Card className="bg-gradient-to-br from-card to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="h-24 w-24 border-4 border-primary/20">
                  <AvatarImage src={customerData.avatar} alt={customerData.name} />
                  <AvatarFallback className="text-2xl bg-gradient-primary text-primary-foreground">
                    {customerData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-foreground">{customerData.name}</h2>
                    <Badge className="bg-gradient-primary text-primary-foreground w-fit mx-auto md:mx-0">
                      {customerData.membershipLevel}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{customerData.email}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Profile Completion</span>
                      <span className="font-semibold text-foreground">{customerData.profileCompletion}%</span>
                    </div>
                    <Progress value={customerData.profileCompletion} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Edit3, label: "Edit Profile", color: "primary" },
              { icon: Calendar, label: "View Bookings", color: "secondary" },
              { icon: Wrench, label: "Book a Service", color: "accent" },
              { icon: MessageCircle, label: "Support", color: "primary" }
            ].map((action, index) => (
              <Card key={index} className="hover-scale cursor-pointer bg-gradient-to-br from-card to-primary/5 border-primary/20 group">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <action.icon className={`h-6 w-6 text-${action.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground">{action.label}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Providers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Available Service Providers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceProviders.map((provider) => (
              <Card key={provider.id} className="hover-scale border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <Avatar className="h-16 w-16 mb-3">
                    <AvatarImage src={provider.image} alt={provider.name} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {provider.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{provider.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Badge variant="outline" className="text-xs">{provider.type}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{provider.rating}</span>
                      <span className="text-muted-foreground">({provider.reviews})</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{provider.availability}</span>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
                          onClick={() => setSelectedProvider(provider)}
                        >
                          Book Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Book {provider.name}</DialogTitle>
                          <DialogDescription>Schedule your service appointment</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="date">Preferred Date</Label>
                            <Input
                              id="date"
                              type="date"
                              value={bookingDate}
                              onChange={(e) => setBookingDate(e.target.value)}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="time">Preferred Time</Label>
                            <Input
                              id="time"
                              type="time"
                              value={bookingTime}
                              onChange={(e) => setBookingTime(e.target.value)}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="notes">Additional Notes</Label>
                            <Textarea
                              id="notes"
                              placeholder="Describe the service you need..."
                              value={bookingNotes}
                              onChange={(e) => setBookingNotes(e.target.value)}
                              rows={4}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button 
                            type="submit" 
                            className="bg-gradient-primary text-primary-foreground hover:opacity-90"
                            onClick={handleBookService}
                          >
                            Confirm Booking
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Recent Activity</h2>
          <Card className="bg-gradient-to-br from-card to-secondary/5 border-secondary/20">
            <CardContent className="p-6 space-y-4">
              {recentBookings.map((booking) => (
                <div 
                  key={booking.id} 
                  className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      booking.status === 'completed' 
                        ? 'bg-green-500/10' 
                        : booking.status === 'pending' 
                        ? 'bg-yellow-500/10' 
                        : 'bg-primary/10'
                    }`}>
                      {booking.status === 'completed' ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : booking.status === 'pending' ? (
                        <Clock className="h-5 w-5 text-yellow-500" />
                      ) : (
                        <CalendarCheck className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{booking.service}</h4>
                      <p className="text-sm text-muted-foreground">{booking.provider} • {booking.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{booking.amount}</p>
                    <Badge 
                      variant={booking.status === 'completed' ? 'default' : 'secondary'}
                      className={booking.status === 'completed' ? 'bg-green-500' : ''}
                    >
                      {booking.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Notifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Notifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notifications.map((notification) => (
              <Card key={notification.id} className="hover-scale border-l-4 border-l-accent">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                      {notification.type === 'appointment' ? (
                        <Bell className="h-5 w-5 text-accent" />
                      ) : notification.type === 'message' ? (
                        <MessageCircle className="h-5 w-5 text-accent" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-accent" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground mb-1">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CustomerDashboard;
