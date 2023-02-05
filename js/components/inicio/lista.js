import Schema from '../../utils/schema.js';

    // Lista es el componente que contiene la vista con todos los productos

class Lista extends Schema {

    methods = {
        // metodo para eliminar un articulo
        eliminarProductoBoton: e =>{
            const id = e.target.value;
            // se crea una lista con los productos excepto el que se va a eliminar
            const listaFiltrada = app.getState().listaProductos.filter(item => item.id != id)
            // se pasa la lista nueva al estado de la aplicacion
            app.setState({listaProductos:listaFiltrada})
            // se actualiza el local storage
            localStorage.setItem('data', JSON.stringify(app.getState().listaProductos))
            alert('Producto Eliminado')

        },
        editarProductoBoton: e =>{
            const id = e.target.value
            // redirige a la vista de editar con la infomacion del producto a editar
            const busqueda = app.getState().listaProductos.filter(item => {
                return item.id == id
            })

            app.setState({editarProducto: busqueda[0]})
             
            app.setState({ruta:'editar'})
        }
    }

    initComponent() {
        // aqui se instancian las variables con los elementos del DOM que se van a utilizar
        this.$botonEliminar = this.shadowDOM.querySelectorAll('.btn-eliminar');
        this.$botonEditar = this.shadowDOM.querySelectorAll('.btn-editar');
        // se agregan los eventos a los botones de eliminar y editar
        for (let i = 0; i < this.$botonEliminar.length; i++) {
            this.$botonEliminar[i].addEventListener("click", this.methods.eliminarProductoBoton);
            this.$botonEditar[i].addEventListener("click", this.methods.editarProductoBoton);
        }
    }

    template() {
        
        // se instancia una variable con la lista de los productos a mostrar
        // si la busqueda esta activa instancia la variable con los resultados de la busqueda
        // de lo contario, se instancia con la lista de todos los productos
        this.listaProductos = app.getState().flagBuscar ? app.getState().listaBusqueda: app.getState().listaProductos;
        // si no se encuentran resultados mustra un mensaje con esa notificacion
        this.mensaje = app.getState().flagBuscar ? 'No se encontraron resultados' : 'No hay Productos registrados';
        this.listaRender = this.listaProductos.map(item => `
            <tr>
                <td>${item.nombre}</td>
                <td>${item.precio}</td>
                <td>${item.cantidad}</td>
                <td>
                    <div class="row">
                        <button class="col mx-2 my-1 btn btn-primary btn-editar btn-sm" value="${item.id}">Editar</button>
                        <button class="col mx-2 my-1 btn btn-danger btn-eliminar btn-sm" value="${item.id}">Eliminar</button>
                    </div>
                </td>
            </tr>
        `).join("")
        this.lista =  `
        <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                ${this.listaRender}
            </tbody>
        </table>

        `;
        // devuelve el codigo HTML del componente que se va a renderizar
        return this.listaRender.length < 1 ? this.mensaje : this.lista
    }

}

export default Lista;