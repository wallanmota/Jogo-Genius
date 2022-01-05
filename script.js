let order = [];
let clickedOrder = [];
let score = 0

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')


let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4) //flor(num inteiro) - random * 4 (sorteia um num d 0 a 3)
    //Atrinuindo o numero da ordem que gerou ao proximo da ordem que vai vir
    order[order.length] = colorOrder
    clickedOrder = []

    //Acender a cor que corresponde ao numero sorteado
    for(let i in order){
        let elementColor = createElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

let lightColor = (element, number) => {
    number = number * 500
    setTimeout(()=>{
        element.classList.add('selected')
    }, number - 250)
    setTimeout(()=>{
        element.classList.remove('selected')
    })
}