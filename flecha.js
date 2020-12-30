let usuario = {
    nombre: 'Polette',
    apellido: 'Bravo',
    area: 'Teleco',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - area: ${ this.area}`
    }
};


console.log(usuario.getNombre());

//function sumar(a, b){
//    return a+b;
//}
//console.log (sumar(10, 20));

//let  sumar=(a, b) => a+b;
//console.log (sumar(10, 20));

//Traducción de la Funcion

//let saludar = () => 'Hola Mundo'
//console.log(saludar());

//Otro mini Ejemplo

// let saludar = (nombre) => `Hola ${nombre}`
//console.log (saludar());