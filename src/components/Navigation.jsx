"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import locafyIcon from "@/assets/locafy-icon.png";
import Image from "next/image";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src={locafyIcon}
              alt="Locafy"
              className="h-8 w-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent tracking-tight hover:tracking-wide transition-all duration-300">
              Locafy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="relative text-foreground font-medium transition-colors duration-300 hover:text-primary group"
            >
              <span className="relative z-10">About Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/services"
              className="relative text-foreground font-medium transition-colors duration-300 hover:text-primary group"
            >
              <span className="relative z-10">Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="relative text-foreground font-medium transition-colors duration-300 hover:text-primary group"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth">
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary"
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link href="/auth">
              <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                List Your Business
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground font-medium hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-foreground font-medium hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground font-medium hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200"
              >
                Contact Us
              </Link>
              <div className="pt-4 pb-3 border-t border-border">
                <Link href="/auth" className="block mb-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth" className="block">
                  <Button className="w-full bg-gradient-primary">
                    List Your Business
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
