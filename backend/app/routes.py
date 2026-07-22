import os
print("RUNNING FROM:", os.getcwd())
from fastapi import APIRouter

from .models import TripRequest
from .ai import generate_itinerary
from .image import get_destination_image
from .weather import get_weather

router = APIRouter()


@router.post("/generate-trip")
def generate_trip(data: TripRequest):

    itinerary = generate_itinerary(
        data.destination,
        data.days,
        data.budget,
        data.travel_style,
    )

    image = get_destination_image(data.destination)
    weather = get_weather(data.destination)

    print("========== DEBUG ==========")
    print("IMAGE:", image)
    print("WEATHER:", weather)
    print("===========================")

    return {
        "success": True,
        "itinerary": itinerary,
        "image": image,
        "weather": weather,
    }