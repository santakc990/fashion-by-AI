import AddItem from "./components/AddItem";
import WardrobeGrid from "./components/WardrobeGrid";
import OutfitPanel from "./components/OutfitPanel";
import { useWardrobe } from "./hooks/useWardrobe";
import { useState } from "react";

export default function App() {
  const { items, addItem } = useWardrobe();
  const [mood] = useState("casual");
  const [weather] = useState("sunny");

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Smart Wardrobe AI 👕</h1>

      <AddItem onAdd={addItem} />

      <OutfitPanel items={items} mood={mood} weather={weather} />

      <WardrobeGrid items={items} />
    </div>
  );
}
