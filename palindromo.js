function palindromo(palavra) {
    let wordReverse = palavra.split('').reverse().join('');
    if (palavra === wordReverse){
        console.log(`A palavra "${palavra}" é um palindromo!! :)`);
        return true;
    }else{
        console.log(`A palavra "${palavra}" não é um palindromo!!  :(`);
        return false;
    };
  };
  palindromo('arara') //retorna true
  palindromo('aula') //retorna false



    //função split() para separar a palavra em letras('' para adicionar espaço entre caracteres );
    //função reverse() para inverter a ordem das letras; 
    //função join() para juntar tudo novamente ('' para remover espaço entre caracteres );
    //'texto aqui'.split('').reverse().join('');