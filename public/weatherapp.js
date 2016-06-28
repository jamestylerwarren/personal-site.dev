(function() {
"use strict";
		//------------Map Rendering------------//
	var marker;
	function setMap() {
		var map = new google.maps.Map(document.getElementById("map"), {
			zoom: 4,
			center: {
				lat: 29.426791,
				lng: -98.489602
			},
			styles: [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]
			});
		marker = new google.maps.Marker({
			position: map.center,
			map: map,
			draggable: true,
			icon: 'img/pin.png'
		});
		marker.addListener('dragend',function(event) {
		getWeather();
        });
	}; setMap();

	//---------Weather Forecast----------//
	function getWeather() {
		$.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
			APPID: "6591e56be16ed754b9738e7806c46382",
			lat: marker.getPosition().lat(),
			lon: marker.getPosition().lng(),
			units: "imperial",
			cnt: 3
		}).done(function(weatherData) {
			weatherData.list.forEach( function (forecast, i){
			var maxTemp = forecast.temp.max;
			var minTemp = forecast.temp.min;
			var icon ='<img src="http://openweathermap.org/img/w/'+forecast.weather[0].icon+'.png"';
			var description = forecast.weather[0].description;
			var humidity = forecast.humidity;
			var speed = forecast.speed;
			var pressure = forecast.pressure;
			$('#dayForecast' + i).html(maxTemp + '° / ' + minTemp + '°<br>' + icon + '<br><br>' + description + '<br><br>Humidity: ' + humidity + ' %<br>Wind Speed: ' + speed + ' mph<br>Pressure: ' + pressure);
			});
		});
	}; getWeather();


	


	




	
	





})();