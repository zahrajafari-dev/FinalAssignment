import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import locafyIcon from "@/assets/locafy-icon.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
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
            </div>
            <p className="text-muted-foreground">
              Connecting homeowners with trusted local maintenance
              professionals. Quality service, fair prices, guaranteed
              satisfaction.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* For Customers */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              For Customers
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Find Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Customer Reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Safety & Trust
                </a>
              </li>
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              For Professionals
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  List Your Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Business Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Pricing Plans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Business Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Stay Connected
            </h3>
            <div className="space-y-4">
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">1-800-LOCAFY-CO</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">support@locafy.com</span>
              </div>
              <div className="flex items-start text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                <span className="text-sm">Available nationwide</span>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">
                  Get updates on new services and special offers
                </p>
                <div className="flex space-x-2">
                  <Input placeholder="Your email" className="flex-1" />
                  <Button size="sm" className="bg-gradient-primary">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Locafy. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
