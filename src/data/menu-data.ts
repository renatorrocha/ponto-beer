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
        image: "./kafta-bovina.jpg",
      },
      {
        name: "Kafita de frango",
        description: "Espetinho leve de kafita de frango",
        price: 12.0,
        image:
          "https://th.bing.com/th/id/R.0bebb43e893691f9362354fe62eccfdc?rik=EHnbDN%2fFzhsmSg&pid=ImgRaw&r=0",
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
        image:
          "https://th.bing.com/th/id/OIP.zmj9E0lBeQIUw6NCgRJfigHaE7?rs=1&pid=ImgDetMain",
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
        image:
          "https://th.bing.com/th/id/OIP.1OyCjmzDT1mhj0hiUOPFogHaE7?rs=1&pid=ImgDetMain",
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
        image:
          "https://th.bing.com/th/id/R.ccc4857cca667bdef6dd54be40b382d9?rik=NSWiKQgaCKhEMQ&riu=http%3a%2f%2fwww.churrascocerto.com.br%2fwp-content%2fuploads%2f2011%2f01%2fespeto-linguica-de-frango.jpg&ehk=Knzh24khWbLKT%2fICCwH16vduHGTzt0hVKAGpPTnxBI4%3d&risl=&pid=ImgRaw&r=0",
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
  {
    group: "Refeições",
    items: [
      {
        name: "Jantinha Completa",
        description:
          "Refeição com arroz, feijão tropeiro, mandioca, vinagrete e espetinho à escolha",
        price: 25.0,
        image:
          "https://th.bing.com/th/id/OIP.LuHMiWMQcbkNcytPqI8eWAHaE8?rs=1&pid=ImgDetMain",
      },
      {
        name: "Feijão Tropeiro",
        description: "Uma generosa porção do nosso feijão tropeiro",
        price: 8.0,
        image:
          "https://receitarapido.com/wp-content/uploads/2022/05/Feijao-Tropeiro.jpg",
      },
      {
        name: "Arroz",
        description:
          "Porção de arroz soltinho, fresquinho e feito com todo o cuidado",
        price: 5.0,
        image:
          "https://th.bing.com/th/id/OIP.1CW0IiOcrAh88XpTVeIcygHaDS?rs=1&pid=ImgDetMain",
      },
      {
        name: "Mandioca",
        description: "Porção de mandioca crocante por fora e macia por dentro",
        price: 3.0,
        image:
          "https://th.bing.com/th/id/OIP.HdCyTIwxuEa0rQnJuf9THwHaDk?rs=1&pid=ImgDetMain",
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
