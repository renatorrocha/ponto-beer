import type dynamicIconImports from "lucide-react/dynamicIconImports";

declare type SidebarLink = {
  href: string;
  label: string;
  iconName: keyof typeof dynamicIconImports;
};
