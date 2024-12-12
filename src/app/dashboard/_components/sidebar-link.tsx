"use client";

import Link from "next/link";
import { cn } from "~/lib/utils";
import { usePathname } from "next/navigation";
import type { SidebarLink } from "~/lib/types";
import { useMemo } from "react";
import { SidebarMenuButton, SidebarMenuItem } from "~/components/ui/sidebar";
import Icon from "~/components/ui/icon";

export default function SidebarLink({ href, label, iconName }: SidebarLink) {
  const pathname = usePathname();
  const isActive = useMemo(() => pathname.startsWith(href), [pathname, href]);

  return (
    <SidebarMenuItem key={label}>
      <SidebarMenuButton
        asChild
        tooltip={label}
        className={cn(
          "hover:bg-sidebar-accent/80 flex items-center gap-4 rounded-lg px-2.5 py-4 text-muted-foreground transition-all duration-300 hover:text-foreground",
          isActive && "bg-sidebar-accent pointer-events-none text-primary",
        )}
      >
        <Link href={href}>
          <Icon name={iconName} className="size-5" />
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
