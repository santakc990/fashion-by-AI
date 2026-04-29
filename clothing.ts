export type Category = "shirt" | "pants" | "shoes" | "bag" | "accessory";

export type ClothingItem = {
  id: string;
  name: string;
  category: Category;
  color: string;
  moods: string[];
  weather: string[];
  image?: string;
};
