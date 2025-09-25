const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',    
    poder: 'Regeneracion',
    //edad: 50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`;
    }
};  
/* const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder; */

function imprimeHeroe( { nombre, apellido, poder, edad = 0 } ) {
    nombre
    console.log( nombre, apellido, poder, edad );
}

const heroes = ['Deadpool', 'Superman', 'Batman'];
const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2];

console.log(h1, h2, h3);


/* const {nombre, apellido, poder, edad= 0} = deadpool;

console.log(nombre, apellido, poder, edad );
 */

