console.log('Módulo 04');
// AJAX significa Asynchronous JavaScript and XML -> pode enviar e receber dados do servidor sem precisar recarregar a página inteira.
// var xhr = new XMLHttpRequest(); // XMLHttpRequest para acessar funcionalidade AJAX

// // usando API GitHub do meu usuario para consumir dados
// xhr.open('GET', 'https://api.github.com/users/lburatti');
// xhr.send(null);

// xhr.onreadystatechange = function () {
//     // para verificar se leu todo a url (4 é o status de leitura finalizada)
//     if (xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.responseText));
//     }
// }

// OUTRA FORMA - melhor!

// Promise (class)-> são códigos que não vão influenciar no código JS -> funções que vão devolver resposta de sucesso/erro depois de um tempo, mas não precisamos nos preocupar com isso pois o JS continuará executando normalmente
// var minhaPromise = function () {
//     return new Promise(function (resolve, reject) { // funções: resolve p/ OK, reject para erro
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/lburatti');
//         xhr.send(null);
        
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     })
// }
// minhaPromise()
//     .then(function(response) { // chegou no resolve() e vai chamar método then()
//         console.log(response); // SE for usar informações que vem da requisição, colocar código aqui.
//     }) 
//     .catch(function(error) { // chegou no reject() e vai chamar método catch() 
//         console.warn(error); // console.warn traz um alerta do erro em amarelo
//     }); 

// OUTRA FORMA - melhor ainda!

// AXIOS
// instalando: https://github.com/axios/axios -> <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

axios.get('https://api.github.com/users/lburatti')
    .then(function(response) { // chegou no resolve() e vai chamar método then()
        console.log(response); // SE for usar informações que vem da requisição, colocar código aqui.
        console.log(response.data); // pra trazer só as informações (data), idem exemplo anterior.
        console.log(response.request); // para trazer só as informações do XMLHttpRequest
        console.log(response.data.login); // para trazer só o login.
    }) 
    .catch(function(error) { // chegou no reject() e vai chamar método catch() 
        console.warn(error); // console.warn traz um alerta do erro
    }); 
