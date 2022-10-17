import { listaServices } from "../service/cliente_service.js";
import {lat} from "../js/maps_buscados.js";
import { lng } from "../js/maps_buscados.js";

const url = new URL (window.location);
const id = url.searchParams.get("id");

var fecha = Date();

const selector = document.querySelector("[data-tipo=selector]");
const raza = document.querySelector("[data-tipo=animal]");
const color = document.querySelector("[data-tipo=color]");
const tamanio = document.querySelector("[data-tipo=tamanio]");
const descripcion = document.querySelector("[data-tipo=descripcion]");
const email = document.querySelector("[data-tipo=email]");

const imagenDiv = document.querySelector(".agregar__imagen-div");

let fileImagen = "";

        const obtenerPets = () => {

            if(id === null){
                console.log("error")
            }
            
            listaServices.detallePets(id)
                .then((pets) => {
                    console.log(id)
                    /*cargo todos los input*/
                    selector.text = pets.selector;
                    raza.value = pets.raza;
                    color.value = pets.color;
                    tamanio.value = pets.tamanio;
                    descripcion.value = pets.descripcion;
                    email.value = pets.email;
                    imagenDiv.style.backgroundImage = `url("${pets.imagen}")`;
                    fileImagen = pets.imagen;
                    
                    /*pongo un escuchador en el boton de carga
                    de imagen para su modificacion*/
                    const btnAgregarImagen = document.querySelector(".agregar__imagen");
                    
                    btnAgregarImagen.addEventListener('change', cargar);
                    function cargar(ev) {
                        var arch = new FileReader();
                        
                        arch.readAsDataURL(ev.target.files[0]);
                        arch.addEventListener('load',leer);
                    }
                    function leer(ev) {
                        document.getElementById('box__imagen').style.backgroundImage = "url('" + ev.target.result + "')";
                        fileImagen = ev.target.result;
                        document.querySelector(".archivo__faltante").parentElement.classList.remove("input__invalido");
                    }
                    
                }).catch((error) => console.log(error));
        };
        obtenerPets();

        document.querySelector(".formulario_contenedor").addEventListener("submit", (evento) => {
            evento.preventDefault();
            modificarPets();
        });
        
        
        const modificarPets = async () => {
        
            try{
                const latlgn = {lat: lat, lng: lng};
                    console.log(latlgn);
                const modificado = await listaServices.actualizarPets
                (fileImagen,selector.text,raza.value,color.value,tamanio.value,descripcion.value,email.value,fecha,latlgn,id)
                console.log("antes");
                window.location.href =("usuario_pets.html");
                console.log("despues")
        
            }catch(error){
                console.log(error)
            }
        }

        