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
        name: "Espetinho de Carne Serenada",
        description: "Frango temperado e grelhado no espeto",
        price: 5.99,
        image:
          "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Carne serenada",
        description: "Espetinho delicioso de carne serenada",
        price: 12.0,
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Contra filé",
        description: "Espetinho suculento de contra filé",
        price: 12.0,
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Picanha montada",
        description: "Espetinho premium de picanha montada",
        price: 12.0,
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Kafita bovina",
        description: "Espetinho especial de kafita bovina",
        price: 12.0,
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Kafita de frango",
        description: "Espetinho leve de kafita de frango",
        price: 12.0,
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Frango simples",
        description: "Espetinho clássico de frango simples",
        price: 12.0,
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Frango com Bacon",
        description: "Espetinho irresistível de frango com bacon",
        price: 12.0,
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Coração",
        description: "Espetinho tradicional de coração",
        price: 12.0,
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Provolone",
        description: "Espetinho saboroso de provolone",
        price: 12.0,
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Queijo coalho",
        description: "Espetinho típico de queijo coalho",
        price: 12.0,
        image: "https://via.placeholder.com/150",
      },
    ],
  },

  // {
  //   group: "Sobremesas",
  //   items: [
  //     {
  //       name: "Pudim de Leite",
  //       description: "Clássico pudim de leite condensado com calda de caramelo",
  //       price: 8.99,
  //       image:
  //         "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
  //     },
  //     {
  //       name: "Mousse de Chocolate",
  //       description: "Mousse leve e cremosa de chocolate",
  //       price: 7.99,
  //       image:
  //         "https://images.unsplash.com/photo-1611329695518-1763319f3551?auto=format&fit=crop&w=800&q=80",
  //     },
  //     {
  //       name: "Gelatina Colorida",
  //       description: "Gelatina de sabores variados, servida em cubos",
  //       price: 5.99,
  //       image:
  //         "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&w=800&q=80",
  //     },
  //     {
  //       name: "Salada de Frutas",
  //       description: "Frutas frescas da estação, levemente adoçadas",
  //       price: 6.49,
  //       image:
  //         "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?auto=format&fit=crop&w=800&q=80",
  //     },
  //   ],
  // },
  // {
  //   group: "Bebidas Alcoólicas",
  //   items: [
  //     {
  //       name: "Cerveja Lata",
  //       description: "Cerveja gelada (350ml)",
  //       price: 4.99,
  //       image:
  //         "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80",
  //     },
  //     {
  //       name: "Cerveja Long Neck",
  //       description: "Cerveja premium (355ml)",
  //       price: 6.99,
  //       image:
  //         "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80",
  //     },
  //     {
  //       name: "Caipirinha de Limão",
  //       description: "Cachaça, limão, açúcar e gelo",
  //       price: 8.99,
  //       image:
  //         "https://images.unsplash.com/photo-1609951651556-5334e2706168?auto=format&fit=crop&w=800&q=80",
  //     },
  //     {
  //       name: "Caipiroska de Morango",
  //       description: "Vodka, morango, açúcar e gelo",
  //       price: 10.99,
  //       image:
  //         "https://images.unsplash.com/photo-1626201850129-a96d53461932?auto=format&fit=crop&w=800&q=80",
  //     },
  //     {
  //       name: "Whisky (Dose)",
  //       description: "Dose de whisky selecionado",
  //       price: 14.99,
  //       image:
  //         "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=800&q=80",
  //     },
  //   ],
  // },
];
