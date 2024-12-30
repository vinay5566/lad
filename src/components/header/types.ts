import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  label: string;
  path: string;
  description: string;
}

export interface NavigationItem {
  label: string;
  path: string;
  icon?: LucideIcon;
  hasDropdown?: boolean;
  serviceItems?: ServiceItem[];
}