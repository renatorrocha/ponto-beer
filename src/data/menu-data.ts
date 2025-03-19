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
        price: 13.0,
        image: "/carne-serenada.jpg",
      },
      {
        name: "Contra filé",
        description: "Espetinho suculento de contra filé",
        price: 13.0,
        image: "/contra-file.jpg",
      },
      {
        name: "Picanha montada",
        description: "Espetinho premium de picanha montada",
        price: 13.0,
        image: "/picanha-montada.jpg",
      },
      {
        name: "Kafita bovina",
        description: "Espetinho especial de kafita bovina",
        price: 13.0,
        image: "./kafta-bovina.jpg",
      },
      {
        name: "Kafita de frango",
        description: "Espetinho leve de kafita de frango",
        price: 13.0,
        image:
          "https://th.bing.com/th/id/R.0bebb43e893691f9362354fe62eccfdc?rik=EHnbDN%2fFzhsmSg&pid=ImgRaw&r=0",
      },
      {
        name: "Frango simples",
        description: "Espetinho clássico de frango simples",
        price: 13.0,
        image: "/file-de-frango.jpg",
      },
      {
        name: "Frango com Bacon",
        description: "Espetinho irresistível de frango com bacon",
        price: 13.0,
        image: "/frango-com-bacon.jpg",
      },
      {
        name: "Coração",
        description: "Espetinho tradicional de coração",
        price: 13.0,
        image:
          "https://th.bing.com/th/id/OIP.zmj9E0lBeQIUw6NCgRJfigHaE7?rs=1&pid=ImgDetMain",
      },
      {
        name: "Provolone",
        description: "Espetinho saboroso de provolone",
        price: 13.0,
        image: "queijo-provolone.jpg",
      },
      {
        name: "Queijo coalho",
        description: "Espetinho típico de queijo coalho",
        price: 13.0,
        image:
          "https://th.bing.com/th/id/OIP.1OyCjmzDT1mhj0hiUOPFogHaE7?rs=1&pid=ImgDetMain",
      },
      {
        name: "Cupim",
        description: "Espetinho macio e saboroso de cupim",
        price: 13.0,
        image: "/cupim.jpg",
      },
      {
        name: "Linguiça de frango",
        description: "Espetinho delicioso de linguiça de frango",
        price: 13.0,
        image:
          "https://th.bing.com/th/id/R.ccc4857cca667bdef6dd54be40b382d9?rik=NSWiKQgaCKhEMQ&riu=http%3a%2f%2fwww.churrascocerto.com.br%2fwp-content%2fuploads%2f2011%2f01%2fespeto-linguica-de-frango.jpg&ehk=Knzh24khWbLKT%2fICCwH16vduHGTzt0hVKAGpPTnxBI4%3d&risl=&pid=ImgRaw&r=0",
      },
      {
        name: "Linguiça suína",
        description: "Espetinho suculento de linguiça suína",
        price: 13.0,
        image: "/linguica-suina.jpg",
      },
      {
        name: "Meio da asa",
        description: "Espetinho crocante do meio da asa",
        price: 13.0,
        image: "/meio-da-asa.jpg",
      },
    ],
  },
  {
    group: "Refeições",
    items: [
      {
        name: "Jantinha",
        description:
          "Refeição com arroz, feijão tropeiro, mandioca e vinagrete",
        price: 17.0,
        image:
          "https://th.bing.com/th/id/R.b31bb319a6df9e0af352f00c3ceacc0b?rik=DVROA1qcn1w1jw&pid=ImgRaw&r=0",
      },
      {
        name: "Jantinha Completa",
        description:
          "Refeição com arroz, feijão tropeiro, mandioca, vinagrete e espetinho à escolha",
        price: 30.0,
        image:
          "https://th.bing.com/th/id/OIP.LuHMiWMQcbkNcytPqI8eWAHaE8?rs=1&pid=ImgDetMain",
      },
    ],
  },
];
