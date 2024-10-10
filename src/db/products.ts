import { ProductListType } from "@/components/ProductList";

export const products: ProductListType[] = [
  {
    id: 1,
    product: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "€ 5,90",
    type: ["Tradicional"],
    image: "/Expresso-Tradicional.png",
  },
  {
    id: 2,
    product: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "€ 5,90",
    type: ["Tradicional"],
    image: "/Expresso-Americano.png",
  },
  {
    id: 3,
    product: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: "€ 5,90",
    type: ["tradicional"],
    image: "/Expresso-Cremoso.png",
  },
  {
    id: 4,
    product: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: "€ 5,90",
    type: ["tradicional", "gelado"],
    image: "/Expresso-Gelado.png",
  },
  {
    id: 5,
    product: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "€ 5,90",
    type: ["Tradicional", "com leite"],
    image: "/Expresso-Cremoso.png",
  },
  {
    id: 6,
    product: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "€ 5,90",
    type: ["tradicional", "com leite"],
    image: "/Latte.png",
  },
  {
    id: 7,
    product: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: "€ 5,90",
    type: ["tradicional", "com leite"],
    image: "/Capuccino.png",
  },
  {
    id: 8,
    product: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: "€ 5,90",
    type: ["tradicional", "com leite"],
    image: "/Macchiato.png",
  },
  {
    id: 9,
    product: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "€ 5,90",
    type: ["tradicional", "com leite"],
    image: "/Mocaccino.png",
  },
  {
    id: 10,
    product: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: "€ 5,90",
    type: ["tradicional", "com leite"],
    image: "/Chocolate-Quente.png",
  },
  {
    id: 11,
    product: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: "€ 5,90",
    type: ["alcoólico"],
    image: "/Cubano.png",
  },
  {
    id: 12,
    product: "Havaiano",
    description: "Bebida adocicada preparada com café, leite de coco e ervas",
    price: "€ 5,90",
    type: ["especial"],
    image: "/Havaiano.png",
  },
  {
    id: 13,
    product: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: "€ 5,90",
    type: ["especial"],
    image: "/Arabe.png",
  },
  {
    id: 14,
    product: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: "€ 5,90",
    type: ["especial", "alcoólico"],
    image: "/Irlandes.png",
  },
];
