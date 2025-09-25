const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors')


console.clear();








(async () => {
    try {
        const nombreArchivo = await crearArchivo(argv.base, argv.l, argv.hasta);
        console.log(colors.rainbow(`Archivo ${nombreArchivo}, creado con éxito`));
    } catch (err) {
        console.error('Error:', err);
    }
})(); 


/* const [,,arg3=5] = process.argv;
const [,base=5] =arg3.split('='); */
