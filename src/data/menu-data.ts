export interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface MenuGroup {
  group: string;
  items: MenuItem[];
}

export const menuData = [
  {
    group: "Espetinhos",
    items: [
      {
        name: "Espetinho de Frango",
        description: "Frango temperado e grelhado no espeto",
        price: 5.99,
        image:
          "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Espetinho de Carne",
        description: "Pedaços de carne suculenta no espeto",
        price: 6.99,
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Espetinho de Linguiça",
        description: "Linguiça artesanal grelhada no espeto",
        price: 5.49,
        image:
          "https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Espetinho de Queijo Coalho",
        description: "Queijo coalho levemente tostado no espeto",
        price: 4.99,
        image:
          "https://images.unsplash.com/photo-1634487359989-3e90c9432133?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Espetinho de Bacon com Carne",
        description: "Bacon crocante envolto em carne grelhada",
        price: 7.49,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    group: "Sobremesas",
    items: [
      {
        name: "Pudim de Leite",
        description: "Clássico pudim de leite condensado com calda de caramelo",
        price: 8.99,
        image:
          "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Mousse de Chocolate",
        description: "Mousse leve e cremosa de chocolate",
        price: 7.99,
        image:
          "https://images.unsplash.com/photo-1611329695518-1763319f3551?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Gelatina Colorida",
        description: "Gelatina de sabores variados, servida em cubos",
        price: 5.99,
        image:
          "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Salada de Frutas",
        description: "Frutas frescas da estação, levemente adoçadas",
        price: 6.49,
        image:
          "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    group: "Bebidas Alcoólicas",
    items: [
      {
        name: "Cerveja Lata",
        description: "Cerveja gelada (350ml)",
        price: 4.99,
        image:
          "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Cerveja Long Neck",
        description: "Cerveja premium (355ml)",
        price: 6.99,
        image:
          "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Caipirinha de Limão",
        description: "Cachaça, limão, açúcar e gelo",
        price: 8.99,
        image:
          "https://images.unsplash.com/photo-1609951651556-5334e2706168?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Caipiroska de Morango",
        description: "Vodka, morango, açúcar e gelo",
        price: 10.99,
        image:
          "https://images.unsplash.com/photo-1626201850129-a96d53461932?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Whisky (Dose)",
        description: "Dose de whisky selecionado",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];
