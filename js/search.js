//Items
const itemCtrl = (function () {



  //metodos publicos
  return {
    buscarComida: async function (comida) {
      try {
        const res = await fetch(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${comida}`);
        const data = await res.json();
        return data;
      } catch (error) {
        alert(error);
      }

    }
  }
})();

//UI
const uiCtrl = (function () {
  const selectors = {
    navBar: '#nav-bar',
    resultados: '#resultados',
    btnBuscar: '#btnBuscar',
    btnSuperior: '#btn-top',
    barraBusqueda: '#buscadorPrincipal',
    barraBusquedaSup: '#buscador-top',
    cargando: '#cargando',
    containerPrincipal: '.container',
    contenedorResultados: '.contenedor',
    logo: '#logo'
  }

  return {
    obtenerSelectors: function () {
      return selectors;
    },
    esconderNav: function () {
      document.querySelector(selectors.navBar).style.display = 'none';
    },
    esconderCargando: function () {
      document.querySelector(selectors.cargando).style.display = 'none';
    },
    esconderResultados: function () {
      document.querySelector(selectors.resultados).style.display = 'none';
    },
    cargando: function () {
      document.querySelector(selectors.containerPrincipal).style.display = 'none';
      document.querySelector(selectors.cargando).style.display = 'flex';
    },
    mostrarResultados: function (resultados) {
      //si no se encuentran los resultados mostrar mensaje
      if (resultados.length === 0) {
        document.querySelector(selectors.contenedorResultados).insertAdjacentHTML('beforeend', `<h2 id="noresult">No se encontraron resultados.</h2>`);
        //esconde icono cargando
        this.esconderCargando();
        //muestra resultados
        document.querySelector(selectors.navBar).style.display = 'flex';
        document.querySelector(selectors.resultados).style.display = 'flex';

      }
      let html = '';
      //recorre array de recetas
      resultados.forEach(receta => {
        let foto;
        //si la receta no tiene foto le agrega una por defecto
        receta.thumbnail === '' ? foto = 'https://lh4.googleusercontent.com/NrCn9jfylokL7q897m8AkKGfwf09s0pEJZYQoFSorbguWLZR8HSif0JZ5r57O72AZ6IRmCeAHpxbcWJzbWf4=w1366-h657-rw' : foto = receta.thumbnail;
        html += `
        <div class="comida">
          <img src="${foto}" id="thumbnail">
          <p class="titulo">${receta.title}</p>
          <a href="${receta.href}" target="_blank" class="btn-externo">Ver Receta</a>
        </div>
        `;
      });
      //adjunta html al contenedor
      document.querySelector(selectors.contenedorResultados).insertAdjacentHTML('beforeend', html);
      //esconde icono cargando
      this.esconderCargando();
      //muestra resultados
      document.querySelector(selectors.navBar).style.display = 'flex';
      document.querySelector(selectors.resultados).style.display = 'flex';

    },
    mostrarResultadosSuperior: function (resultados) {
      //si no se encuentran los resultados mostrar mensaje
      if (resultados.length === 0) {
        document.querySelector(selectors.contenedorResultados).insertAdjacentHTML('beforeend', `<h2 id="noresult">No se encontraron resultados.</h2>`);
        //esconde icono cargando
        this.esconderCargando();
        //muestra resultados
        document.querySelector(selectors.resultados).style.display = 'flex';

      }
      let html = '';
      //recorre array de recetas
      resultados.forEach(receta => {
        let foto;
        //si la receta no tiene foto le agrega una por defecto
        receta.thumbnail === '' ? foto = 'https://lh4.googleusercontent.com/NrCn9jfylokL7q897m8AkKGfwf09s0pEJZYQoFSorbguWLZR8HSif0JZ5r57O72AZ6IRmCeAHpxbcWJzbWf4=w1366-h657-rw' : foto = receta.thumbnail;
        html += `
        <div class="comida">
          <img src="${foto}" id="thumbnail">
          <p class="titulo">${receta.title}</p>
          <a href="${receta.href}" target="_blank" class="btn-externo">Ver Receta</a>
        </div>
        `;
      });
      //adjunta html al contenedor
      document.querySelector(selectors.contenedorResultados).insertAdjacentHTML('beforeend', html);
      //esconde icono cargando
      this.esconderCargando();
      //muestra resultados
      document.querySelector(selectors.resultados).style.display = 'flex';
    },
    mostrarMenuPrincipal: function () {
      document.querySelector(selectors.containerPrincipal).style.display = 'flex';
    },
    limpiarResultados: function () {
      document.querySelector(selectors.contenedorResultados).innerHTML = '';
    },
    obtenerInputComida: function (barraBusqueda) {
      const input = document.querySelector(barraBusqueda).value;
      return input;
    }
  }
})();

//APP
const app = (function (itemCtrl, uiCtrl) {
  //Recibir DOM selectors
  const selectors = uiCtrl.obtenerSelectors();

  //Cargar eventListeners
  function cargarListeners() {

    //evento buscar comida boton
    document.querySelector(selectors.btnBuscar).addEventListener('click', buscaComida);

    //evento buscar comida enter barra principal
    document.querySelector(selectors.barraBusqueda).addEventListener('keypress', buscarComidaEnter);

    //evento buscar comida boton superior
    document.querySelector(selectors.btnSuperior).addEventListener('click', buscaComidaSuperior);

    //evento buscar comida enter barra superior
    document.querySelector(selectors.barraBusquedaSup).addEventListener('keypress', buscaComidaSuperiorEnter);

    //evento click logo
    document.querySelector('body').addEventListener('click', volverMenuPrincipal);
  }

  //Busca comida Buscador Principal
  const buscaComida = e => {
    //obtener input
    const input = uiCtrl.obtenerInputComida(selectors.barraBusqueda);
    //si el input no está vacio buscar comida
    if (input !== '') {
      //cargar icono loading.gif
      uiCtrl.cargando();
      //fetch API y mostrar resultados cuando los reciba
      itemCtrl.buscarComida(input).then(res => uiCtrl.mostrarResultados(res.results));
      //limpiar input
      document.querySelector(selectors.barraBusqueda).value = '';
    }

    e.preventDefault();
  };

  //Busca comida Buscador Principal ENTER
  const buscarComidaEnter = e => {
    if (e.keyCode === 13) {
      //obtener input
      const input = uiCtrl.obtenerInputComida(selectors.barraBusqueda);
      //si el input no está vacio buscar comida
      if (input !== '') {
        e.preventDefault();
        //cargar icono loading.gif
        uiCtrl.cargando();
        //fetch API y mostrar resultados cuando los reciba
        itemCtrl.buscarComida(input).then(res => uiCtrl.mostrarResultados(res.results));
        //limpiar input
        document.querySelector(selectors.barraBusqueda).value = '';
      }

    }
  };

  //Buscar comida boton superior
  const buscaComidaSuperior = e => {
    //obtener input
    const input = uiCtrl.obtenerInputComida(selectors.barraBusquedaSup);
    //si el input no está vacio buscar comida
    if (input !== '') {
      //limpiar resultados anteriores
      uiCtrl.limpiarResultados();
      //ocultar resultados
      uiCtrl.esconderResultados();
      //cargar icono loading.gif
      uiCtrl.cargando();
      //fetch API y mostrar resultados cuando los reciba
      itemCtrl.buscarComida(input).then(res => uiCtrl.mostrarResultadosSuperior(res.results));
      //limpiar input
      document.querySelector(selectors.barraBusquedaSup).value = '';
    }

    e.preventDefault();

  };

  //buscar comida barra superior enter
  const buscaComidaSuperiorEnter = e => {
    if (e.keyCode === 13) {
      //obtener input
      const input = uiCtrl.obtenerInputComida(selectors.barraBusquedaSup);
      //si el input no está vacio buscar comida
      if (input !== '') {
        e.preventDefault();
        //limpiar resultados anteriores
        uiCtrl.limpiarResultados();
        //ocultar resultados
        uiCtrl.esconderResultados();
        //cargar icono loading.gif
        uiCtrl.cargando();
        //fetch API y mostrar resultados cuando los reciba
        itemCtrl.buscarComida(input).then(res => uiCtrl.mostrarResultadosSuperior(res.results));
        //limpiar input
        document.querySelector(selectors.barraBusquedaSup).value = '';
      }

    }


  };

  const volverMenuPrincipal = e => {
    if (e.target.className === 'logo') {
      //limpiar resultados
      uiCtrl.limpiarResultados();
      //esconder nav
      uiCtrl.esconderNav();
      //esconder resultados
      uiCtrl.esconderResultados();
      //mostrar menu principal
      uiCtrl.mostrarMenuPrincipal();
    }
  }

  //metodos publicos
  return {
    init: function () {
      //esconder nav y resultados
      uiCtrl.esconderNav();
      uiCtrl.esconderResultados();
      uiCtrl.esconderCargando();



      //cargar listeners
      cargarListeners();
    }
  }

})(itemCtrl, uiCtrl);

app.init();