function foraDaSequencia(arrayDeNumeros) {
    for (i=0; i <= arrayDeNumeros.length; i++){
        let num = arrayDeNumeros[0]++
        //console.log(num)
        if (arrayDeNumeros[i] != num){
            console.log(`${i} está fora da sequência!! :(`)
            return i;
        }
        //console.log(arrayDeNumeros[i])
        
                }
    }
  foraDaSequencia([1, 2, 3, 4, 5, 6, 20, 7, 8, 9]) //retorna 20g