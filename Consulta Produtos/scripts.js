function imprime(objeto) {
    var mensagem = `
    <br>
    {
        <br>
            "<span class='campo'>Id</span>": ${objeto.id},
        <br>
            "<span class='campo'>title</span>": ${objeto.title},
        <br>          
            "<span class='campo'>description</span>": ${objeto.description},
        <br>
            "<span class='campo'>price</span>": ${objeto.price}
        <br>     
    }
        <br>`
    return mensagem;
 } 
 
 async function validarId() {
    const id = document.getElementById("id").value;
    if (id<=0) {
        window.alert("Você deve passar um ID para consultar.");
    }

    if (id>100) {
        window.alert("Você deve passar um ID válido para consulta.");
    }

    else{
        buscarProduto();
    }

}

    async function buscarProduto() {      
        const id = document.getElementById("id").value;
        await fetch(`https://dummyjson.com/products/${id}`)
        .then((response) => response.json())
        .then((json) => {
        console.log(json);
        respjson.innerHTML = imprime(json);
    });

    console.log(id);
    }