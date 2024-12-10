//VERIFICAÇÃO DE LOGIN//

function logar() {
    let login = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    if(login == "usuario" && senha == "senha"){
        location.href = "index.html"
    }
    else{
        alert("email ou senha incorretos")
    }
}