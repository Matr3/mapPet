import {listaServices} from "../service/cliente_service.js"
import {lat} from "../js/maps_buscados.js";
import { lng } from "../js/maps_buscados.js";




/*Muestra la imagen seleccionada para agregar en el nuevo producto
y deja la URL del archivo para usar luego*/

const btnAgregarImagen = document.querySelector(".agregar__imagen");

let imagen = "";

btnAgregarImagen.addEventListener('change', cargar);

function cargar(ev) {
    var arch = new FileReader();
    arch.readAsDataURL(ev.target.files[0]);
    /*imagen = ev.target.files[0];*/
    arch.addEventListener('load',leer);
}

function leer(ev) {
    document.getElementById('box__imagen').style.backgroundImage = "url('" + ev.target.result + "')";
    imagen = ev.target.result;
    document.querySelector(".archivo__faltante").parentElement.classList.remove("input__invalido");
}


/*Submit del formulario de cargar nuevo producto.
Chequeo que tenga el archivo de foto seleccionado*/
const formAgregarProducto = document.querySelector(".formulario_contenedor");

formAgregarProducto.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if(!imagen){
        
        document.querySelector(".archivo__faltante").parentElement.classList.add("input__invalido");

    }else{
        var fecha = Date();
        const nombreUser = document.querySelector(".raza_detalles").textContent;
        const selectorBusqueda = document.querySelector("[data-tipo=selector]");
        const selector = selectorBusqueda.options[selectorBusqueda.selectedIndex].text;
        const raza = document.querySelector("[data-tipo=animal]").value;
        const color = document.querySelector("[data-tipo=color]").value;
        const tamanio = document.querySelector("[data-tipo=tamanio]").value;
        const descripcion = document.querySelector("[data-tipo=descripcion]").value;
        const email = document.querySelector("[data-tipo=email]").value;
        const latlgn = {lat: lat, lng: lng};

        listaServices
        .crearBusqueda(selector,imagen, raza, color, descripcion,tamanio,email,latlgn,fecha,nombreUser)
        .then((respuesta) => {
             //window.location.href = "productos.html?nombre=document.querySelector(".raza_detalles").textContent";
        }).catch((error) => console.log(error));

    }
});