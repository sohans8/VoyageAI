import TripOverview from "./TripOverview";
import DailyItinerary from "./DailyItinerary";
import TopPlaces from "./TopPlaces";
import BudgetCard from "./BudgetCard";
import FoodCard from "./FoodCard";
import TravelTips from "./TravelTips";

type TripResultProps = {
  data: any;
};

export default function TripResult({ data }: TripResultProps) {
  if (!data) return null;

  return (
    <div className="mt-10 space-y-8">
      <TripOverview overview={data.trip_overview} />

      <DailyItinerary itinerary={data.daily_itinerary} />

      <TopPlaces places={data.top_places} />

      <div className="grid md:grid-cols-2 gap-6">
        <BudgetCard budget={data.budget_breakdown} />
        <FoodCard foods={data.food_to_try} />
      </div>

      <TravelTips tips={data.travel_tips} />
    </div>
  );
}