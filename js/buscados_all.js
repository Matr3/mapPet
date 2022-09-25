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
      <ul>
        <li class="descripcion">${descripcion}</li>
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

listaServices
  .listaBuscados()
  .then((data) => {
    data.forEach(({ imagen, raza, descripcion, latlgn, id}) => {
      const nuevaLinea = crearNuevaLinea(imagen, raza, descripcion, latlgn, id);
      div.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Oops! Error. Comuniquese con Matr3"));