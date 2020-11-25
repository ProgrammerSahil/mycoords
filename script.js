		var x;

		function getTargetWeather(targetElm){
			x = document.getElementById(targetElm);
			getLocation();
		}
		
		function getLocation() {
  			if (navigator.geolocation) {
    		navigator.geolocation.getCurrentPosition(showPosition);
  				} else {
    			x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

		function showPosition(position) {
				  		x.innerHTML = "Lat: " + position.coords.latitude +
				  		"   Lon: " + position.coords.longitude;
		}


		function copyCoords(){
			var copyText = document.getElementById("demo");
			copyText.select();
			copyText.setSelectionRange(0, 99999);
			document.execCommand("copy");
		}


$(document).ready(function(){
	getTargetWeather("demo");
});
