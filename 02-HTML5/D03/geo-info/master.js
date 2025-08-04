window.addEventListener('load', function () {
    mymap = this.document.getElementById('mymap');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getposition, errorhandler);
    } else {
        // not available
        mymap.innerText = "Sorry , Update and try again !!!";
    }
});//end of load
  
function drawMap() {
    var location = new google.maps.LatLng(lat, lon);
    //2- specify specs of map : zoom : , center
    var specs = { zoom: 17, center: location };
    // 3 retrive map and display map
    new google.maps.Map(mymap, specs); 
}

function getposition(e) {
    console.log(e)
    lat = e.coords.latitude;
    lon = e.coords.longitude; 
    time = new Date(e.timestamp);
}

function errorhandler(e) {
    console.log("Error");
}

function getDetailsfun() {

    latDiv = document.createElement('div');
    latDiv.classList.add('details');
    latDiv.innerHTML = `<h3> latitude </h3> <p>${lat}</p>`;

    lonDiv = document.createElement('div');
    lonDiv.classList.add('details');
    lonDiv.innerHTML = `<h3> longitude </h3> <p>${lon}</p>`;

    timeDiv = document.createElement('div');
    timeDiv.classList.add('details');
    timeDiv.innerHTML = `<h3> Time </h3> <p>${time}</p>`;

    mymap.innerHTML = ''

    mymap.appendChild(latDiv)
    mymap.appendChild(lonDiv)
    mymap.appendChild(timeDiv)


}