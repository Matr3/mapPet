var map;
var markers = [];

function initMap() {
    const obelisco = { lat: -34.6037345, lng: -58.3837591 };

    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: obelisco,
    });

    // This event listener will call addMarker() when the map is clicked.
    map.addListener('click', function(event) {
      deleteMarkers();
      addMarker(event.latLng);
      console.log(event.latLng)
    });

    // Adds a marker at the center of the map.
    addMarker(obelisco);
  }

   // Adds a marker to the map and push to the array.
  function addMarker(location) {
    const marker = new google.maps.Marker({
      position: location,
      map: map
    });
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