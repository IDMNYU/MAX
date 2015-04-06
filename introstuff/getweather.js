outlets = 6;

var ajaxreq;
var thestuff;

var city_str = "New%20York%20";
//var city_str = "San%20Francisco%20";

var request_str_begin = "http://api.openweathermap.org/data/2.5/weather?q=";
var request_str_end = " USA&APPID=438d69f163d37b4d640fdaf800aac762";

function search(s)
{
		city_str = s.replace(/ /g, "%20") + "%20";
		bang();
}


function bang()
{
	//create a XMLHttpRequest object
	ajaxreq = new XMLHttpRequest();
	//set the HTTP message to be sent (usually a special formatted URL)
	ajaxreq.open("GET",request_str_begin+city_str+request_str_end);
	//set the callback function
	ajaxreq.onreadystatechange = gotstuff;
	//send the request
	ajaxreq.send();	
}

function gotstuff()
{
	//post(ajaxreq.response);
	//post("\n");
	thestuff = JSON.parse(ajaxreq.response);
	outlet(5, thestuff.weather[0].description);
	outlet(4, thestuff.wind.speed);
	outlet(3, thestuff.main.humidity);
	outlet(2, thestuff.main.temp_max);
	outlet(1, thestuff.main.temp_min);
	outlet(0, thestuff.main.temp);

	
}