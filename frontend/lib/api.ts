const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:8000";

export interface GenerateTripRequest {
  destination: string;
  days: number;
  budget: number;
  travel_style: string;
}

export interface WeatherData {
  temperature: number;
  feels_like: number;
  humidity: number;
  wind_speed: number;
  condition: string;
  description: string;
  icon: string;
}

export interface GenerateTripResponse {
  success: boolean;
  itinerary: string;
  image: string | null;
  weather: WeatherData | null;
}

export async function generateTrip(
  data: GenerateTripRequest
): Promise<GenerateTripResponse> {
  const response = await fetch(`${API_URL}/generate-trip`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.detail || "Failed to generate trip");
  }

  return result;
}