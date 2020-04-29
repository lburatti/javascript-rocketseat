console.log('Módulo 03');
// referenciando os elementos que serão usados
var listElement = document.querySelector('#todos ul');
var inputElement = document.querySelector('#todos input');
var buttonElement = document.querySelector('#todos button');

// armazenando os itens da lista
// var todos = [
//     'Fazer Café',
//     'Estudar JavaScript',
//     'Jogar'
// ];
// pegando esses itens no Local Storage
var todos = JSON.parse(localStorage.getItem('list_todos')) || []; // JSON.parse transforma em array OU traz um array vazio

// function para exibir itens da lista
function renderTodos() {
    listElement.innerHTML = ''; // para não repetir toda a lista antes de renderizar novamente
    
    for (todo of todos) { // for 'todo' de 'todos'
        var todoElement = document.createElement('li'); // criando as 'li'
        var todoText = document.createTextNode(todo); // pegando cada item do array 'todos'
        
        var linkElement = document.createElement('a'); // criando os links para EXCLUIR
        linkElement.setAttribute('href', '#'); // atribuindo href ao link 'a'
        var linkText = document.createTextNode('Excluir'); // adicionando texto ao link

        var posicao = todos.indexOf(todo); // buscando posição do todo selecionado
        linkElement.setAttribute('onclick', 'deleteTodo(' + posicao + ')'); // adicionando atribuco onclick, com a função deleteTodo com parâmetro posição 

        todoElement.appendChild(todoText); // incluindo cada text em uma li
        listElement.appendChild(todoElement); // incluindo cada li na ul
        linkElement.appendChild(linkText); // incluindo o texto no link 'a'
        todoElement.appendChild(linkElement); // incluindo link 'a' na li
    }
}
renderTodos();

// funcão para btn adicionar
function addTodo() {
    var todoText = inputElement.value; // pegando o valor escrito no input
    todos.push(todoText); // adicionando esse texto no array 'todos'
    inputElement.value = ''; // deixando o input vazio
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

// funcão para excluir item quando clicar em 'excluir'
function deleteTodo(posicao) {
    todos.splice(posicao, 1); // método splice (posição passada, primeiro item) - exclui o primeiro item da posição
    renderTodos();
    saveToStorage();
}


// função para salvar no local storage
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos)); // variavel global 'localStorage'.setItem('nome', variavel) - OBS não pode ser array, então trazer somente valor -> JSON.stringfy(array) transforma em string
    // para visualizar o localStorage: devtools -> aba Application -> Local Storage
}