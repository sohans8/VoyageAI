export default function Features() {
  const features = [
    "🤖 AI Trip Planner",
    "💰 Budget Estimator",
    "🏨 Hotel Recommendations",
    "🌤️ Weather Forecast",
    "🗺️ Interactive Maps",
    "📄 PDF Itinerary"
  ];

  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature}
            className="bg-slate-800 p-8 rounded-xl text-center text-white shadow-lg"
          >
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
}