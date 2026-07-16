const API_URL = "http://127.0.0.1:8000";

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
    console.error(result);
    throw new Error(result.detail || "Unknown backend error");
  }

  return result;
}