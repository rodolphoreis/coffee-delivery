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

export interface AddressesInterface {
  codigoPostal: string;
  rua: string;
  numero: string;
  complemento: string;
  freguesia: string;
  cidade: string;
  metodoPagamento: string;
}
