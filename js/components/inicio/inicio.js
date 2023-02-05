import Schema from '../../utils/schema.js';

/* 
    la clase Inicio hereda de Schema, aqui creamos el componente padre de la vista principal de la aplicacion
*/
class Inicio extends Schema {

    initComponent() {
        
    }

    template() {
        return `
        <div class="container mt-3">
            <h1 class="text-center">Inventario</h1>

            <div class="card">
                <div class="card-body">
                    <buscar-inicio></buscar-inicio>
                </div>
            </div>

            <lista-inicio></lista-inicio>
        </div>

        `;
    }
}

export default Inicio;