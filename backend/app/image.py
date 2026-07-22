import requests
from .config import UNSPLASH_ACCESS_KEY


def get_destination_image(destination: str):
    url = "https://api.unsplash.com/search/photos"

    params = {
        "query": destination,
        "per_page": 1,
        "orientation": "landscape",
        "client_id": UNSPLASH_ACCESS_KEY,
    }

    response = requests.get(url, params=params)

    print("UNSPLASH STATUS:", response.status_code)
    print("UNSPLASH RESPONSE:", response.text[:500])

    if response.status_code != 200:
        return None

    data = response.json()

    if not data["results"]:
        return None

    return data["results"][0]["urls"]["regular"]