document.querySelector("#btnBuscar").addEventListener("click", (evento) => {

  evento.preventDefault();
  const buscador = document.querySelector("#buscadorPrincipal").value;
  if(buscador != ""){
    window.location.href = `buscados_pets.html?buscar=${buscador}`;
  }
  
});
document.querySelector("#buscadorPrincipal").addEventListener("keypress", (evento) => {

  if ((evento.key === "Enter")) {
    evento.preventDefault();
    const buscador = document.querySelector("#buscadorPrincipal").value;
    if(buscador != ""){
      window.location.href = `buscados_pets.html?buscar=${buscador}`;
    }
  }
});