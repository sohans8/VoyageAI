export default function FoodCard({
  foods,
}: {
  foods: string[];
}) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-5">
        🍴 Must Try Foods
      </h2>

      <ul className="space-y-2">
        {foods.map((food, index) => (
          <li key={index}>🍽 {food}</li>
        ))}
      </ul>
    </div>
  );
}