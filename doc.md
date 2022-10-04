************************************************* CRUD LISTA DE CONTATOS *****************************************************

Esta projeto permite gerenciar uma lista de contatos telefônicos a partir de dados como nome, número do telefone e cidade. 
A lista possui as funcionalidades de inclusão de um novo contato, edição dos dados do contato, exclusão de um contato e 
busca por um contato específico.

Como base para o banco de dados é utilizado a biblioteca JSON-SERVER que simula um banco de dados com API REST. O endereço da 
API gerada é http://localhost:8000/contatos onde os dados serão armazenados com suas respectivos números de identificação (id). 

Executando o CRUD-CONTATOS:

1- instalar o aplicativo NODEJS através do endereço https://nodejs.org/; 

2- instalar o json-server, executando no terminal do VS-CODE o comando: npm install -g json-server;

3- executar, no terminal do VS-CODE, dentro da pasta do projeto, o comando: npx json-server db.json --port 8000;

4- após estes passos a aplicação poderá ser iniciada no arquivo index.html.

OBSERVAÇÃO:
Em caso de erro: npm ERR! request to https://registry.npmjs.org/json-server failed, reason: self signed certificate in
certificate chain. Siga os seguintes comandos:

a)npm set strict-ssl false 
b)npm config set registry http://registry.npmjs.org/  
c)npm install -g json-server.
