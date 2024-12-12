import type { LucideIcon } from "lucide-react";

export interface SidebarLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

declare type SearchParamProps = {
  params: Record<string, string>;
  searchParams: Record<string, string | string[]>;
};
