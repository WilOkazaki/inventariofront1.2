import Schema from '../../utils/schema.js';
// FormularioAgregar es el componente que contiene el formulario donde se van a estar editando los productos
class FormularioEditar extends Schema {
    methods = {
		editarProducto: e => {
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
            // se crea el objeto producto con los dato obtenidos del formulario
			const producto = {
                id: this.$id.value,
                nombre: this.$nombre.value,
                precio: this.$precio.value,
                cantidad: this.$cantidad.value
            }

            // se crea una lista de productos sin el producto que se va a editar
            const listaFiltrada = app.getState().listaProductos.filter(item => item.id != this.$id.value)
            // se le agrega el producto editado a la lista nueva
            listaFiltrada.push(producto)
            
            // se actualiza la lista del estado con la nueva que contiene el producto editado
			app.setState({listaProductos:listaFiltrada})
            // se actualiza la data en el local storage
			localStorage.setItem('data', JSON.stringify(app.getState().listaProductos))
            alert('Producto Editado')
            app.setState({ruta:'home'})
		},
        atrasBoton: ()=>{
            app.setState({ruta:'home'})
            // se elimina del estado los datos del producto a editar
            app.setState({editarProducto:{}})
        }
	
	};

    initComponent() {
        // aqui se instancian las variables con los elementos del DOM que se van a utilizar
        this.$form = this.shadowDOM.querySelector('#formEditar');
		this.$nombre = this.shadowDOM.querySelector('#nombre');
		this.$precio = this.shadowDOM.querySelector('#precio');
		this.$cantidad = this.shadowDOM.querySelector('#cantidad');
		this.$id = this.shadowDOM.querySelector('#id');
		this.$atras = this.shadowDOM.querySelector('#atras');

        // se agregan los eventos a los botones del formulario y al boton de volver al inicio
		this.$form.addEventListener('submit', this.methods.editarProducto)
        this.$atras.addEventListener('click', this.methods.atrasBoton)
    }

    template() {
        // se instancia una variable con los datos del producto a editar para utilizarlos en el formulario
        const datosProducto = app.getState().editarProducto;
        // // devuelve el codigo HTML del componente que se va a renderizar
        return `
        <form id="formEditar">
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" value="${datosProducto.nombre}" name="nombre">
            </div>
            <div class="mb-3">
                <label for="nombre" class="form-label">Precio</label>
                <input type="text" class="form-control" id="precio" value="${datosProducto.precio}" name="precio">
            </div>
            <div class="mb-3">
                <label for="nombre" class="form-label">Cantidad</label>
                <input type="text" class="form-control" id="cantidad" value="${datosProducto.cantidad}" name="cantidad">
                <input type="hidden" id="id" value="${datosProducto.id}">
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

export default FormularioEditar;