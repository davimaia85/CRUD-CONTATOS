function filtrar(){
    //valor digitado pelo usuario
    let expressao = input_busca.value.toLowerCase();

    //pega todas as lihas da tabela
    let linhas = listaContatos.getElementsByTagName('tr');

    for (let posicao in linhas){
        if (isNaN(posicao)){
            continue;
        }
        //filtrar os nomes (coluna 2)
        let coluna2 = linhas[posicao].children[2].innerText.toLowerCase();
        //telefone
        let coluna3 = linhas[posicao].children[3].innerText.toLowerCase();
        //cidade
        let coluna4 = linhas[posicao].children[4].innerText.toLowerCase();

        let colunas = coluna2 + coluna3 + coluna4;
        
        //se dentro da linha atual (<tr>)
        if (colunas.includes(expressao)){
            linhas[posicao].style.display = '';
        }else{
            linhas[posicao].style.display = 'none';
        };

    }
}