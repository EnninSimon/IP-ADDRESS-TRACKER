mapboxgl.accessToken = 'pk.eyJ1IjoiZW5uaW4tc2ltb24iLCJhIjoiY2tqdjNycXlzMDRzNjJwbDdzN20xZGwxeCJ9.4iQpygdTEx3qnOuwmxeMJg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());


var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  unit: 'metric',
  profile: 'mapbox/cycling'
});

let inputValue = document.getElementById('mybar')

map.addControl(directions, 'top-left');

map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true,
  showUserHeading: true
}));

map.addControl(new mapboxgl.FullscreenControl({container: document.querySelector('body')}));

//-----------------------------------------//

//Add api
const apiUrl = 'https://geo.ipify.org/api/v2/country?apiKey=at_XGn4k6pJquxPqauEaqQYMZEoVhkKI&ipAddress=8.8.8.8'
async function getIpAddress() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data)


  //Seting the api in the ui
  const { ip, isp } = data;
  document.getElementById('ipAddress').textContent = ip;
  document.getElementById('isp').textContent = isp;
  document.getElementById('country').textContent = data.location.country;
  document.getElementById('region').textContent = data.location.region;
  document.getElementById('timezone').textContent = data.location.timezone;

}
getIpAddress();

// fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_XGn4k6pJquxPqauEaqQYMZEoVhkKI&ipAddress=8.8.8.8`)
//   .then(res => res.json())
//   .then(
//     data => console.log(data)
//   )
//   .catch(error => console.log(error))

