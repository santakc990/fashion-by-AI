import { useState } from "react";
import { ClothingItem } from "../types/clothing";

export function useWardrobe() {
  const [items, setItems] = useState<ClothingItem[]>([]);

  const addItem = (item: ClothingItem) => {
    setItems(prev => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  return { items, addItem, removeItem };
}
