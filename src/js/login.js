

function logar() {
    let login = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    if(login == "renato" && senha == "123"){
        location.href = "index.html"
    }
    else{
        alert("email ou senha incorretos")
    }
}