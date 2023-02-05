const d = document;
const ROUTER = new Router(PATHS);

let data = [];
// se verifica si hay datos en el local storage para pasarlos al estado de la aplicacion
if(localStorage.getItem('data')){
    data = JSON.parse(localStorage.getItem('data'));
}

const app = new Component({
    el: '#app',
    data: {
        ruta:'home',        // define la ruta
        listaProductos:data, //lista con los productos
        flagBuscar: false,  //variable para saber si la busqueda esta activa
        listaBusqueda:[],   //lista con los elementos de la busqueda
        editarProducto:{}   //objeto con la informacion del producto a editar

    },
    template: function (){
        // se cargan las vistas de las rutas con las vistas
        return ROUTER.load(app.getState().ruta);
    }
})


d.addEventListener("DOMContentLoaded", app.render());