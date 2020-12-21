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

    function cidadesPorEstado(estado) {
        for (i = 0; i <= estado; i++ ){
            if(estado[i].estado == estado){
                console.log(estado[i].nome);
                return estado[i].nome;
            }else{
                return console.log("Ainda não há cidades cadastradas para esse estado!! :(")
            }
        }
      };
      cidadesPorEstado('SP') // retorna ["São Paulo", "Santo André"] 