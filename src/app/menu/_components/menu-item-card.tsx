import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import type { MenuItem } from "~/data/menu-data";
import { MenuItemImage } from "./menu-item-image";

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <Card className="flex h-36 flex-row overflow-hidden shadow-md">
      <CardHeader className="flex flex-1 flex-col justify-between">
        <div>
          <CardTitle>{item.name}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </div>
        <p className="text-lg font-bold">R$ {item.price.toFixed(2)}</p>
      </CardHeader>
      <CardContent className="p-0">
        <MenuItemImage src={item.image} alt={item.name} />
      </CardContent>
    </Card>
  );
}
