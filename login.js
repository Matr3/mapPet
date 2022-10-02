import {listaClientes} from "./service/cliente_service.js";


var dato1 = {};

    //Funcion capturar datos
    function obtenerDatos() {

      const email = dato1.email;
      const nombre = dato1.given_name;
      const apellido = dato1.family_name;
      const nombreCompleto = dato1.name;
      const imagen = dato1.picture;
      console.log(email + " " + nombre + " " + apellido + " " + nombreCompleto + " " + imagen);
      listaClientes
        .crearUsuario(email, nombre, apellido, nombreCompleto, imagen)
        .then((respuesta) => {
            //console.log(respuesta)
            //console.log(imagen, categoria, nombre_prod, precio_prod, descripcion_prod)
            window.location.href ="productos.html"
        }).catch((error) => console.log(error));
    }

    //Funcion usada de https://es.stackoverflow.com/
    function parseJwt(token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      dato1 = JSON.parse(jsonPayload);
      return JSON.parse(jsonPayload);
    };

    function handleCredentialResponse(response) {
      console.log("Encoded JWT ID token: " + response.credential);
      console.log(JSON.stringify(parseJwt(response.credential)));
      obtenerDatos();

    }
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: "404534087235-cn6uhb4iiua6vjg91orae16aq4qij8ad.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    }

   

