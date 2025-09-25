const yargs = require('yargs');
const { hideBin } = require('yargs/helpers'); // 👈 importante

const argv = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Muestra la tabla en consola',
        default: false
    })
         .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Hasta donde llega la multiplicación'        
    })   
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;
