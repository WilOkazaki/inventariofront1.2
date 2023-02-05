// se importan todos los web components
import Inicio from './components/inicio/inicio.js';
import FormBuscar from './components/inicio/buscar.js';
import Lista from './components/inicio/lista.js';

import Agregar from './components/agregar/agregar.js';
import FormularioAgregar from './components/agregar/formulario.js';

import Editar from './components/editar/editar.js';
import FormularioEditar from './components/editar/formulario.js';

// se crean las etiquetas html personalizadas con los componentes diseñados
window.customElements.define('container-inicio', Inicio);
window.customElements.define('buscar-inicio', FormBuscar);
window.customElements.define('lista-inicio', Lista);

window.customElements.define('inicio-agregar', Agregar);
window.customElements.define('formulario-agregar', FormularioAgregar);

window.customElements.define('inicio-editar', Editar);
window.customElements.define('formulario-editar', FormularioEditar);
