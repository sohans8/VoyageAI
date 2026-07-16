"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { generateTrip } from "@/lib/api";

export default function SearchForm() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    try {
      setLoading(true);

      const response = await generateTrip({
        destination,
        days: Number(days),
        budget: Number(budget),
        travel_style: "Adventure",
      });

      setResult(response.itinerary);
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-10 space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Input
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <Input
          type="number"
          placeholder="Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />

        <Input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <Button onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating..." : "Generate Trip"}
        </Button>
      </div>

      {result && (
        <div className="rounded-lg border border-slate-700 bg-slate-900 p-6 whitespace-pre-wrap">
          {result}
        </div>
      )}
    </div>
  );
}