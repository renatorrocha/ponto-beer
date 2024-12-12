"use client";

import * as React from "react";
import { TooltipProvider } from "./ui/tooltip";
import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "./ui/sonner";
import { SidebarProvider } from "./ui/sidebar";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <TRPCReactProvider>
      <SidebarProvider>
        <TooltipProvider>
          {children}

          <Toaster richColors theme="light" />
        </TooltipProvider>
      </SidebarProvider>
    </TRPCReactProvider>
  );
}
