"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServiceCategories from "@/components/ServiceCategories";
import WhyChooseUs from "@/components/WhyChooseUs";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ServicesHero />
        <ServiceCategories />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
