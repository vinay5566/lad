import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { LogIn, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavigationLinks } from "./header/NavigationLinks";
import { MobileMenu } from "./header/MobileMenu";
import { NavigationItem } from "./header/types";

export const Header = () => {
  const isMobile = useIsMobile();

  const serviceItems = [
    { 
      label: "Wash & Fold", 
      path: "/services/wash-and-fold",
      description: "Professional washing and folding service for your everyday clothes"
    },
    { 
      label: "Wash & Steam Iron", 
      path: "/services/wash-and-steam-iron",
      description: "Get your clothes perfectly pressed with our steam iron service"
    },
    { 
      label: "Premium Laundry", 
      path: "/services/premium-laundry",
      description: "Special care for your premium and delicate garments"
    },
    { 
      label: "Clothing Dry Cleaning", 
      path: "/services/clothing-dry-cleaning",
      description: "Professional dry cleaning for all types of clothing"
    },
    { 
      label: "Household Dry Cleaning", 
      path: "/services/household-dry-cleaning",
      description: "Deep cleaning for your household textiles and fabrics"
    },
    { 
      label: "Bridal & Party Wear Care", 
      path: "/services/bridal-party-wear",
      description: "Specialized care for your special occasion wear"
    },
  ];

  const navigationItems: NavigationItem[] = [
    { label: "About", path: "/about" },
    { 
      label: "Services", 
      path: "/services", 
      hasDropdown: true,
      serviceItems 
    },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "/contact" },
    { label: "Franchise", path: "/franchise" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[100px]">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/1f8af204-b39c-4220-8e4a-d8a3e9ab3440.png" 
              alt="Radha Krishna Laundry and Dry Cleaning" 
              className="h-[75px] w-[200px] object-contain"
            />
          </Link>

          {isMobile ? (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Button>
              </Link>

              <Button 
                size="sm" 
                className="bg-brand-gradient text-white hover:opacity-90 transition-opacity"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule
              </Button>

              <MobileMenu navigationItems={navigationItems} />
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="gap-6">
                  <NavigationLinks items={navigationItems} />
                </NavigationMenuList>
              </NavigationMenu>

              <Link to="/login">
                <Button 
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Button>
              </Link>

              <Button 
                size="lg"
                className="bg-brand-gradient text-white hover:opacity-90 transition-opacity rounded-full px-8"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Pickup
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};