/*Prueba en una consola a parte de que la función analizaPalabras() funciona. */

/*const prueba = ["Hola", "cable", "casa"];*/

function analizaPalabras(arrayPalabras) {

    console.log("```");

    arrayPalabras.filter(palabra => {

        for (i = 0; i < arrayPalabras.length; i++) {
            console.log(`#######`);
            console.log(
                `Palabra ${(arrayPalabras.indexOf(palabra)) + 1}: ${palabra}`);
            console.log(`Nº caracteres: ${palabra.length}`);
            console.log(`Deletreo: ${palabra.split("").join().replaceAll(",", "-")}`);
            console.log(`La palabra es ${palabra.length % 2 === 0 ?
                "par" : "impar"} y ${palabra[0] !== palabra[0].toLowerCase() ?
                    "sí" : "no"} empieza por mayúsucla`);
            const noincluye = "ble";
            console.log(`La palabra ${palabra.includes(noincluye)
                ? 'sí' : 'no'} contiene "ble"`);

        }
    });

    console.log(`#######`);
    console.log("```");
}

/*console.log(analizaPalabras(prueba));*/
