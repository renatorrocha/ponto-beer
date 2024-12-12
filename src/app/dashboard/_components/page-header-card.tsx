"use client";

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface PageHeaderCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  action?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PageHeaderCard({
  icon: Icon,
  title,
  description,
  action,
  children,
  className,
}: PageHeaderCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="bg-primary/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Icon className="size-8 text-primary" />
            <div>
              <CardTitle className="text-2xl font-bold md:text-3xl">
                {title}
              </CardTitle>
              {description && (
                <CardDescription className="mt-1 text-sm md:text-base">
                  {description}
                </CardDescription>
              )}
            </div>
          </div>
          {action && <div className="flex items-center gap-2">{action}</div>}
        </div>
      </CardHeader>
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  );
}
