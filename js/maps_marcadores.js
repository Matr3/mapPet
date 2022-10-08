import { listaServices } from "../service/cliente_service.js";
var map;
var marcadoresBuscados = [];
var markers = [];





  
  
function initMap() {
  const obelisco = { lat: -34.6037345, lng: -58.3837591 };

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: obelisco,
    
  });
   // Adds a marker at the center of the map.
  addMarker(obelisco);
   
}
  
 // Adds a marker to the map and push to the array.
function addMarker() {
listaServices
  .listaBuscados()
  .then((data) => {
    data.forEach(({latlgn}) => {
      var lat = latlgn.lat;
      var lng = latlgn.lng; 

      const location = { lat: lat, lng: lng };
      const marker = new google.maps.Marker({
        position: location,
        map: map
      });
      markers.push(marker);
    });
  })
  .catch((error) => alert("Oops! Error. Comuniquese con Matr3"));
  
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);     
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}


window.initMap = initMap;
