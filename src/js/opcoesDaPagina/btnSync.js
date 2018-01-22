;(function(){
    const $btn = $("#btnSync")

    $btn.click(function(){
        
        $btn.addClass("botaoSync--esperando")

        const xhr = new XMLHttpRequest()
        xhr.open("POST", "http://ceep.herokuapp.com/cartoes/salvar")
    
        xhr.setRequestHeader("Content-Type", "application/json") //Configurando o Header informando o tipo de arquivo enviado
    
        const objeto = {
            usuario: "narasaki",
            cartoes: listaCartoes
        }
    
        xhr.send(JSON.stringify(objeto)) // Convertendo o objeto para uma string com o JSON
    
        xhr.addEventListener("load", function(){
            $btn.removeClass("botaoSync--esperando")
            $btn.removeClass("botaoSync--deuRuim")
            $btn.addClass("botaoSync--sincronizado")
        })
    
        xhr.addEventListener("error", function(){            
            $btn.removeClass("botaoSync--esperando")
            $btn.removeClass("botaoSync--sincronizado")            
            $btn.addClass("botaoSync--deuRuim")
        })
    })

    $btn.removeClass("no-js")
})()