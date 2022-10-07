import { listaServices } from "../service/cliente_service.js";
//backticks

const crearNuevaLinea = (imagen, raza, descripcion, id) => {
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
        <li>Mas detalles</li>
      </ul>   
    </div>
    </a>
 </div>
    `;
    linea.innerHTML = contenido;
  
    return linea;
  };

  
const div = document.querySelector("[data-buscados-all]");

listaServices
  .listaBuscados()
  .then((data) => {
    data.forEach(({ imagen, raza, descripcion, id}) => {
        
        const nuevaLinea = crearNuevaLinea(imagen, raza, descripcion, id);
        div.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Oops! Error. Comuniquese con Matr3"));