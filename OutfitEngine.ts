import { ClothingItem } from "../types/clothing";

export function generateOutfit(
  items: ClothingItem[],
  mood: string,
  weather: string
) {
  const match = (item: ClothingItem) =>
    item.moods.includes(mood) || item.weather.includes(weather);

  const shirts = items.filter(i => i.category === "shirt" && match(i));
  const pants = items.filter(i => i.category === "pants" && match(i));
  const shoes = items.filter(i => i.category === "shoes" && match(i));

  return {
    shirt: shirts[0],
    pants: pants[0],
    shoes: shoes[0],
  };
}
