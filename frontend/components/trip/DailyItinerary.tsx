type Day = {
  day: number;
  morning: string;
  afternoon: string;
  evening: string;
};

export default function DailyItinerary({
  itinerary,
}: {
  itinerary: Day[];
}) {
  return (
    <div className="space-y-6">
      {itinerary.map((day) => (
        <div
          key={day.day}
          className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-5">
            🗓 Day {day.day}
          </h3>

          <div className="space-y-4 text-gray-200">
            <p>
              <strong>☀ Morning</strong>
              <br />
              {day.morning}
            </p>

            <p>
              <strong>🌤 Afternoon</strong>
              <br />
              {day.afternoon}
            </p>

            <p>
              <strong>🌙 Evening</strong>
              <br />
              {day.evening}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}