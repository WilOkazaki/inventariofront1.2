import Schema from '../../utils/schema.js';
    // FormBuscar es el componente que contiene el formulario del producto a buscar

class FormBuscar extends Schema {

    methods = {
		buscarProducto: e => {
			e.preventDefault();
			// se valida si el campo de busqueda esta vacio, de ser cierto se reinicia la data 
            // en el estado correspondiente a la busqueda
			if(this.$inputBuscar.value.trim() == ''){
                app.setState({flagBuscar: false, listaBusqueda:[]})
                return
            }
            // se crea una lista con los elementos que de la lista de productos que coincidan con la busqueda
            const busqueda = app.getState().listaProductos.filter(item => {
                return item.nombre == this.$inputBuscar.value
            })

            // se coloca en el estado que la busqueda esta activa y la lista con los resultados de la busqueda
            app.setState({flagBuscar: true, listaBusqueda:busqueda})

		},

        // boton que lleva al componente de crear producto
        agregarProductoBoton: ()=>{
            app.setState({ruta:'agregar'})
        },
        // funcion para exportar la data a un archivo JSON
        exportarJSONBoton:() => {
            const a = document.createElement("a");
            const archivo = new Blob([JSON.stringify(app.getState().listaProductos)], { type: 'text/plain' });
            const url = URL.createObjectURL(archivo);
            a.href = url;
            a.download = 'data.json';
            a.click();
            URL.revokeObjectURL(url);
        },

        // funcion para importar la data desde un archivo JSON
        importarJSONBoton: async () => {

            try {
                const response = await fetch('data.json');
                const json = await response.json();
                app.setState({listaProductos: json})
                localStorage.setItem('data', JSON.stringify(app.getState().listaProductos))
              } catch (error) {
                alert('asegurese que el archivo JSON se encuentre en la raiz de la carpeta del programa y que tenga un formato correcto')
              }
        }

	
	};

	
	initComponent() {
		// aqui se instancian las variables con los elementos del DOM que se van a utilizar
		this.$agregar = this.shadowDOM.querySelector('#btn-agregar');
		this.$exportar = this.shadowDOM.querySelector('#btn-exportar');
		this.$importar = this.shadowDOM.querySelector('#btn-importar');
		this.$buscar = this.shadowDOM.querySelector('#btn-buscar');
		this.$inputBuscar = this.shadowDOM.querySelector('#input-buscar');
        // se agregan los eventos con los metodos a utilizar
		this.$agregar.addEventListener('click', this.methods.agregarProductoBoton)
		this.$exportar.addEventListener('click', this.methods.exportarJSONBoton)
		this.$importar.addEventListener('click', this.methods.importarJSONBoton)
		this.$buscar.addEventListener('click', this.methods.buscarProducto)
	}

    template() {
        // devuelve la vista del componente 
        return `
        <div class="row text-center">
            <div class="col-sm-12 col-md-3">
                <div class="input-group mb-3 w-100">
                    <input type="text" class="form-control" placeholder="Nombre de Producto" aria-describedby="btn-buscar" id="input-buscar">
                    <button class="input-group-text" id="btn-buscar">Buscar</button>
                </div>
            </div>
            <div class="col-4 col-sm-4 col-md-3"><button id="btn-agregar" class="btn btn-primary">Agregar</button></div>
            <div class="col-4 col-sm-4 col-md-3"><button class="btn btn-primary" id="btn-importar">Importar</button></div>
            <div class="col-4 col-sm-4 col-md-3"><button class="btn btn-primary" id="btn-exportar">Exportar</button></div>
        </div>

        `;
    }
}

export default FormBuscar;