export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">
          ✈️ VoyageAI
        </h1>

        <p className="text-xl text-gray-400">
          Your AI Powered Travel Planner
        </p>

        <button className="mt-8 px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}