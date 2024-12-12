"use client";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import React from "react";
import { SidebarTrigger } from "~/components/ui/sidebar";
import { URL_TRANSLATIONS } from "~/lib/constants";

const isId = (segment: string) => {
  return /^[a-zA-Z0-9]{24}$/.test(segment);
};

const translatePathName = (path: string) => {
  return URL_TRANSLATIONS[path] ?? path.charAt(0).toUpperCase() + path.slice(1);
};

export default function Header() {
  const pathname = usePathname();
  const pathNames = pathname.split("/").filter((path) => path && !isId(path));

  return (
    <header className="sticky top-0 z-30 flex h-14 w-full items-center justify-between border-b bg-background p-2 py-5 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <div className="flex gap-4">
        <SidebarTrigger />

        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            {pathNames.map((segment, index) => {
              const href = `/${pathNames.slice(0, index + 1).join("/")}`;

              return (
                <React.Fragment key={segment}>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link
                        href={href}
                        className={cn(
                          index == pathNames.length - 1 &&
                            "pointer-events-none text-primary",
                        )}
                      >
                        {translatePathName(segment)}{" "}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {index < pathNames.length - 1 && <BreadcrumbSeparator />}{" "}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
