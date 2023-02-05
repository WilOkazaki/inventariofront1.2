import Schema from '../../utils/schema.js';

/* 
    la clase Agregar hereda de Schema, aqui creamos el componente padre de la vista de la pantalla
    donde se van a agregar los productos
*/
class Agregar extends Schema {

    initComponent() {
        
    }

    template() {
        return `
        <div class="container mt-3">
            <h1 class="text-center">Agregar</h1>

            <div class="card">
                <div class="card-body">
                    <formulario-agregar></formulario-agregar>
                </div>
            </div>
        </div>
        `;
    }

}

export default Agregar;