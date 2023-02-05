/* 
    la clase Schema se encarga de establecer un modelo que servira como padre para el diseño de los componentes,
    la clase hereda de HTMLElement que es la que nos va a ayudar a crear las etiquetas personalizadas para
    los web components cons sus propiedades y metodos
*/

class Schema extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
 
    disconnectedCallback() {
        this.remove();
    }
 
    connectedCallback() {
        this.mapComponentAttributes();
        this.render();
        this.initComponent();
    }
 
    render() {
        this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
    }
 
    mapComponentAttributes() {}
    templateCss() {
        return `
            <style>
                @import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";
            </style>
        `
    }
    template() {}
    
    initComponent() {
        
    }
 }
 export default Schema;