"use client";
import React, { useState } from "react";
import Link from "next/link";

// UI Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Separator } from "../components/ui/separator";

// Icons
import {
  User,
  Eye,
  Phone,
  MessageSquare,
  TrendingUp,
  Star,
  Settings,
  Edit,
  Upload,
  Calendar,
  Bell,
  ArrowUpRight,
  DollarSign,
  Users,
  Award,
  CheckCircle,
  AlertCircle,
  Home,
} from "lucide-react";

// Image
import locafyIcon from "../assets/locafy-icon.png";
import Image from "next/image";

const BusinessDashboard = () => {
  const [notifications] = useState([
    {
      id: 1,
      message: "New customer viewed your profile",
      time: "2 hours ago",
      type: "info",
    },
    {
      id: 2,
      message: "Complete your profile to get more leads",
      time: "1 day ago",
      type: "warning",
    },
    {
      id: 3,
      message: "You received a 5-star review!",
      time: "2 days ago",
      type: "success",
    },
  ]);

  // Mock business data
  const businessData = {
    name: "Mike's Electric Services",
    category: "Electrician",
    profileComplete: 75,
    totalViews: 234,
    contactsThisMonth: 18,
    rating: 4.8,
    reviewCount: 23,
    photosCount: 8,
    servicesCount: 5,
  };

  const quickActions = [
    {
      title: "Edit Profile",
      description: "Update business info",
      icon: Edit,
      color: "bg-primary",
      link: "/business/profile/edit",
    },
    {
      title: "Upload Photos",
      description: "Showcase your work",
      icon: Upload,
      color: "bg-secondary",
      link: "/business/photos",
    },
    {
      title: "Manage Hours",
      description: "Update availability",
      icon: Calendar,
      color: "bg-accent",
      link: "/business/hours",
    },
    {
      title: "View Analytics",
      description: "See your performance",
      icon: TrendingUp,
      color: "bg-muted",
      link: "/business/analytics",
    },
  ];

  const getProfileCompletionTasks = () => {
    const tasks = [
      { task: "Business information", completed: true },
      { task: "Contact details", completed: true },
      { task: "Services & pricing", completed: true },
      { task: "Upload 5+ photos", completed: businessData.photosCount >= 5 },
      { task: "Business hours", completed: true },
      { task: "Get first review", completed: businessData.reviewCount > 0 },
    ];
    return tasks;
  };

  const completionTasks = getProfileCompletionTasks();
  const completedTasks = completionTasks.filter(
    (task) => task.completed
  ).length;
  const profileCompletion = Math.round(
    (completedTasks / completionTasks.length) * 100
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src={locafyIcon}
                alt="Locafy"
                className="h-8 w-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              <span className="text-2xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent tracking-tight hover:tracking-wide transition-all duration-300">
                Locafy
              </span>
              <Badge variant="outline" className="text-xs">
                Business
              </Badge>
            </Link>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Home className="h-4 w-4 mr-2" />
                View Public Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-2">
            <h1 className="text-3xl font-bold text-foreground">
              Welcome back, Mike!
            </h1>
            <Badge className="bg-success text-success-foreground">Active</Badge>
          </div>
          <p className="text-muted-foreground">
            Here's what's happening with your business today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2 text-primary" />
                      Profile Completion
                    </CardTitle>
                    <CardDescription>
                      Complete your profile to get 3x more customer leads
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {profileCompletion}%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Complete
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={profileCompletion} className="h-3" />

                <div className="space-y-3">
                  {completionTasks.map((task, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {task.completed ? (
                        <CheckCircle className="h-4 w-4 text-success" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-warning" />
                      )}
                      <span
                        className={`text-sm ${
                          task.completed
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {task.task}
                      </span>
                      {!task.completed && (
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-xs"
                        >
                          Complete
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Manage your business efficiently
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <Link key={index} href={action.link}>
                        <div className="group p-4 rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer hover:shadow-md">
                          <div
                            className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                          >
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <h3 className="font-medium text-sm mb-1">
                            {action.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {action.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Business Analytics */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                      Business Analytics
                    </CardTitle>
                    <CardDescription>
                      Your performance this month
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                    <ArrowUpRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2 mx-auto">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">
                      {businessData.totalViews}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Profile Views
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-2 mx-auto">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-2xl font-bold">
                      {businessData.contactsThisMonth}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Contacts
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-2 mx-auto">
                      <Star className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-2xl font-bold">
                      {businessData.rating}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Avg Rating
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-success/10 mb-2 mx-auto">
                      <MessageSquare className="h-6 w-6 text-success" />
                    </div>
                    <div className="text-2xl font-bold">
                      {businessData.reviewCount}
                    </div>
                    <div className="text-sm text-muted-foreground">Reviews</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Promotions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-primary" />
                  Boost Your Business
                </CardTitle>
                <CardDescription>
                  Promotional opportunities to grow your customer base
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Featured Listing Available
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Stand out from competitors and get 5x more visibility in
                      search results
                    </p>
                    <Button>
                      Promote My Business
                      <ArrowUpRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Business Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{businessData.name}</CardTitle>
                <CardDescription>{businessData.category}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Rating</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-warning fill-current mr-1" />
                    <span className="font-medium">{businessData.rating}</span>
                    <span className="text-muted-foreground ml-1">
                      ({businessData.reviewCount})
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Photos</span>
                  <span className="font-medium">
                    {businessData.photosCount} uploaded
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Services</span>
                  <span className="font-medium">
                    {businessData.servicesCount} listed
                  </span>
                </div>

                <Separator />

                <Button variant="outline" className="w-full" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Business Info
                </Button>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start space-x-3"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        notification.type === "success"
                          ? "bg-success"
                          : notification.type === "warning"
                          ? "bg-warning"
                          : "bg-primary"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                ))}

                <Button variant="link" size="sm" className="w-full">
                  View All Notifications
                </Button>
              </CardContent>
            </Card>

            {/* Help & Support */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  size="sm"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  size="sm"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Business Community
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  size="sm"
                >
                  <Star className="h-4 w-4 mr-2" />
                  Success Tips
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
