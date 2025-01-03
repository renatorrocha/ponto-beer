import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { MenuItemCard } from "./menu-item-card";
import type { Group, Product } from "~/lib/validations";

interface MenuGroupProps {
  group: Group & { products: Product[] };
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
          {group.products.map((product: Product) => (
            <MenuItemCard key={product.id} item={product} />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
