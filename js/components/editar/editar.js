import Schema from '../../utils/schema.js';

/* 
    la clase Editar hereda de Schema, aqui creamos el componente padre de la vista de la pantalla
    donde se van a editar los productos
*/

class Editar extends Schema {

    initComponent() {
        
    }

    template() {
        return `
        <div class="container mt-3">
            <h1 class="text-center">Editar</h1>

            <div class="card">
                <div class="card-body">
                    <formulario-editar></formulario-editar>
                </div>
            </div>
        </div>
        `;
    }
}

export default Editar;