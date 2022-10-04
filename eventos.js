
const API_URL = 'http://localhost:8000';

function marcarTodos(){
    let todos = document.querySelectorAll('[data-check="acao"]');
        todos.forEach((cadaCheck) => {
            cadaCheck.checked = true;
        })
    
}

function buscarParaEditar(id){
    fetch(API_URL+'/contatos/'+id)
    .then(res => res.json())
    .then(dados =>{
        input_editar_id.value = id;
        input_editar_nome.value = dados.nome;
        input_editar_telefone.value = dados.telefone;
        input_editar_cidade.value = dados.cidade;
    });

}

function editar(){
    event.preventDefault();
    let dados = {
        nome: input_editar_nome.value,
        telefone: input_editar_telefone.value,
        cidade: input_editar_cidade.value,

    };

    //validacao 

    let titulo1 = document.getElementById('input_editar_nome').value;
    if(titulo1.trim() === ''){
        alert("Digite um nome!");
        return
    }

    let titulo2 = document.getElementById('input_editar_telefone').value;
    if(titulo2.trim() === '' || titulo2.length !== 14){
        alert("Número inválido.");
        return
    }

    let titulo3 = document.getElementById('input_editar_cidade').value;
    if(titulo3.trim() === ''){
        alert("Informe a cidade!");
        return
    }

    //fim da validacao
    
    fetch(API_URL+'/contatos/'+input_editar_id.value, {
        method: 'PATCH',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json' //informar para a api que os dados sao do tipo json
        }
    })
    .then(resposta => resposta.json())
    .then(resposta => atualizarLista())

    let x = document.querySelector('[data-bs-dismiss="offcanvas"]'); 
    x.dispatchEvent(new Event('click')); //disparar um novo evento na variavel x para ativar o comando 
}

function inserir(){
    event.preventDefault();
    
    let dados = {
        nome: inputNome.value,
        telefone: inputTelefone.value, 
        cidade: inputCidade.value,
    };

//validacao

    let titulo1 = document.getElementById('inputNome').value;
    if(titulo1.trim() === ''){
        alert("Digite um nome!");
        return
    }

    let titulo2 = document.getElementById('inputTelefone').value;
    if(titulo2.trim() === '' || titulo2.length !== 14){
        alert("Número inválido.");
        return
    }

    let titulo3 = document.getElementById('inputCidade').value;
    if(titulo3.trim() === ''){
        alert("Informe a cidade!");
        return
    }

//fim da validacao    

    fetch(API_URL+'/contatos', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(resposta => resposta.json())
        .then(resposta => atualizarLista());
    
    form_add.reset(); //limpa o formulario apos inserir novo item
}

//aguardar resposta da api
async function excluir (id){

    let resposta = confirm('Tem certeza?');
    if(resposta !== true){
        return;
    }

    await fetch(API_URL+'/contatos/' +id,{
        method:'DELETE'
    });
    atualizarLista();
    }

function atualizarLista(){
    
    listaContatos.innerHTML = '';
    
    fetch(API_URL+'/contatos/',{method:'GET'})
    .then(function(resposta){
        return resposta.json(); //reposta.json dados da api
    })
    .then(function(lista){
        lista.forEach(function(cadaItem){
            listaContatos.innerHTML += `
            <tr>
                <td><input data-check="acao" type="checkbox"></td>
                <td>${cadaItem.id}</td>
                <td>${cadaItem.nome}</td>
                <td>${cadaItem.telefone}</td>
                <td>${cadaItem.cidade}</td>
                <td>
                <button onclick="buscarParaEditar(${cadaItem.id})" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEditar" class="btn btn-success">
                    Editar
                    </button>
                    <button onclick="excluir(${cadaItem.id})" class="btn btn-dark">
                    Excluir
                    </button>
                </td>

            </tr>
            `
        });
    })
}
atualizarLista();



