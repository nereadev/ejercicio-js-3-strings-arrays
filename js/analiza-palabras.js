function analizaPalabras(arrayPalabras) {

    let analisis = [];
    analisis.push("```");

    for (let i in arrayPalabras) {

        analisis.push(`#######`);
        const palabra = arrayPalabras[i];
        analisis.push(`Palabra ${(arrayPalabras.indexOf(palabra)) + 1}: ${palabra}`);
        analisis.push(`Nº caracteres: ${palabra.length}`);
        analisis.push(`Deletreo: ${palabra.split("").join().replaceAll(",", "-")}`);
        analisis.push(`La palabra es ${palabra.length % 2 === 0 ?
            "par" : "impar"} y ${palabra[0] !== palabra[0].toLowerCase() ?
                "sí" : "no"} empieza por mayúsucla`);
        const noincluye = "ble";
        analisis.push(`La palabra ${palabra.includes(noincluye)
            ? 'sí' : 'no'} contiene "ble"`);

    };

    analisis.push(`#######`);
    analisis.push("```");
    return analisis.join("\n");
}

/*let in in palabras = posición
let it of palabras = valor
comprobar con cosole.log(palabras(i, palabra)):*/
