import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { MenuItemCard } from "./menu-item-card";
import type { Group } from "~/lib/validations";

interface MenuGroupProps {
  group: Group;
  index: number;
}

export function MenuGroup({ group, index }: MenuGroupProps) {
  return (
    <AccordionItem value={`item-${index}`}>
      <AccordionTrigger>
        <div>{group.name}</div>
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
