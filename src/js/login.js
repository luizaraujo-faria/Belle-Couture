//VERIFICAÇÃO DE LOGIN//

function logar() {
    const emailInp = document.getElementById('email')
    const senhaInp = document.getElementById('senha')
    const email = document.getElementById('email').value.toLowerCase()
    const senha = document.getElementById('senha').value.toLowerCase()

    if(email == "cidade@melhorprofessor" && senha == "cidadelindo"){
        location.href = "index.html"
    }
    else{
        alert("email ou senha incorretos")
        emailInp.value = ""
        senhaInp.value = ""
        emailInp.focus()
    }
}