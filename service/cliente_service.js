//Fetch API
const url = "https://62faaedbffd7197707f152a5.mockapi.io/pets";
const url1 = "https://62faaedbffd7197707f152a5.mockapi.io/user";

const listaBuscados = () => fetch("https://62faaedbffd7197707f152a5.mockapi.io/pets").then((respuesta) => respuesta.json()).catch((error) => error);

const listaEncontrados = () => fetch("https://62faaedbffd7197707f152a5.mockapi.io/pest_encontrados").then((respuesta) => respuesta.json()).catch((error) => error);

const listaUsuarios = () => fetch("https://62faaedbffd7197707f152a5.mockapi.io/user").then((respuesta) => respuesta.json()).catch((error) => error);

const crearBusqueda = (imagen, animal, color, descripcion,tamanio,email) => {
    //console.log(imagen, categoria, nombre_prod, precio_prod, descripcion_prod)
    return fetch((`${url}`),{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            imagen,
            animal,
            color,
            descripcion,
            tamanio,
            email
      
        })
    })
}

const crearUsuario = (email, nombre, apellido, nombreCompleto, imagen) => {
    console.log(email, nombre, apellido, nombreCompleto, imagen)
    return fetch((`${url1}`),{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            email,
            nombre,
            apellido,
            nombreCompleto,
            imagen
      
        })
    })
}

const eliminarCliente = (id) =>{
    console.log("eliminar a", id)
    return fetch(`https://62faaedbffd7197707f152a5.mockapi.io/prod/${id}`, {
        method: "DELETE"
    })
}

const detallePets = (id) =>{
    return fetch(`https://62faaedbffd7197707f152a5.mockapi.io/pets/${id}`)
    .then( (respuesta) => respuesta.json())
}

const actualizarProducto = (imagen, categoria, nombre_prod, precio_prod, descripcion_prod,id) =>{
    return fetch(`https://62faaedbffd7197707f152a5.mockapi.io/prod/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({imagen, categoria, nombre_prod, precio_prod, descripcion_prod})
    })
    .then( (respuesta) => respuesta)
    .catch( (err) => console.log(err));
}

export const clientServices = {
    //listaClientes,
 
    
    eliminarCliente,
    
}
export const listaServices = {
    eliminarCliente,
    listaEncontrados,
    listaBuscados,
    crearBusqueda,
    actualizarProducto,
    detallePets
}
export const listaClientes = {
    crearUsuario,
    listaUsuarios
}
