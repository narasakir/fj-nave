;(function(){
    const $btnAjuda = document.querySelector('#btnAjuda')
    $btnAjuda.addEventListener('click', () => { // Arrow function é usado quando não preciso do (this)

        const xhr = new XMLHttpRequest() //Pedindo uma nova requisição
        xhr.open("GET", "http://ceep.herokuapp.com/cartoes/instrucoes") //Passando a informação do local que desejo fazer a requisicão
        xhr.send() // Enviando o pedido
        xhr.responseType = "json" // Transformando o arquivo em JSON
        
        xhr.addEventListener("load", function(){ //verificando quando o arquivo é carregado para trazer o conteudo 
            const ajudas = xhr.response.instrucoes // Pegando a resposta do json
            
            //Percorrendo o array para trazer todo o conteudo e criando todos os cartoes.
            ajudas.forEach(ajuda => criarCartao(ajuda)) // Arrow function é uma função usado quando não preciso do (this) 

        })
    })
    $btnAjuda.classList.remove('no-js') // Progressive enhancement - disponibiliza o componente na view depois de carregar a funcionalidade
})()