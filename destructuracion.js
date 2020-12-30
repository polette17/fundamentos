let usuario = {
    nombre: 'Polette',
    apellido: 'Bravo',
    area: 'Teleco',
    getNoombre: function() {
        return `${this.nombre} ${this.apellido} ${this.area}`
    }
};

// let nombre = usuario.nombre;
// let apellido = usuario.apellido;
// let area = usuario.area;

let { nombre: nombre, apellido, area } = usuario;
console.log(nombre, apellido, area);