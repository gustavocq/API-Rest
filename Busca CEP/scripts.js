function imprime(objeto) {
    var mensagem = `
    <br>
    {
        <br>
            "<span class='campo'>CEP</span>": ${objeto.cep},
        <br>
            "<span class='campo'>Logradouro</span>": ${objeto.logradouro},
        <br>          
            "<span class='campo'>Bairro</span>": ${objeto.bairro}
        <br>
            "<span class='campo'>Localidade</span>": ${objeto.localidade}
        <br>
            "<span class='campo'>Estado</span>": ${objeto.uf}
        <br>
            "<span class='campo'>DDD</span>": ${objeto.ddd}
        <br>
    }
        <br>`
    return mensagem;
 }

    async function validarCep(cepTexto) {

        if (cepTexto.length<=0) {
            window.alert("Você deve passar um CEP para consultar.");
        }

        if (cepTexto.length>8) {
            window.alert("Você deve passar um CEP correto.");
        }

        else{
            buscarCep(cepTexto);
        }

    }
    async function buscarCep(cepTexto) {
        await fetch(`https://viacep.com.br/ws/${cepTexto}/json`)
        .then((response) => response.json())
        .then((json) => {
        console.log(json);
        respjson.innerHTML = imprime(json);
    });

 
    }