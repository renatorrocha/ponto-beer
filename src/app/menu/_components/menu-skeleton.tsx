"use client";

import { Skeleton } from "~/components/ui/skeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export function MenuSkeleton() {
  return (
    <div className="w-full">
      {/* Hero Banner Skeleton */}
      <Skeleton className="h-[200px] w-full" />

      {/* Navigation Skeleton */}
      <div className="flex gap-2 overflow-x-auto p-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-10 w-[120px] flex-shrink-0" />
        ))}
      </div>

      {/* Menu Groups Skeleton */}
      <div className="px-8">
        {[1, 2, 3].map((groupIndex) => (
          <Accordion key={groupIndex} type="single" className="mb-4 w-full">
            <AccordionItem value={`item-${groupIndex}`}>
              <AccordionTrigger className="hover:no-underline">
                <Skeleton className="h-6 w-[200px]" />
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start justify-between rounded-lg border p-4"
                    >
                      <div className="space-y-2">
                        <Skeleton className="h-5 w-[150px]" />
                        <Skeleton className="h-4 w-[250px]" />
                      </div>
                      <Skeleton className="h-6 w-[80px]" />
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
