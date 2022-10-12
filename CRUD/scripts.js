function imprime(objeto) {
    var mensagem = `
    <br>
    {
    <br>
    "<span class='campo'>id</span>": ${objeto.id},
    <br>
    "<span class='campo'>userId</span>": ${objeto.userId},
    <br>
    "<span class='campo'>title</span>": ${objeto.title},
    <br>
    "<span class='campo'>body</span>": ${objeto.body}
    <br>
    }
    <br>`
    return mensagem;
}
async function getPostagem(id) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            respjson.innerHTML = imprime(json);
        });

}

async function postPostagem() {

    const titulo = document.getElementById("titletxt").value;
    const corpo = document.getElementById("bodytxt").value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },


        body: JSON.stringify({
            title: titulo,
            body: corpo,
            userId: 1,
        }),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            respjson.innerHTML = imprime(json);
            confirmacao.innerHTML = 'Salvo com Sucesso';
        });
}

async function modoEdicao() {
 
    document.getElementById("modoEdicao").style.visibility = "visible";

}

async function putPostagem() {

    const titulo = document.getElementById("titletxtedit").value;
    const corpo = document.getElementById("bodytxtedit").value;
   

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            id: id,
            title: titulo,
            body: corpo,
            userId: 1,
        }),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            respjson.innerHTML = imprime(json);
            confirmacao.innerHTML = 'Salvo com Sucesso';
            document.getElementById("modoEdicao").style.visibility = "hidden";
        });
}

function excluirElemento() {
    document.getElementById("excluirElemento").style.visibility = "visible";
}



async function removerPostagem() {
    const id = document.getElementById("idtxt").value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    });
    confirmacao.innerHTML = 'Excluído com Sucesso';
}