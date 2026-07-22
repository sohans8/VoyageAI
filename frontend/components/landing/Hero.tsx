import SearchForm from "./SearchForm";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white">
          Plan Your Dream Trip with AI
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
          Generate personalized travel itineraries, estimate budgets,
          discover hotels, and explore destinations in seconds.
        </p>
      </div>

      <SearchForm />
    </section>
  );
}