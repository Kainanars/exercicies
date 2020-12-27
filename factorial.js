function calculaFatorial(numero) {
    let number = numero;
    for(var i = 0; i < numero; i++){
      if (i == 0){
          console.log(`${numero}^${i} = 1`);
      }else{
          number= number * i;
          console.log(`${numero}^${i} = ${number}`);
        }
      }
      console.log(`O fatorial de ${numero}! é ${number}.`);
      return number;
  }
  calculaFatorial(6); //retorna 720
