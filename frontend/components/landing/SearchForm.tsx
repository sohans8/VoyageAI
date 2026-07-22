"use client";

import { useState, FormEvent } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { generateTrip } from "@/lib/api";

interface WeatherData {
  temperature: number;
  feels_like: number;
  humidity: number;
  wind_speed: number;
  condition: string;
  description: string;
}

export default function SearchForm() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [travelStyle, setTravelStyle] = useState("Adventure");

  const [result, setResult] = useState("");
  const [image, setImage] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const [loading, setLoading] = useState(false);

  async function handleGenerate(e?: FormEvent) {
    if (e) e.preventDefault();

    if (!destination.trim() || !days || !budget) {
      alert("Please fill out all required fields.");
      return;
    }

    if (Number(days) <= 0 || Number(budget) <= 0) {
      alert("Days and budget must be greater than zero.");
      return;
    }

    try {
      setLoading(true);
      // Clear previous results while loading new content
      setResult("");
      setWeather(null);
      setImage("");

      const response = await generateTrip({
        destination: destination.trim(),
        days: Number(days),
        budget: Number(budget),
        travel_style: travelStyle,
      });

      setResult(response.itinerary);
      setImage(response.image);
      setWeather(response.weather);
    } catch (err) {
      console.error("Trip generation error:", err);
      alert(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-14 space-y-10">
      {/* Search Card */}
      <form 
        onSubmit={handleGenerate}
        className="rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-6 shadow-2xl"
      >
        <div className="grid gap-4 lg:grid-cols-5">
          <Input
            placeholder="📍 Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            disabled={loading}
            className="h-12"
            required
          />

          <Input
            type="number"
            min="1"
            placeholder="🗓 Days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            disabled={loading}
            className="h-12"
            required
          />

          <Input
            type="number"
            min="1"
            placeholder="💰 Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            disabled={loading}
            className="h-12"
            required
          />

          <select
            aria-label="Travel Style"
            value={travelStyle}
            onChange={(e) => setTravelStyle(e.target.value)}
            disabled={loading}
            className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white focus:border-blue-500 outline-none disabled:opacity-50"
          >
            <option value="Adventure">🏕 Adventure</option>
            <option value="Luxury">💎 Luxury</option>
            <option value="Budget">💰 Budget</option>
            <option value="Family">👨‍👩‍👧‍👦 Family</option>
            <option value="Solo">🎒 Solo</option>
            <option value="Honeymoon">❤️ Honeymoon</option>
            <option value="Business">💼 Business</option>
            <option value="Road Trip">🚗 Road Trip</option>
          </select>

          <Button
            type="submit"
            disabled={loading}
            className="h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 font-semibold"
          >
            {loading ? "Generating..." : "✨ Generate Trip"}
          </Button>
        </div>
      </form>

      {/* Destination Banner */}
      {image && (
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={image}
            alt={destination}
            className="h-[500px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-10 left-10">
            <p className="text-slate-200 uppercase tracking-[0.3em] text-sm">
              AI Travel Guide
            </p>
            <h1 className="mt-2 text-6xl font-extrabold text-white">
              {destination}
            </h1>
            <div className="mt-4 flex gap-3 flex-wrap">
              <span className="rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur">
                🗓 {days} Days
              </span>
              <span className="rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur">
                💰 ₹{budget}
              </span>
              <span className="rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur">
                ❤️ {travelStyle}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Weather */}
      {weather && (
        <div className="rounded-3xl bg-slate-900 border border-slate-700 p-8 shadow-2xl">
          <h2 className="mb-8 text-3xl font-bold text-white">
            🌤 Live Weather
          </h2>

          <div className="grid gap-6 md:grid-cols-5">
            <div className="rounded-2xl bg-slate-800 p-6 text-center transition hover:scale-105">
              <div className="mb-4 text-5xl">🌡️</div>
              <p className="text-4xl font-bold text-blue-400">
                {weather.temperature}°
              </p>
              <p className="mt-2 text-slate-400">Temperature</p>
            </div>

            <div className="rounded-2xl bg-slate-800 p-6 text-center transition hover:scale-105">
              <div className="mb-4 text-5xl">🥵</div>
              <p className="text-4xl font-bold text-cyan-400">
                {weather.feels_like}°
              </p>
              <p className="mt-2 text-slate-400">Feels Like</p>
            </div>

            <div className="rounded-2xl bg-slate-800 p-6 text-center transition hover:scale-105">
              <div className="mb-4 text-5xl">💧</div>
              <p className="text-4xl font-bold text-green-400">
                {weather.humidity}%
              </p>
              <p className="mt-2 text-slate-400">Humidity</p>
            </div>

            <div className="rounded-2xl bg-slate-800 p-6 text-center transition hover:scale-105">
              <div className="mb-4 text-5xl">🌬️</div>
              <p className="text-4xl font-bold text-yellow-400">
                {weather.wind_speed}
              </p>
              <p className="mt-2 text-slate-400">km/h Wind</p>
            </div>

            <div className="rounded-2xl bg-slate-800 p-6 text-center transition hover:scale-105">
              <div className="mb-4 text-5xl">☀️</div>
              <p className="text-3xl font-bold text-orange-400">
                {weather.condition}
              </p>
              <p className="mt-2 capitalize text-slate-400">
                {weather.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="flex justify-center py-12">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
        </div>
      )}

      {/* AI Result */}
      {result && (
        <div className="max-w-6xl mx-auto rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 p-8">
            <h2 className="text-4xl font-bold text-white">
              ✨ AI Generated Travel Plan
            </h2>
            <p className="mt-2 text-blue-100">
              Personalized itinerary generated for your trip.
            </p>
          </div>

          <div className="p-10">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-5xl font-extrabold text-center text-blue-400 mb-10">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="mt-12 mb-6 border-b border-slate-700 pb-3 text-3xl font-bold text-white">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-8 mb-3 text-2xl font-semibold text-cyan-300">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-5 text-lg leading-8 text-slate-300">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-8 list-disc space-y-3 pl-8 text-slate-300">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-8 list-decimal space-y-3 pl-8 text-slate-300">
                    {children}
                  </ol>
                ),
                li: ({ children }) => <li className="leading-8">{children}</li>,
                strong: ({ children }) => (
                  <strong className="font-bold text-blue-300">
                    {children}
                  </strong>
                ),
                hr: () => <hr className="my-10 border-slate-700" />,
                table: ({ children }) => (
                  <div className="my-8 overflow-x-auto">
                    <table className="w-full overflow-hidden rounded-xl border border-slate-700">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-blue-600 text-white">{children}</thead>
                ),
                th: ({ children }) => (
                  <th className="border border-slate-700 p-4 text-left font-semibold">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border border-slate-700 p-4 text-slate-300">
                    {children}
                  </td>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="my-8 rounded-xl border-l-4 border-blue-500 bg-slate-800 p-5 italic text-slate-300">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="rounded bg-slate-800 px-2 py-1 text-cyan-300">
                    {children}
                  </code>
                ),
              }}
            >
              {result}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}