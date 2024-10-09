type CategoryTypes = [
  "tradicional",
  "alcoólico",
  "especial",
  "com leite",
  "gelado"
];
type PriceType = {
  value: "5.90";
};

export interface ItemsInterface {
  id: number;
  product: string;
  description: string;
  price: PriceType;
  type: CategoryTypes[];
  image: string;
}
