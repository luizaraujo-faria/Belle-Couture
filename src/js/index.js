//SLIDESHOW//
//DECLARAÇÃO DE VARIAVEIS//
const slides = document.querySelector('.slides')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
let currentIndex = 0//VARIAVEL CONTADOR//
const totalSlides = document.querySelectorAll('.slide').length

//FUNÇÃO PARA PASSAR AS IMAGENS DO SLIDESHOW//
function showSlide(index) {
    const slideWidth = document.querySelector('.slide').clientWidth
    slides.style.transform = `translateX(-${index * slideWidth}px)`
}
//FUNÇÃO DE CLICK PARA BOTAO PROXIMO//
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides
    showSlide(currentIndex)
})
//FUNÇÃO DE CLICK PARA BOTAO VOLTAR//
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
    showSlide(currentIndex)
})
//AUTOMATIZAÇÃO DO SLIDESHOW//
setInterval(() => {
    nextButton.click()
},5000)

//TELA DE CARREGAMENTO//
window.onload = function() {
    const loading = document.querySelector('.loading')
    const logoLoad = document.querySelector('.loading .logo')
    body.classList.add('no-scroll')
    
        logoLoad.style.opacity = "1"
        setTimeout(() => {
            logoLoad.style.opacity = "0"

            setTimeout(() => {
                loading.classList.add('faded')
                body.classList.remove('no-scroll')

            }, 825)
        },800)
}
/*
//TELA DE CARREGAMENTO QUE OCORRE APENAS UMA VEZ//
document.addEventListener('DOMContentLoaded', () => {
    const loading = document.querySelector('.loading')
    const logoLoad = document.querySelector('.loading .logo')
    
    const visited = sessionStorage.getItem('visited')

    if(visited){
        loading.style.display = "none"
    }
    else{
        logoLoad.style.opacity = "1"
        setTimeout(() => {
            logoLoad.style.opacity = "0"
            
            setTimeout(() => {
                loading.classList.add('faded')
            }, 825)
        },800)

        sessionStorage.setItem("visited", "true")
    }
})*/
