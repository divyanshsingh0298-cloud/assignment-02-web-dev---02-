# assignment-02-web-dev---02-
#  Async Weather Tracker

An **Async Weather Tracker** is a lightweight application that fetches and displays real-time weather data using **asynchronous programming**. The project demonstrates how async operations can improve performance while calling external weather APIs.

This project is useful for learning:

* Asynchronous programming
* API integration
* Handling real-time data
* Clean UI/CLI based weather reporting

---

##  Features

*  Search weather by **city name**
*  **Asynchronous API requests** for faster response
*  Displays **temperature, humidity, wind speed, and conditions**
*  Real-time weather updates
*  Error handling for invalid cities or network issues
*  Efficient and scalable async architecture

---

##  Tech Stack

* **Language:** Python / JavaScript (depending on your implementation)
* **Async Framework:** `asyncio` / `aiohttp` (Python) or `fetch + async/await` (JavaScript)
* **API:** OpenWeatherMap API or similar weather service
* **Tools:** Git, GitHub

---

##  Project Structure

```
async-weather-tracker
│
├── main.py / app.js        # Main application file
├── weather_api.py          # API request logic
├── config.py               # API key configuration
├── requirements.txt        # Dependencies
└── README.md               # Project documentation
```

---

##  Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/async-weather-tracker.git
cd async-weather-tracker
```

2. **Install dependencies**

```bash
pip install -r requirements.txt
```

3. **Add your API key**

Create a config file or environment variable with your weather API key.

Example:

```python
API_KEY = "your_api_key_here"
```

4. **Run the project**

```bash
python main.py
```

---

## Example Output

```
City: Delhi
Temperature: 30°C
Humidity: 65%
Weather: Clear Sky
Wind Speed: 12 km/h
```

---

##  Objectives

This project helps developers understand:

* How **asynchronous functions** improve performance
* Efficient **API handling**
* Structuring small **real-world backend projects**
* Managing **non-blocking network requests**

---

##  Future Improvements

*  Add **GUI dashboard**
*  Mobile-friendly interface
*  Auto-detect location
*  7-day weather forecast
*  Weather alerts and notifications




