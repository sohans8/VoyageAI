export default function BudgetCard({
  budget,
}: {
  budget: any;
}) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-5">
        💰 Budget Breakdown
      </h2>

      <div className="space-y-3">
        <p>🏨 Hotel : {budget.hotel}</p>
        <p>🍽 Food : {budget.food}</p>
        <p>🚖 Transport : {budget.transport}</p>
        <p>🎟 Activities : {budget.activities}</p>
      </div>
    </div>
  );
}