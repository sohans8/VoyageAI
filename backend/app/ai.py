from groq import Groq
from .config import GROQ_API_KEY

client = Groq(api_key=GROQ_API_KEY)


def generate_itinerary(destination, days, budget, travel_style):
    prompt = f"""
You are an expert travel planner.

Create a professional, well-formatted travel guide in Markdown.

Destination: {destination}
Duration: {days} days
Budget: ₹{budget}
Travel Style: {travel_style}

IMPORTANT:
- Use proper Markdown.
- Use headings (#, ##, ###).
- Use bullet lists.
- Use bold text where appropriate.
- Use tables for costs.
- Make the response attractive and easy to read.
- Give realistic recommendations.
- Mention approximate costs.
- Keep the itinerary within the given budget.

Follow this structure exactly:

# 🌍 {destination} Travel Guide

A short welcome paragraph (2-3 lines).

---

# 📅 Trip Overview

- 📍 Destination:
- 🗓️ Duration:
- 💰 Budget:
- 🎒 Travel Style:
- 🌤️ Best Time to Visit:

---

# 🗓️ Day 1

## ☀️ Morning
- Activity
- Approximate cost

## 🍽️ Afternoon
- Activity
- Lunch recommendation

## 🌙 Evening
- Activity
- Dinner recommendation

---

Repeat the same structure for all {days} days.

---

# ⭐ Top Attractions

- Attraction 1
- Attraction 2
- Attraction 3
- Attraction 4
- Attraction 5

---

# 🍽️ Must Try Foods

- Food 1
- Food 2
- Food 3
- Food 4

---

# 🏨 Recommended Hotels

Create a Markdown table.

| Hotel | Price/Night | Rating | Best For |
|-------|-------------|--------|----------|

Include 4-5 hotels.

---

# 💰 Estimated Budget Breakdown

Create this Markdown table.

| Category | Estimated Cost |
|----------|----------------|
| Hotel | |
| Food | |
| Transport | |
| Activities | |
| Shopping | |
| Miscellaneous | |
| **Total** | |

Ensure the total is close to ₹{budget}.

---

# 🚕 Local Transportation

Explain:
- Taxi
- Auto
- Bus
- Train
- Bike Rental (if available)

Mention approximate prices.

---

# 🛍️ Shopping Suggestions

Recommend local markets and famous souvenirs.

---

# 💡 Travel Tips

Give 8-10 useful travel tips.

---

End with a short encouraging message wishing the traveller a great trip.
"""

    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.6,
    )

    return completion.choices[0].message.content