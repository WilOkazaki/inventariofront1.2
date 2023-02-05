import Schema from '../../utils/schema.js';


    // FormularioAgregar es el componente que contiene el formulario donde se van a estar creando los productos

class FormularioAgregar extends Schema {

    methods = {

		guardaProducto: e => {
			e.preventDefault();

            // se evalua que los campos no vengan vacios
            if(this.$nombre.value.trim() == '' ||
               this.$precio.value.trim() == '' ||
               this.$cantidad.value.trim() == ''){
                return alert('debe llenar todos los campos');
            }
            // se evalua que los campos de precio y cantidad sean números
            if(isNaN(this.$precio.value) ||
               isNaN(this.$cantidad.value)){
                return alert('los campos precio y cantidad deben ser numeros');
            }

            // se crea el objeto producto asignandole un id y los datos obtenidos del formulario
			const producto = {
                id: Math.floor(Math.random()*100000000),
                nombre: this.$nombre.value,
                precio: this.$precio.value,
                cantidad: this.$cantidad.value
            }
            // se agrega el nuevo producto en el estado de la aplicacion
			app.setState({listaProductos:[...app.getState().listaProductos, producto]})
            // se almacena el el local storage la informacion del estado
			localStorage.setItem('data', JSON.stringify(app.getState().listaProductos))
            alert('Producto Almacenado')

            app.setState({ruta:'home'})
		},
        atrasBoton: ()=>{
            app.setState({ruta:'home'})
        }
	
	};

	
	initComponent() {
        // aqui se instancian las variables con los elementos del DOM que se van a utilizar
		this.$form = this.shadowDOM.querySelector('#formAgrega');
		this.$nombre = this.shadowDOM.querySelector('#nombre');
		this.$precio = this.shadowDOM.querySelector('#precio');
		this.$cantidad = this.shadowDOM.querySelector('#cantidad');
		this.$atras = this.shadowDOM.querySelector('#atras');

        // se agregan los eventos a los botones del formulario y al boton de volver al inicio
		this.$form.addEventListener('submit', this.methods.guardaProducto)
        this.$atras.addEventListener('click', this.methods.atrasBoton)
	}

    template() {
        // devuelve el codigo HTML del componente que se va a renderizar
        return `
        <form id="formAgrega">
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" name="nombre">
            </div>
            <div class="mb-3">
                <label for="nombre" class="form-label">Precio</label>
                <input type="text" class="form-control" id="precio" name="precio">
            </div>
            <div class="mb-3">
                <label for="nombre" class="form-label">Cantidad</label>
                <input type="text" class="form-control" id="cantidad" name="cantidad">
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Agregar</button>
                <button type="reset" class="btn btn-primary">Reiniciar</button>
                <button type="reset" class="btn btn-primary" id="atras">Atras</button>
            </div>
            
            
        </form>
        `;
    }
}

export default FormularioAgregar;