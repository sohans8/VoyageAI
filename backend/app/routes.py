from fastapi import APIRouter
from .models import TripRequest
from .ai import generate_itinerary

router = APIRouter()

@router.post("/generate-trip")
def generate_trip(data: TripRequest):
    itinerary = generate_itinerary(
        data.destination,
        data.days,
        data.budget,
        data.travel_style
    )

    return {
        "success": True,
        "itinerary": itinerary
    }