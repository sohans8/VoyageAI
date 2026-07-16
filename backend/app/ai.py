from groq import Groq
from .config import GROQ_API_KEY

client = Groq(api_key=GROQ_API_KEY)

def generate_itinerary(destination, days, budget, travel_style):
    prompt = f"""
Create a detailed travel itinerary.

Destination: {destination}
Days: {days}
Budget: ₹{budget}
Travel Style: {travel_style}

Include:
- Day-wise itinerary
- Recommended attractions
- Food recommendations
- Estimated expenses
- Local transportation
"""

    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.7,
    )

    return completion.choices[0].message.content