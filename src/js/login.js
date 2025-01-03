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

//FOOTER MOBILE//
const mediaQuery = window.matchMedia("(width < 640px)");{

    let cheader = document.querySelectorAll('.sumario .column .header')
    let column = document.querySelectorAll('.sumario .column')
    let cClose = document.querySelectorAll('.sumario .column .header .column-close')

    cheader.forEach((cheader, index ) => {
        cheader.addEventListener('click', () => {
            column[index].classList.toggle('active')
            cClose[index].classList.toggle('active')
        })
    })
}