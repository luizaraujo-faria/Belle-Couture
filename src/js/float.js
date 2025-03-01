//EFEITO HEADER//
window.addEventListener('scroll', () =>{
    let header = document.getElementById('header')

    header.classList.toggle('scroll', window.scrollY > 10)
})

