import { listaServices } from "../service/cliente_service.js";
//backticks
const crearNuevaLinea = (imagen, raza, descripcion, latlgn, id) => {
    const linea = document.createElement("div");
    
    const contenido = `
    <div class="mascotas">
    <a class="link_mascotas" href="./detalle_pets.html?id=${id}&categoria=${raza}">
    <div class="bng_box">
    <img class="img" src="${imagen}" alt="${raza}">
    </div>
    <div>
      <ul class="detalles_tarjeta">
        <li class="descripcion">${raza}</li>
        <li class="ubicacion">${latlgn}</li>
        <li>Mas detalles</li>
      </ul>   
    </div>
    </a>
 </div>
    `;
    linea.innerHTML = contenido;
  
    return linea;
  };

  
const div = document.querySelector("[data-buscados]");
let cont_b = 0;
listaServices
  .listaBuscados()
  .then((data) => {
    data.forEach(({ imagen, raza, descripcion, latlgn, id}) => {
      if (cont_b < 6){
        const nuevaLinea = crearNuevaLinea(imagen, raza, descripcion, latlgn, id);
        div.appendChild(nuevaLinea);
        cont_b++;
      }
    });
  })
  .catch((error) => alert("Oops! Error. Comuniquese con Matr3"));