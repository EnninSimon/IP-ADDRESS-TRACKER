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

map.addControl(directions, 'top-left');