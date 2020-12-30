let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve('Polette');

        }, 3000);

    });
}


let saludo = async() => {

    let nombre = await getNombre();


    return `Hola ${ nombre }`;

}


saludo().then(mensaje => {
    console.log(mensaje);
})


/**
 *  Async Await
 */


// let getNombre = async() => {

//     return 'Polette';
// };