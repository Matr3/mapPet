import {obtenerDatos} from "./login_buscados.js"

export function detalleUsuarios(nombreCompletoAdd,imagenAdd){

    console.log("picture: "+imagenAdd+" //     nombre: "+nombreCompletoAdd);

    
//backticks
const crearUsuario = () => {
    const linea = document.createElement("div");
    const contenido = `
    <div class="user_display">
        <picture>
            <img class="img_user" src="${imagenAdd}" alt="Usuario ${nombreCompletoAdd}" referrerpolicy="no-referrer"/ >
        </picture>
        <div class="content">
            <h1 class="titleUser">${nombreCompletoAdd}</h1>
            <a class="btCuenta" href="./usuario_pets.html"><sapn class="miCuenta">Mi Cuenta</span></a>
        </div>
    </div>
        `;

        linea.innerHTML = contenido;

        return linea;
    };
    const div = document.querySelector("[data-usuario]");




        const nuevaLinea1 = crearUsuario();
        div.appendChild(nuevaLinea1).className = "user_detalles";

   
}
