//SLIDESHOW//
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
    
    if(sessionStorage.getItem('loadedScreen')){
        loading.style.display = 'none';
        body.classList.remove('no-scroll')
        return
    }

        logoLoad.style.opacity = "1"
        setTimeout(() => {
            logoLoad.style.opacity = "0"

            setTimeout(() => {
                loading.classList.add('faded')
                body.classList.remove('no-scroll')

                sessionStorage.setItem('loadedScreen', 'true')

            }, 825)
        },800)
}