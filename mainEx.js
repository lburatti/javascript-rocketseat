console.log('Exercício 01');

function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        if (idade >= 18) {
            return resolve("Maior que 18");
        } else {
            return reject("Menor que 18");
        }
    });
}
checaIdade(20)
    .then(function (resolve) {
        console.log(resolve);
    })
    .catch(function (reject) {
        console.warn(reject);
    });

// ----------------------------------------------------------------------------------------
console.log('Exercício 02');

var listElement = document.querySelector('.ex-04-02 ul');
var inputElement = document.querySelector('.ex-04-02 input');
var buttonElement = document.querySelector('.ex-04-02 button');

buttonElement.onclick = function searchUser() {
    var user = inputElement.value;
    inputElement.value = '';

    var loadingElement = document.createElement('li');
    var loadingText = document.createTextNode('Carregando...');

    loadingElement.appendChild(loadingText);
    listElement.appendChild(loadingElement);

    axios.get('http://api.github.com/users/'+ user + '/repos')
        .then(function(response) {
            listElement.innerHTML = '';
            listElement.style.listStyleType = 'disc';// ??

            for(const repo of response.data){
                var liElement = document.createElement('li');
                var liText = document.createTextNode(repo.name);

                liElement.appendChild(liText);
                listElement.appendChild(liElement);
            }
        })
        .catch(function(error) {
            listElement.innerHTML = '';
            console.warn("error 404: User not found");

            var elementError = document.createElement('li');
            var elementErrorText = document.createTextNode("Usuario não encontrado");

            listElement.style.listStyleType = 'none';

            elementError.appendChild(elementErrorText);
            listElement.appendChild(elementError)
        });
}