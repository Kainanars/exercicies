function foraDaSequencia(arrayDeNumeros, razao) {
    let numero = arrayDeNumeros[0];
    for (i = 0; i <= arrayDeNumeros.length; i++){
        if (arrayDeNumeros[i] == arrayDeNumeros[0]){
            console.log(arrayDeNumeros[i]);
            numero = arrayDeNumeros[i]+razao
        }

        else if (arrayDeNumeros[i] != numero){
            console.log(arrayDeNumeros[i] + ' está fora da sequência!');
            return arrayDeNumeros[i]

        }
        else {
            console.log(arrayDeNumeros[i]);
            numero = arrayDeNumeros[i]+razao
                
        }
    };     
}

  foraDaSequencia([0, 1, 2, 3, 4, 5, 6, 20, 7, 8, 9], 1) //retorna 20