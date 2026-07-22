export default function TravelTips({
  tips,
}: {
  tips: string[];
}) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-5">
        💡 Travel Tips
      </h2>

      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li key={index}>✔ {tip}</li>
        ))}
      </ul>
    </div>
  );
}