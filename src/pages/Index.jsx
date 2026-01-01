"use client";
import FeaturedBusinesses from '@/components/FeaturedBusiness'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navigation from '@/components/Navigation'
import ServiceCategories from '@/components/ServiceCategories'
import React from 'react'

const Index = () => {
  return (
    <div className="min-h-screen">
       <Navigation />
       <main>
        <HeroSection />
        <ServiceCategories />
        <FeaturedBusinesses/>
       </main>
       <Footer/>
    </div>
  )
}

export default Index