export interface Item {
  _id: string;
  name: string;
  description: string;
  price: number;
  state: "active" | "sold" | "removed";
  owner_id: string;
}