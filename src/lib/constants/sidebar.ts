import type { SidebarLink } from "../types";
import { Paths } from "./paths";

export const DASHBOARD_SIDEBAR_LINKS: SidebarLink[] = [
  {
    href: Paths.Products,
    label: "Produtos",
    iconName: "package",
  },
  {
    href: Paths.Users,
    label: "Usuários",
    iconName: "users",
  },
];
