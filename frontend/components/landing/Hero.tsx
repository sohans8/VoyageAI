import SearchForm from "./SearchForm";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">

      <h1 className="text-7xl font-bold">
        Plan Your Dream Trip
      </h1>

      <p className="mt-6 text-xl text-gray-400 max-w-2xl">
        AI powered travel planning in seconds.
      </p>

      <SearchForm />

    </section>
  );
}