import { Folder, Package, Users } from "lucide-react";
import type { SidebarLink } from "../types";
import { Paths } from "./paths";

export const DASHBOARD_SIDEBAR_LINKS: SidebarLink[] = [
  {
    href: Paths.Groups,
    label: "Grupos",
    icon: Folder,
  },
  {
    href: Paths.Products,
    label: "Produtos",
    icon: Package,
  },
  {
    href: Paths.Users,
    label: "Usuários",
    icon: Users,
  },
];
