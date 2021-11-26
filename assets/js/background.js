const dayButton = document.getElementById("day")
const nightButton = document.getElementById("night")
const divPrincipal = document.getElementById("div-main")

dayButton.addEventListener('click', e=>cambiarFondoDia(e) )
nightButton.addEventListener('click', e=>cambiarFondoNoche(e) )


function cambiarFondoDia() {
    divPrincipal.classList.remove('background-night')
    divPrincipal.classList.add('background-day')
    
    
}
function cambiarFondoNoche(){
    divPrincipal.classList.add('background-night')
    divPrincipal.classList.remove('background-day')
}





