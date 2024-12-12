"use client";

import { Accordion } from "~/components/ui/accordion";
import { ScrollArea } from "~/components/ui/scroll-area";
import { HeroBanner } from "./_components/hero-banner";
import { menuData } from "~/data/menu-data";
import { MenuGroup } from "./_components/menu-group";
import { useRef } from "react";
import { MenuNavigation } from "./_components/menu-navigation";

export default function MenuPage() {
  const accordionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (index: number) => {
    const element = accordionRef.current?.querySelector(
      `[data-accordion-item="${index}"]`,
    );
    if (element) {
      const yOffset = -100; // Offset to account for sticky header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className="flex-1">
      <HeroBanner title="Ponto Beer" backgroundImage="/ponto-beer-banner.png" />

      <MenuNavigation groups={menuData} onNavigate={scrollToSection} />

      <ScrollArea className="h-full">
        <div ref={accordionRef}>
          <Accordion
            type="multiple"
            className="w-full px-8"
            defaultValue={menuData.map((_, index) => `item-${index}`)}
          >
            {menuData.map((group, index) => (
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
