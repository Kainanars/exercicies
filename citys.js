const cidades = [{
    "nome": "Salvador",
    "estado": "BA",
    "populacao": 30000
    }, {
    "nome": "São Paulo",
    "estado": "SP",
    "populacao": 10000
    }, {
    "nome": "Rio de Janeiro",
    "estado": "RJ",
    "populacao": 20000
    }, {
    "nome": "Curitiba",
    "estado": "PR",
    "populacao": 15000
    }, {
    "nome": "Porto Alagre",
    "estado": "RS",
    "populacao": 25000
    }, {
    "nome": "Porto Seguro",
    "estado": "BA",
    "populacao": 5000
    },
    {
    "nome": "Santo André",
    "estado": "SP",
    "populacao": 8000
    }, {
    "nome": "Macaé",
    "estado": "RJ",
    "populacao": 3000
    }];


    
    function cidadesPorEstado(states) {
        
        for (i = 0; i < cidades.length; i++ ){
            if (cidades[i].estado === states){
                console.log(cidades[i].nome);
            }
        }
      };
      cidadesPorEstado('SP') // retorna ["São Paulo", "Santo André"] 

    function cidadesPorIntervaloDePopulacao(populacao_minimo, populacao_maximo) {

        for (i = 0; i < cidades.length; i++ ){
            if (cidades[i].populacao >= populacao_minimo && cidades[i].populacao <= populacao_maximo){
                console.log(cidades[i].nome);
            }
        }
      
    };

    cidadesPorIntervaloDePopulacao(1000, 9000) // retorna ["Macaé", "Santo André", "Porto Seguro"]  


    function informativoCidade(cidade) {
        
        for (i = 0; i < cidades.length; i++ ){
            if (cidades[i].nome == cidade ){
                console.log(`Informativo de ${cidades[i].nome}: cidade que fica no ${cidades[i].estado} e possui ${cidades[i].populacao} habitantes. `);
            }
        }

      };

      informativoCidade('Macaé') // retorna 'Informativo de Macaé: cidade que fica no Rio de Janeiro e possui 3000 habitantes'
  