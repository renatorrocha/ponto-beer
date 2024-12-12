"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { SidebarMenuButton, SidebarMenuItem } from "~/components/ui/sidebar";
import type { SidebarLink } from "~/lib/types";
import { cn } from "~/lib/utils";

export default function SidebarLink({ href, label, icon: Icon }: SidebarLink) {
  const pathname = usePathname();
  const isActive = useMemo(() => pathname.startsWith(href), [pathname, href]);

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        tooltip={label}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground",
          isActive && "bg-accent text-accent-foreground",
        )}
      >
        <Link href={href} className="flex items-center gap-3">
          <Icon className="h-4 w-4" />
          <span className="truncate">{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
