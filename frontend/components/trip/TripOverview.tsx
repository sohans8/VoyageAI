type TripOverviewProps = {
  overview: {
    destination: string;
    days: number;
    budget: string;
    travel_style: string;
  };
};

export default function TripOverview({ overview }: TripOverviewProps) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-lg">
      <h2 className="text-3xl font-bold text-white">
        📍 {overview.destination}
      </h2>

      <div className="flex flex-wrap gap-4 mt-5">
        <span className="bg-blue-600 px-4 py-2 rounded-full text-white">
          🗓 {overview.days} Days
        </span>

        <span className="bg-green-600 px-4 py-2 rounded-full text-white">
          💰 {overview.budget}
        </span>

        <span className="bg-purple-600 px-4 py-2 rounded-full text-white">
          ✈ {overview.travel_style}
        </span>
      </div>
    </div>
  );
}