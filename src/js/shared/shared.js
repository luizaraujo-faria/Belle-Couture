//Elementos do header//

//DECLARAÇÕES DE VARIÁVEIS//
let srchClose = document.querySelector('#srch-close')
let menuClose = document.querySelector('#menu-close')
let body = document.querySelector('body')
let overlay = document.querySelector('.overlay')
let person = document.querySelector('.person')
let personBar = document.querySelector('.person-bar')
let menu = document.querySelector('.menu')
let menuBar = document.querySelector('.menu-bar')
let search = document.querySelector('.search')
let searchScreen = document.querySelector('.search-screen')

//FUNÇÃO DE CLICK PARA ICONE PERSON//
person.addEventListener('click', () => {
    personBar.classList.toggle('show')
})

//FUNÇÃO DE CLICK PARA ICONE PESQUISA//
search.addEventListener('click', () => {
    searchScreen.classList.add('show')
    overlay.classList.add('show')
    body.classList.add('no-scroll')
})

//FUNÇÃO DE CLICK PARA ICONE CLOSE DA PESQUISA//
srchClose.addEventListener('click', () => {
    searchScreen.classList.remove('show')
    overlay.classList.remove('show')
    body.classList.remove('no-scroll')
})

//FUNÇÃO DE CLICK PARA ICONE MENU//
menu.addEventListener('click', () => {
    menuBar.classList.toggle('show')
    overlay.classList.toggle('show')
    body.classList.toggle('no-scroll')
})
//FUNÇÃO DE CLICK PARA ICONE CLOSE DO MENU//
menuClose.addEventListener('click', () => {
    menuBar.classList.remove('show')
    overlay.classList.remove('show')
    body.classList.remove('no-scroll')
})

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

//EFEITO HEADER//
let lastScroll = 0

window.addEventListener('scroll', () => { 
    let header = document.querySelector('header')
    const currentScroll = window.scrollY

    if(currentScroll > lastScroll){
        header.classList.add('hidden')
    }
    else{
        header.classList.remove('hidden')
    }
    lastScroll = currentScroll
})

//BARRA DE PESQUISA//

//DECLARAÇÕES DE VARIÁVEIS DA BARRA DE PESQUISA//
const searchInp = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')
const serachClear = document.querySelector('.search-clear')

//OBJETO PARA IDENTIFICAR AS OPÇÕES DE PESQUISA
const pageMap = {
    "inicio": "index.html",
    "homens": "cathalog.html#male",
    "mulheres": "cathalog.html#female",
    "bolsas": "cathalog.html#bag",
    "relogios": "accessories.html#clock",
    "joias": "accessories.html#jewel",
    "maquiagem": "accessories.html#makeup",
    "fragrancias": "accessories.html#fragrance"
}

//FUNÇÃO DE CLICK PARA BOTÃO REALIZAR PESQUISA
searchBtn.addEventListener('click', () => {
    const searchTxt = searchInp.value.toLowerCase()
    const pages = pageMap[searchTxt]

    if(pages){
        location.href = pages
    }
    else{
        alert("Item não encontrado!")
    }
})
//FUNÇÃO DE CLICK PARA BOTÃO LIMPAR
serachClear.addEventListener('click', () => {
    searchInp.value = ""
    searchInp.focus()
})
