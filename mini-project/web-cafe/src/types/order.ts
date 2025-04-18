interface ICart {
  menuId: string;
  quantity: number;
  notes: string;
}

interface IOrder {
  id: string;
  costumer_name: string;
  table_number: number;
  cart: ICart[];
  status: "PENDING" | "PROCCESING" | "COMPLETED" | "CANCELED";
  total: number;
}

export type { IOrder, ICart };
