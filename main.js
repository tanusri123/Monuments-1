let latitude = 22.7868542, longitude = 88.3643296;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoidGFudXNyaSIsImEiOiJjbDF4aXFheWwwMzRyM2ltenBqenVqM3RlIn0.5XoeImaDzt5hdhTliVSk0Q'

var map = new mapboxgl.Map({
    container:"map",
    style: "mapbox://styles/mapbox/streets-vll",
    center:[longitude,latitude],
    zoom:4
})

var img1 = document.querySelector('#amber')

//Create a Amber Palace,Jaipur Marker and add it to map
var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.85133,26.98547])
.addTo(map)

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
)