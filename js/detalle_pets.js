import { listaServices } from "../service/cliente_service.js";

const url = new URL(window.location);
const id = url.searchParams.get("id");

//backticks
const crearNuevaLinea = (imagen, raza, color, descripcion) => {
    const linea = document.createElement("div");

    const contenido = `
    <div>
        <img class="img_producto" src="${imagen}" alt="Imagen del Producto ${raza}">
    </div>
    <div class="detalles">
        <h1 class="raza">${raza}</h1>
        <h5 class="color">${color}</h5>
        <p class="descripcion">${descripcion}</p>
    </div>
    `;

    linea.innerHTML = contenido;

    return linea;
};


const div = document.querySelector("[data-detalle]");


listaServices
    .detalleProducto(id)
    .then((data) => {

        const nuevaLinea = crearNuevaLinea(data.imagen, data.raza, data.color, data.descripcion);
        div.appendChild(nuevaLinea);

    })
    .catch((error) => alert("Oops! Error. Comuniquese con Matr3"));