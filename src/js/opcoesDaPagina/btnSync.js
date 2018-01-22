;(function(){
    const $btn = $("#btnSync")

    $btn.click(function(){
        const xhr = new XMLHttpRequest()
        xhr.open("POST", "http://ceep.herokuapp.com/cartoes/salvar")
    
        xhr.setRequestHeader("Content-Type", "application/json") //Configurando o Header informando o tipo de arquivo enviado
    
        const objeto = {
            usuario: "narasaki",
            cartoes: [
                {conteudo: "amsdk", cor: "#777"}, 
                {conteudo: "asasdada", cor:"#dcd"}
            ]
        }
    
        xhr.send(JSON.stringify(objeto)) // Convertendo o objeto para uma string com o JSON
    
        xhr.addEventListener("load", function(){
            $btn.addClass("botaoSync--sincronizado")
        })
    
        xhr.addEventListener("error", function(){
            $btn.addClass("btnSync--deuRuim")
        })
    })

    $btn.removeClass("no-js")
})()