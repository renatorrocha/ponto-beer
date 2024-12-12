"use client";

import { ChefHat, LogOutIcon, User2 } from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import SidebarLink from "./sidebar-link";
import { DASHBOARD_SIDEBAR_LINKS, Paths } from "~/lib/constants";
import { useAuthStore } from "~/lib/store/auth";
import { Button } from "~/components/ui/button";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export function AppSidebar() {
  const { user, clearUser } = useAuthStore();
  const router = useRouter();

  async function handleSignOut() {
    clearUser();
    await deleteCookie("jwt");
    router.push(Paths.login);
  }

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size="lg"
              className="transition-all duration-300 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
                  <ChefHat className="h-4 w-4 transition-all group-hover:scale-110" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Ponto Beer</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                <SidebarLink
                  key={item.label}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="rounded-lg bg-sidebar-accent p-4">
          <div className="mb-2 flex items-center space-x-2">
            <User2 className="h-5 w-5" />
            <span className="font-semibold">{user?.name}</span>
          </div>
          <div className="mb-4 text-sm text-sidebar-foreground/70">
            {user?.email}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={handleSignOut}
          >
            <LogOutIcon className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
