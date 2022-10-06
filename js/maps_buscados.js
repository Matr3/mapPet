var map;
export var lat = " ";
export var lng = " ";  
var markers = [];
//var markers_buscado = {lat: lat, lng: lng} ;


function initMap() {
    const obelisco = { lat: -34.6037345, lng: -58.3837591 };

    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: obelisco,
      
    });
    
    // This event listener will call addMarker() when the map is clicked.
    map.addListener('click', function(event) {
      lat = event.latLng.lat();
      lng = event.latLng.lng();
      guardarMarker(lat,lng)
      deleteMarkers();
      addMarker(event.latLng);
      
      
      
    });
    //console.log(markers_buscado)
    
    // Adds a marker at the center of the map.
    addMarker(obelisco);
    
  }
  
function guardarMarker(lat,lng){
        lat = lat;
        lng = lng;
      console.log(lat, lng)
    }
    
   // Adds a marker to the map and push to the array.
 function addMarker(location) {
    
    const marker = new google.maps.Marker({
      position: location,
      map: map
    });
    //console.log();
    markers.push(marker);
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

  // Deletes all markers in the array by removing references to them.
  function deleteMarkers() {
    clearMarkers();
    markers = [];
  }


 

window.initMap = initMap;
