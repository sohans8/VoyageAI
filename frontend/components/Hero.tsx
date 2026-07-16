export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-28 px-6">
      <h1 className="text-6xl font-bold text-white">
        Plan Your Dream Trip with AI
      </h1>

      <p className="mt-6 text-gray-300 max-w-2xl text-lg">
        Generate personalized travel itineraries, estimate budgets,
        discover hotels, and explore destinations in seconds.
      </p>

      <button className="mt-10 bg-blue-600 px-8 py-4 rounded-xl text-lg hover:bg-blue-700">
        Start Planning
      </button>
    </section>
  );
}