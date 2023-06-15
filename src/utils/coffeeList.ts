export interface CoffeeListProps {
  id: string;
  image: string;
  alt: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
}

export const coffeeListData = [
  {
    id: "1",
    image: "/cafe-expresso-tradicional.png",
    alt: "Ícone com uma xícara de café expresso tradicional",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    tags: ["Tradicional"],
  },
  {
    id: "2",
    image: "/cafe-expresso-americano.png",
    alt: "Ícone com uma xícara de expresso americano",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    tags: ["Tradicional"],
  },
  {
    id: "3",
    image: "/cafe-expresso-cremoso.png",
    alt: "Ícone com uma xícara de café expresso tradicional",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    tags: ["Tradicional"],
  },
  {
    id: "4",
    image: "/cafe-expresso-gelado.png",
    alt: "Ícone com uma xícara de café expresso gelado",
    name: "Expresso Cremoso",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    tags: ["Tradicional", "Gelado"],
  },
  {
    id: "5",
    image: "/cafe-com-leite.png",
    alt: "Ícone com uma xícara de café com leite",
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: "6",
    image: "/cafe-latte.png",
    alt: "Ícone com uma xícara de café Latte",
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: "7",
    image: "/cafe-capuccino.png",
    alt: "Ícone com uma xícara de café Capuccino",
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: "8",
    image: "/cafe-macchiato.png",
    alt: "Ícone com uma xícara de café Macchiato",
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: "9",
    image: "/cafe-mocaccino.png",
    alt: "Ícone com uma xícara de café Mocaccino",
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: "10",
    image: "/chocolate-quente.png",
    alt: "Ícone com uma xícara de chocolate quente",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: "11",
    image: "/cafe-cubano.png",
    alt: "Ícone com uma xícara de café cubano",
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    tags: ["Tradicional", "Alcoólico", "Gelado"],
  },
  {
    id: "12",
    image: "/cafe-havaiano.png",
    alt: "Ícone com uma xícara de café cubano",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    tags: ["Especial"],
  },
  {
    id: "13",
    image: "/cafe-arabe.png",
    alt: "Ícone com uma xícara de café árabe",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    tags: ["Especial"],
  },
  {
    id: "14",
    image: "/cafe-irlandes.png",
    alt: "Ícone com uma xícara de café Irlandês",
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    tags: ["Especial", "Alcoólico"],
  },
];
