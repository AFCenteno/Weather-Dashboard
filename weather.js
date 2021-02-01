var searchbtn = document.getElementById("btn");
var formEl = document.getElementById("cityInput");
var currentcit = document.getElementById("current");
var temp = document.getElementById("temp");
var cit = document.getElementById("cityName");
var day = document.getElementById("date");
var icon = document.getElementById("icon");
var humid = document.getElementById("humid");
var wind = document.getElementById("wind");
var uv = document.getElementById("uv")
var fiveday = document.getElementById("fiveday")
var cities = [];

var current = function(city) {
    var dayURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=f1382f269d045769a6333484c39e10c5';

      fetch(dayURL).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                weatherBoard(data);
                UV(data);
            })
        } else {
            alert("Error: " + response.statusText);
        }
        })
}

var daily = function(city) {
    var fivedayURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=f1382f269d045769a6333484c39e10c5';

      fetch(fivedayURL).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                fiveDayDash(data);
            })
        } else {
            alert("Error: " + response.statusText);
        }
        })
}

var UV = function(data) {
    var lon = data.coord.lon;
    var lat = data.coord.lat;
    var uvURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=f1382f269d045769a6333484c39e10c5'

    fetch(uvURL).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                uv.textContent = data.current.uvi;
            })
        } else {
            alert("Error: " + response.statusText);
        }
        })
}

var formInputHandler = function(event) {
    event.preventDefault();
    var city = formEl.value.trim();
    current(city);
    daily(city);
    save(city);
}

var save = function(city) {
    cities.unshift(city);
    localStorage.setItem("cities", JSON.stringify(cities));
}

var load = function() {
    cities = JSON.parse(localStorage.getItem("cities"));
    console.log(cities)
    var citiesEl = document.getElementById("cities")
    for (i = 0; i < cities.length; i++) { 
        if (i < 10) {
            var citylist = document.createElement("h5")
            citylist.id = cities[i]
            citylist.textContent = cities[i]
            citiesEl.appendChild(citylist)
        }
    }
}

var weatherBoard = function(data) {
    //city name
    cit.textContent = data.name + " " + data.sys.country;
    //icon
    var iconCode = data.weather[0].icon;
    icon.src = './icons/' + iconCode + '.png'
    //temp
    temp.textContent = data.main.temp + '\u00B0F';
    //humidity
    humid.textContent = data.main.humidity + '%';
    //wind speed
    wind.textContent = data.wind.speed + 'MPH'
}

//five day forecast data taken from 12PM for each day
var fiveDayDash = function(data) {
    console.log(data)
    //Day1 
        var tem1 = document.getElementById("temperature1");
        var hum1 = document.getElementById("humidity1");
        tem1.textContent = "Temperature:";
        hum1.textContent = "Humidity:";
        //date
        var date1 = document.getElementById("date1");
        var date1data = data.list[3].dt_txt.split(" ");
            date1.textContent = date1data[0];
        
        //icon
        var icon1 = document.getElementById("icon1");
        var icon1Code = data.list[3].weather[0].icon;
        icon1.src = './icons/' + icon1Code + '.png';

        //high
        var temp1 = document.getElementById("temp1");
        temp1.textContent = data.list[3].main.temp + '\u00B0F';

        //humidity
        var humid1 = document.getElementById("humid1");
        humid1.textContent = data.list[3].main.humidity + '%';

    //Day2
        var tem2 = document.getElementById("temperature2");
        var hum2 = document.getElementById("humidity2");
        tem2.textContent = "Temperature:";
        hum2.textContent = "Humidity:";
        //date
        var date2 = document.getElementById("date2");
        var date2data = data.list[11].dt_txt.split(" ");
            date2.textContent = date2data[0];
        
        //icon
        var icon2 = document.getElementById("icon2");
        var icon2Code = data.list[11].weather[0].icon;
        icon2.src = './icons/' + icon2Code + '.png';

        //high
        var temp2 = document.getElementById("temp2");
        temp2.textContent = data.list[11].main.temp + '\u00B0F';

        //humidity
        var humid2 = document.getElementById("humid2");
        humid2.textContent = data.list[11].main.humidity + '%';

    //Day3
        var tem3 = document.getElementById("temperature3");
        var hum3 = document.getElementById("humidity3");
        tem3.textContent = "Temperature:";
        hum3.textContent = "Humidity:";
        //date
        var date3 = document.getElementById("date3");
        var date3data = data.list[19].dt_txt.split(" ");
            date3.textContent = date3data[0];
        
        //icon
        var icon3 = document.getElementById("icon3");
        var icon3Code = data.list[19].weather[0].icon;
        icon3.src = './icons/' + icon3Code + '.png';

        //high
        var temp3 = document.getElementById("temp3");
        temp3.textContent = data.list[19].main.temp + '\u00B0F';

        //humidity
        var humid3 = document.getElementById("humid3");
        humid3.textContent = data.list[19].main.humidity + '%';

    //Day4
        var tem4 = document.getElementById("temperature4");
        var hum4 = document.getElementById("humidity4");
        tem4.textContent = "Temperature:";
        hum4.textContent = "Humidity:";
        //date
        var date4 = document.getElementById("date4");
        var date4data = data.list[27].dt_txt.split(" ");
            date4.textContent = date4data[0];
        
        //icon
        var icon4 = document.getElementById("icon4");
        var icon4Code = data.list[27].weather[0].icon;
        icon4.src = './icons/' + icon4Code + '.png';

        //high
        var temp4 = document.getElementById("temp4");
        temp4.textContent = data.list[27].main.temp + '\u00B0F';

        //humidity
        var humid4 = document.getElementById("humid4");
        humid4.textContent = data.list[27].main.humidity + '%';

    //Day5
        var tem5 = document.getElementById("temperature5");
        var hum5 = document.getElementById("humidity5");
        tem5.textContent = "Temperature:";
        hum5.textContent = "Humidity:";
        //date
        var date5 = document.getElementById("date5");
        var date5data = data.list[35].dt_txt.split(" ");
            date5.textContent = date5data[0];
        
        //icon
        var icon5 = document.getElementById("icon5");
        var icon5Code = data.list[35].weather[0].icon;
        icon5.src = './icons/' + icon5Code + '.png';

        //high
        var temp5 = document.getElementById("temp5");
        temp5.textContent = data.list[35].main.temp + '\u00B0F';

        //humidity
        var humid5 = document.getElementById("humid5");
        humid5.textContent = data.list[35].main.humidity + '%';
}

var date = function() {
    const d = new Date();
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    day.textContent = (`${mo} ${da} ${ye}`);
}

searchbtn.addEventListener("click", formInputHandler)
date();
load();