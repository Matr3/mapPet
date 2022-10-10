import { listaServices } from "../service/cliente_service.js";
//backticks
//const busca = "Perdiste tu mascota?";
const encontro = "Encontraste alguna mascota?";
const crearNuevaLinea = (imagen, raza, id) => {
    const linea = document.createElement("div");
    const contenido = `
    <div class="mascotas">
    <a class="link_mascotas" href="./detalle_pets.html?id=${id}&categoria=${raza}">
    <div class="wh_box">
    <div class="bng_box">
    <img class="img" src="${imagen}" alt="${raza}">
    </div>
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


  
const div = document.querySelector("[data-encontrados-all]");

listaServices
  .listaBuscados()
  .then((data) => {
    data.forEach(({ selector, imagen, raza, id}) => {

          if(selector === encontro){
            const nuevaLinea = crearNuevaLinea(imagen, raza, id);
            div.appendChild(nuevaLinea);  
          }
      
    });
  })
  .catch((error) => alert(error));