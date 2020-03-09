export interface Item {
  _id: string;
  name: string;
  description: string;
  price: number;
  state: "active" | "sold" | "removed";
  owner_id: string;
  image: string;
}

export interface Profile {
  wallet: number;
  items: {
    bought: Item[];
    betted: Item[];
    own: Item[];
  }
}

export interface User {
  _id: string;
  username: string;
  profile_id: string;
}