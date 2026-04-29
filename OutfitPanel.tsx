import { generateOutfit } from "../utils/outfitEngine";

export default function OutfitPanel({ items, mood, weather }: any) {
  const outfit = generateOutfit(items, mood, weather);

  return (
    <div className="p-4 border rounded-xl mt-4">
      <h2 className="font-bold mb-2">AI Outfit Suggestion</h2>

      <p>👕 {outfit.shirt?.name || "No match"}</p>
      <p>👖 {outfit.pants?.name || "No match"}</p>
      <p>👟 {outfit.shoes?.name || "No match"}</p>
    </div>
  );
}
