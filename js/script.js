var formulario = document.getElementById("form-cadastro")

formulario.addEventListener("submit", function(event){
    event.preventDefault()
    var campoNome = document.getElementById("nome").value
    var campoEmail = document.getElementById("email").value

    window.api.cadastrarUsuario(campoNome, campoEmail)

})
