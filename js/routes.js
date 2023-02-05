// directorio con todas las rutas a las que se puede acceder con sus repectivos componentes establecidos
const PATHS = {
    home: {
        path: "/",
        template: `
            <container-inicio></container-inicio>
        `,
    },
    agregar: {
        path: "/agregar",
        template: `
            <inicio-agregar></inicio-agregar>
        `,
    },
    editar: {
        path: "/editar",
        template: `
            <inicio-editar></inicio-editar>
        `,
    }
}