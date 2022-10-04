function filtrar(){
    //valor digitado pelo usuario
    let expressao = input_busca.value.toLowerCase();

    //pega todas as lihas da tabela
    let linhas = listaContatos.getElementsByTagName('tr');

    for (let posicao in linhas){
        if (isNaN(posicao)){
            continue;
        }
        //filtrar os nomes da coluna 1 (item)
        let coluna1 = linhas[posicao].children[1].innerText.toLowerCase();
        //quantidade
        let coluna2 = linhas[posicao].children[2].innerText.toLowerCase();

        let colunas = coluna1 + coluna2;
        
        //let linha = linhas[posicao].innerText.toLowerCase();
        
        //se dentro da linha atual (<tr>)
        if (colunas.includes(expressao)){
            linhas[posicao].style.display = '';
        }else{
            linhas[posicao].style.display = 'none';
        };

    }
}