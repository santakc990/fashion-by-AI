import { useState } from "react";
import { ClothingItem } from "../types/clothing";

export default function AddItem({ onAdd }: any) {
  const [form, setForm] = useState<ClothingItem>({
    id: crypto.randomUUID(),
    name: "",
    category: "shirt",
    color: "",
    moods: [],
    weather: [],
  });

  return (
    <div className="p-4 border rounded-xl space-y-2">
      <input
        className="border p-2 w-full"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="border p-2 w-full"
        placeholder="Color"
        onChange={(e) => setForm({ ...form, color: e.target.value })}
      />

      <button
        className="bg-black text-white px-4 py-2 rounded"
        onClick={() => onAdd({ ...form, id: crypto.randomUUID() })}
      >
        Add Clothing
      </button>
    </div>
  );
}
