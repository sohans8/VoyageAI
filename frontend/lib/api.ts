const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://voyageai-backend-guru.onrender.com";

export async function generateTrip(data: {
  destination: string;
  days: number;
  budget: number;
  travel_style: string;
}) {
  const response = await fetch(`${API_URL}/generate-trip`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.detail || "Unknown backend error");
  }

  return result;
}