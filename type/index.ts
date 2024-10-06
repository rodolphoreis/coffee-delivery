type CategoryTypes = [
  "tradicional",
  "alcoólico",
  "especial",
  "com leite",
  "gelado"
];

export interface ItemsInterface {
  id: number;
  product: string;
  description: string;
  price: string;
  type: CategoryTypes[];
  image: string;
}
