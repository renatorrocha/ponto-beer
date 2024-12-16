"use client";

import { Accordion } from "~/components/ui/accordion";
import { ScrollArea } from "~/components/ui/scroll-area";
import { HeroBanner } from "./_components/hero-banner";
import { MenuGroup } from "./_components/menu-group";
import { useRef } from "react";
import { MenuNavigation } from "./_components/menu-navigation";
import { api } from "~/trpc/react";
import { MenuSkeleton } from "./_components/menu-skeleton";

export default function MenuPage() {
  const { data, isLoading } = api.group.getAll.useQuery();
  const accordionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (index: number) => {
    const element = accordionRef.current?.querySelector(
      `[data-accordion-item="${index}"]`,
    );
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (isLoading) {
    return <MenuSkeleton />;
  }

  if (!data) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        Sem Items Catalogados.
      </div>
    );
  }

  return (
    <div className="flex-1">
      <HeroBanner backgroundImage="/ponto-beer-banner.png" />

      <MenuNavigation groups={data} onNavigate={scrollToSection} />

      <ScrollArea className="h-full">
        <div ref={accordionRef}>
          <Accordion
            type="multiple"
            className="w-full px-8"
            defaultValue={data.map((_, index) => `item-${index}`)}
          >
            {data.map((group, index) => (
              <div key={index} data-accordion-item={index}>
                <MenuGroup group={group} index={index} />
              </div>
            ))}
          </Accordion>
        </div>
      </ScrollArea>
    </div>
  );
}
