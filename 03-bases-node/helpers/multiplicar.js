const fs = require('fs/promises'); //  usamos la versión con promesas
const colors = require('colors')


const crearArchivo = async (base = 5, listar= false, hasta = 10) => {
    try {
        console.clear();


        let salida, consola = '';
       


        for (let x = 1; x <= hasta; x++) {    
            //salida += (`${base} X ${x} =  ${base * x}\n`);
            salida += (`${base} X ${x}  = ${base * x}\n`);
            consola += (`${colors.green(base)} ${'X'.red} ${colors.green(x)} ${'='.red}  ${colors.blue(base * x)}\n`);
        }
        if (listar) {
        console.log('================='.green);
        console.log('  Tabla del'.green, colors.blue(base));
        console.log('================='.green);
        console.log(consola);
        }

        // ✅ Guardamos usando await
        await fs.writeFile(`./salida/tabla-${base}.txt`, salida);

        console.log(`tabla-${base}.txt creado`);
        return `tabla-${base}.txt`; // opcional: devolvemos el nombre del archivo
    } catch (error) {
        throw error; // si falla algo, el catch externo lo captura
    }
};

module.exports = {
    crearArchivo
};
