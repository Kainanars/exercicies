function calculaFatorial(numero) {
    let number = numero;
    for(var i = 1; i < numero; i++){
          number= number * i;
          console.log(numero + '^' + i + ' = ' + number) 
        }
        return console.log(number)
  }
  calculaFatorial(6) //retorna 720