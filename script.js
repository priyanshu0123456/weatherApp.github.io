
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '525edcebb3msh3ac36b669fadde2p1ecc4bjsn6cee55d29f6d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			cloud_pct.innerHTML = response.cloud_pct;
			feels_like.innerHTML = response.feels_like;
			humidity.innerHTML = response.humidity;
			min_temp.innerHTML = response.min_temp;
			max_temp.innerHTML = response.max_temp;
			wind_speed.innerHTML = response.wind_speed;
			wind_degrees.innerHTML = response.wind_degrees;
			sunrise.innerHTML = response.sunrise;
			sunset.innerHTML = response.sunset;

			console.log(response)
		})

		.catch(err => console.error(err));
}


submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
    document.getElementById("cityname").innerHTML = city.value ;
})

getWeather("Delhi");

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Deoria', options)
	.then(response => response.json())
	.then(response => {
		cloud_pct1.innerHTML = response.cloud_pct;
		feels_like1.innerHTML = response.feels_like;
		humidity1.innerHTML = response.humidity;
		min_temp1.innerHTML = response.min_temp;
		max_temp1.innerHTML = response.max_temp;
		wind_speed1.innerHTML = response.wind_speed;
		// wind_degrees1.innerHTML = response.wind_degrees;
		sunrise1.innerHTML = response.sunrise;
		sunset1.innerHTML = response.sunset;

		console.log(response)
	})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kushinagar', options)
	.then(response => response.json())
	.then(response => {
		cloud_pct2.innerHTML = response.cloud_pct;
		feels_like2.innerHTML = response.feels_like;
		humidity2.innerHTML = response.humidity;
		min_temp2.innerHTML = response.min_temp;
		max_temp2.innerHTML = response.max_temp;
		wind_speed2.innerHTML = response.wind_speed;
		// wind_degrees2.innerHTML = response.wind_degrees;
		sunrise2.innerHTML = response.sunrise;
		sunset2.innerHTML = response.sunset;

		console.log(response)
	})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=gorakhpur' ,options)
	.then(response => response.json())
	.then(response => {
		cloud_pct3.innerHTML = response.cloud_pct;
		feels_like3.innerHTML = response.feels_like;
		humidity3.innerHTML = response.humidity;
		min_temp3.innerHTML = response.min_temp;
		max_temp3.innerHTML = response.max_temp;
		wind_speed3.innerHTML = response.wind_speed;
		// wind_degrees3.innerHTML = response.wind_degrees;
		sunrise3.innerHTML = response.sunrise;
		sunset3.innerHTML = response.sunset;

		console.log(response)
	})

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jamshedpur' ,options)
	.then(response => response.json())
	.then(response => {
		cloud_pct4.innerHTML = response.cloud_pct;
		feels_like4.innerHTML = response.feels_like;
		humidity4.innerHTML = response.humidity;
		min_temp4.innerHTML = response.min_temp;
		max_temp4.innerHTML = response.max_temp;
		wind_speed4.innerHTML = response.wind_speed;
		// wind_degrees4.innerHTML = response.wind_degrees;
		sunrise4.innerHTML = response.sunrise;
		sunset4.innerHTML = response.sunset;

		console.log(response)
	})
