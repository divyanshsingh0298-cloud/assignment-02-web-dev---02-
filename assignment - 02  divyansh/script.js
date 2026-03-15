function log(message){
    const logBox = document.getElementById("log");
    logBox.innerHTML += message + "<br>";
}

async function getWeather(){

    const city = document.getElementById("city").value;

    if(city==="") return;

    log("Searching weather for " + city);

    // Add to history
    const li = document.createElement("li");
    li.textContent = city;
    document.getElementById("history").appendChild(li);

    try{

        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
        );

        const data = await response.json();

        document.getElementById("weather").innerHTML = `
            <b>${data.name}</b><br>
            🌡 Temp: ${data.main.temp}°C<br>
            ☁ Condition: ${data.weather[0].description}
        `;

        log("Weather data loaded");

    }catch(err){
        log("Error fetching data");
    }

}