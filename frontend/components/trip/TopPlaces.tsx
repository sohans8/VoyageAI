type Place = {
  name: string;
  description: string;
};

export default function TopPlaces({
  places,
}: {
  places: Place[];
}) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-5">
        📍 Top Attractions
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {places.map((place, index) => (
          <div
            key={index}
            className="rounded-xl bg-slate-800 p-4 border border-slate-700"
          >
            <h3 className="text-lg font-semibold text-blue-400">
              {place.name}
            </h3>

            <p className="text-gray-300 mt-2">
              {place.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}