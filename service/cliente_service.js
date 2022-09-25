//Fetch API
const url = "https://62faaedbffd7197707f152a5.mockapi.io/pets";

const listaBuscados = () => fetch("https://62faaedbffd7197707f152a5.mockapi.io/pets").then((respuesta) => respuesta.json()).catch((error) => error);

const listaEncontrados = () => fetch("https://62faaedbffd7197707f152a5.mockapi.io/pest_encontrados").then((respuesta) => respuesta.json()).catch((error) => error);

const crearCliente = (imagen, categoria, nombre_prod, precio_prod, descripcion_prod) => {
    console.log(imagen, categoria, nombre_prod, precio_prod, descripcion_prod)
    return fetch((`${url}`),{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            imagen,
            categoria,
            nombre_prod,
            precio_prod,
            descripcion_prod
      
        })
    })
}

const eliminarCliente = (id) =>{
    console.log("eliminar a", id)
    return fetch(`https://62faaedbffd7197707f152a5.mockapi.io/prod/${id}`, {
        method: "DELETE"
    })
}

const detalleProducto = (id) =>{
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
    crearCliente,
    actualizarProducto,
    detalleProducto
}