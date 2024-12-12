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
        name: "Carne serenada",
        description: "Espetinho delicioso de carne serenada",
        price: 12.0,
        image: "/carne-serenada.jpg",
      },
      {
        name: "Contra filé",
        description: "Espetinho suculento de contra filé",
        price: 12.0,
        image: "/contra-file.jpg",
      },
      {
        name: "Picanha montada",
        description: "Espetinho premium de picanha montada",
        price: 12.0,
        image: "/picanha-montada.jpg",
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
        image: "/file-de-frango.jpg",
      },
      {
        name: "Frango com Bacon",
        description: "Espetinho irresistível de frango com bacon",
        price: 12.0,
        image: "/frango-com-bacon.jpg",
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
        image: "queijo-provolone.jpg",
      },
      {
        name: "Queijo coalho",
        description: "Espetinho típico de queijo coalho",
        price: 12.0,
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Cupim",
        description: "Espetinho macio e saboroso de cupim",
        price: 12.0,
        image: "/cupim.jpg",
      },
      {
        name: "Linguiça de frango",
        description: "Espetinho delicioso de linguiça de frango",
        price: 12.0,
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Linguiça suína",
        description: "Espetinho suculento de linguiça suína",
        price: 12.0,
        image: "/linguica-suina.jpg",
      },
      {
        name: "Meio da asa",
        description: "Espetinho crocante do meio da asa",
        price: 12.0,
        image: "/meio-da-asa.jpg",
      },
    ],
  },
];
