/*
	clase procipal del sistema que se encarga del renderizado de la pagina y de el manejo de la data
	en la clase constructor se pasan el elemento donde se va a renderear las vistas, la data que se va a manejar
	y la vista que se va a mostrar.
*/
class Component{
	constructor(opt){
		this.el = opt.el;
		this.data = opt.data;
		this.template = opt.template;
	}

	render(){
		const $el = document.querySelector(this.el);

		if(!$el) return;

		$el.innerHTML = this.template(this.data);
		
	}

	/* 
		las funciones setState y getEstate son la que se encargan de asignar y devolver la informacion en la data
	*/

	setState(obj){
		for(let key in obj){
			if(this.data.hasOwnProperty(key)){
				this.data[key] = obj[key];
			}
		}

		this.render();
	}

	getState(){
		return JSON.parse(JSON.stringify(this.data));
	}
}

Component;