function analizaPalabras(arrayPalabras) {

    console.log("```");

    for (let i in arrayPalabras) {

        console.log(`#######`);
        const palabra = arrayPalabras[i];
        console.log(`Palabra ${(arrayPalabras.indexOf(palabra)) + 1}: ${palabra}`);
        console.log(`Nº caracteres: ${palabra.length}`);
        console.log(`Deletreo: ${palabra.split("").join().replaceAll(",", "-")}`);
        console.log(`La palabra es ${palabra.length % 2 === 0 ?
            "par" : "impar"} y ${palabra[0] !== palabra[0].toLowerCase() ?
                "sí" : "no"} empieza por mayúsucla`);
        const noincluye = "ble";
        console.log(`La palabra ${palabra.includes(noincluye)
            ? 'sí' : 'no'} contiene "ble"`);

    };

    console.log(`#######`);
    console.log("```");
}

/*let in in palabras = posición
let it of palabras = valor
comprobar con cosole.log(palabras(i, palabra)):*/
