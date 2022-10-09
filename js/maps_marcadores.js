import { listaServices } from "../service/cliente_service.js";
var map;
var markers = [];
/*const infoContent = "../img/paw-solid.svg";*/

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
      data.forEach(({ id, raza, latlgn ,imagen }) => {
        var lat = latlgn.lat;
        var lng = latlgn.lng;
        
        const contentString =`
        <div>
        <a class="link_mascotas" href="./detalle_pets.html?id=${id}&categoria=${raza}">
        
        <div class="bng_box">
        <img class="img_mascotaMap" src="${imagen}" alt="${raza}">
        </div>
        
        <div>
          <ul class="detalles_tarjeta">
            <li class="descripcion">${raza}</li>
            <li>Mas detalles</li>
          </ul>   
        </div>
        </a>
        </div>
        `;

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
        });

        const location = { lat: lat, lng: lng };
        const marker = new google.maps.Marker({
          position: location,
          content: contentString,
          /*icon: infoContent,*/
          map: map
        });
        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
          });
        });
      
        markers.push(marker);
      });
    })
    .catch((error) => alert("Oops! Error. Comuniquese con Matr3"));

}

window.initMap = initMap;
