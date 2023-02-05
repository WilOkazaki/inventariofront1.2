/* 
    esta clase se encarga de administrar las rutas,
    en su constructor se pasan como propiedades el objeto con las rutas y
    la funcion que permite inicializar el router
*/
class Router {
    
    constructor(paths) {
        this.paths = paths;
        this.initRouter();
    }

    initRouter() {
        const {
            location: {
                pathname = "/"
            }
        } = window;
        const URI = pathname === "/" ? "home" : pathname.replace("/", "");
        return this.load(URI);
    }

    /* este metodo es el que devuelve la vista que se encuetra en la ruta */
    load(page = "home") {
        try {
            const { paths } = this;
            const { template } = paths[page] || paths.error;
            return template
        } catch (error) {
            return location.href = '/';
        }
    }

}