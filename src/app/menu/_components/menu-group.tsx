import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import type { MenuGroup as MenuGroupType } from "~/data/menu-data";
import { MenuItemCard } from "./menu-item-card";

interface MenuGroupProps {
  group: MenuGroupType;
  index: number;
}

export function MenuGroup({ group, index }: MenuGroupProps) {
  return (
    <AccordionItem value={`item-${index}`}>
      <AccordionTrigger>
        <div>{group.group}</div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {group.items.map((item, itemIndex) => (
            <MenuItemCard key={itemIndex} item={item} />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
