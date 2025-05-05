interface Imenu {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  isAvaliable: string;
}

interface ICart {
  menuId: string;
  quantity: number;
  notes: string;
  menuItem?: Imenu;
}

interface IOrder {
  id: string;
  costumer_name: string;
  table_number: number;
  cart: ICart[];
  status: "PENDING" | "PROCCESING" | "COMPLATED";
  total: number;
}

export type { IOrder, ICart };
