import { 
  NavigationMenu,
  NavigationMenuContent, 
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

interface ServiceItem {
  label: string;
  path: string;
  description: string;
}

interface ServiceMenuProps {
  serviceItems: ServiceItem[];
}

export const ServiceMenu = ({ serviceItems }: ServiceMenuProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-medium transition-colors px-4 py-2 text-gray-600 hover:text-brandPurple bg-transparent">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[220px] p-2 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="flex flex-col">
              {serviceItems.map((service) => (
                <Link
                  key={service.label}
                  to={service.path}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brandPurple rounded-lg transition-colors"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};