import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { NavigationItem } from "./types";
import { NavigationLinks } from "./NavigationLinks";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";

interface MobileMenuProps {
  navigationItems: NavigationItem[];
}

export const MobileMenu = ({ navigationItems }: MobileMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <nav className="flex flex-col gap-4 mt-8">
          <NavigationMenu>
            <NavigationMenuList className="flex-col items-start">
              <NavigationLinks items={navigationItems} isMobile />
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </SheetContent>
    </Sheet>
  );
};