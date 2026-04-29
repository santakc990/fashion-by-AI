export default function WardrobeGrid({ items }: any) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      {items.map((item: any) => (
        <div key={item.id} className="p-3 border rounded-xl">
          <h3 className="font-bold">{item.name}</h3>
          <p>{item.category}</p>
          <p>{item.color}</p>
        </div>
      ))}
    </div>
  );
}
