var xhr = new XMLHttpRequest(); 
var requestUrl = "https://api.restful-api.dev/objects/4"; 
xhr.open("GET", requestUrl, true); 
xhr.onload = function(){     console.log(xhr.responseText);     // Handle data 
}; 
xhr.send();