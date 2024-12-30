import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { NavigationItem } from "./types";
import { ServiceMenu } from "./ServiceMenu";

interface NavigationLinksProps {
  items: NavigationItem[];
  isMobile?: boolean;
}

export const NavigationLinks = ({ items, isMobile = false }: NavigationLinksProps) => {
  return (
    <>
      {items.map((item) => (
        <NavigationMenuItem key={item.label}>
          {item.hasDropdown ? (
            <ServiceMenu serviceItems={item.serviceItems || []} />
          ) : (
            <Link
              to={item.path}
              className={`text-base font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50 ${
                item.path === window.location.pathname
                  ? "text-brandPurple bg-blue-50"
                  : "text-gray-600 hover:text-brandPurple"
              } ${isMobile ? "block w-full" : ""}`}
            >
              {item.label}
            </Link>
          )}
        </NavigationMenuItem>
      ))}
    </>
  );
};