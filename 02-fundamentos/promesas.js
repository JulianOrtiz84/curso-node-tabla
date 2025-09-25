const empleados = [ 
    { id: 1, 
        nombre: 'Fernando' }, 
    { id: 2, 
        nombre: 'Linda' }, 
    { id: 3,
         nombre: 'Karen' } 
];

const salarios = [ 
    { id: 1, 
        salario: 1000 },
    { id: 2, 
        salario: 1500 }, 
    
];

/* const getEmpleado = (id) => { 
    

    const promesa = new Promise( (resolve, reject) => {
        const empleado = empleados.find( e => e.id === id )?.nombre;
        if( empleado ) {        
            resolve( empleado );
        } else {
            reject( `Empleado con id ${ id } no existe` );
        }
} );
    return promesa;
}    */



const getEmpleado = (id) => { 
    

    return promesa = new Promise( (resolve, reject) => {
        const empleado = empleados.find( e => e.id === id )?.nombre;

        ( empleado )        
        ? resolve( empleado )
        : reject( `Empleado con id ${ id } no existe` );
        
    } );
}   
    


const getSalario = (id) => { 
    

    return promesa = new Promise( (resolve, reject) => {
        const salario = salarios.find( s => s.id === id )?.salario;
        
        ( salario )        
        ? resolve( salario )
        : reject( `Salario con id ${ id } no existe` );
        
    } );
}   
   


const id = 1

/* getEmpleado(id)
    .then( empleado => console.log( empleado ) )
    .catch( err => console.log(err) );

    getSalario(id)
    .then( empleado => console.log( empleado ) )
    .catch( err => console.log(err) ); */


//PROMESAS EN CADENA

let nombre
getEmpleado (id) 
    .then( empleado => {
        nombre = empleado;
        return getSalario(id) }
        )
    .then( salario => console.log( 'El salario de ' + nombre + ' es de ' + salario ) )
    .catch( err => console.log(err) );