import { Beer } from "lucide-react";
import type dynamicIconImports from "lucide-react/dynamicIconImports";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Icon from "~/components/ui/icon";
import { ScrollArea } from "~/components/ui/scroll-area";

type MockData = {
  group: string;
  icon: keyof typeof dynamicIconImports;
  items: {
    name: string;
    description: string;
    price: number;
    image: string;
  }[];
};

const mockData: MockData[] = [
  {
    group: "Espetinhos",
    icon: "airplay",
    items: [
      {
        name: "Espetinho de Frango",
        description: "Frango temperado e grelhado no espeto",
        price: 5.99,
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Espetinho de Carne",
        description: "Pedaços de carne suculenta no espeto",
        price: 6.99,
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Espetinho de Linguiça",
        description: "Linguiça artesanal grelhada no espeto",
        price: 5.49,
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Espetinho de Queijo Coalho",
        description: "Queijo coalho levemente tostado no espeto",
        price: 4.99,
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Espetinho de Bacon com Carne",
        description: "Bacon crocante envolto em carne grelhada",
        price: 7.49,
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
  {
    group: "Sobremesas",
    icon: "a-arrow-down",
    items: [
      {
        name: "Pudim de Leite",
        description: "Clássico pudim de leite condensado com calda de caramelo",
        price: 8.99,
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Mousse de Chocolate",
        description: "Mousse leve e cremosa de chocolate",
        price: 7.99,
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Gelatina Colorida",
        description: "Gelatina de sabores variados, servida em cubos",
        price: 5.99,
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Salada de Frutas",
        description: "Frutas frescas da estação, levemente adoçadas",
        price: 6.49,
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
  {
    group: "Bebidas Alcoólicas",
    icon: "beer",
    items: [
      {
        name: "Cerveja Lata",
        description: "Cerveja gelada (350ml)",
        price: 4.99,
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Cerveja Long Neck",
        description: "Cerveja premium (355ml)",
        price: 6.99,
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Caipirinha de Limão",
        description: "Cachaça, limão, açúcar e gelo",
        price: 8.99,
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Caipiroska de Morango",
        description: "Vodka, morango, açúcar e gelo",
        price: 10.99,
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Whisky (Dose)",
        description: "Dose de whisky selecionado",
        price: 14.99,
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="container mx-auto flex-1">
      <div className="relative flex items-center overflow-hidden md:h-[30vh]">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1620219365994-f443a86ea626?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="text-primary-foreground relative z-10 mx-auto max-w-6xl px-4 text-center">
          <h1 className="my-4 text-5xl font-bold md:text-7xl">Ponto Beer</h1>
        </div>
      </div>

      <ScrollArea className="h-full">
        <Accordion type="multiple" className="w-full px-8">
          {mockData.map((group, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>
                <div>{group.group}</div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className="flex h-36 flex-row overflow-hidden"
                    >
                      <CardHeader className="flex flex-1 flex-col justify-between">
                        <div>
                          <CardTitle>{item.name}</CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </div>

                        <p className="text-lg font-bold">
                          R$ {item.price.toFixed(2)}
                        </p>
                      </CardHeader>

                      <CardContent>Imagem</CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollArea>
    </div>
  );
}
