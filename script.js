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

// Cria orderm aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4) //flor(num inteiro) - random * 4 (sorteia um num d 0 a 3)
    //Atrinuindo o numero da ordem que gerou ao proximo da ordem que vai vir
    order[order.length] = colorOrder
    clickedOrder = []

    //Acender a cor que corresponde ao numero sorteado
    for(let i in order){
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}
// Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500
    setTimeout(()=>{
        element.classList.add('selected')
    }, number - 250)
    setTimeout(()=>{
        element.classList.remove('selected')
    })
}

// Checa se os botões clicados são os memos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] =! order[i]){
            lose(); //todo
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível`);
        nextLevel(); //todo
    }
}

//Clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected')

    setTimeout(()=>{
        createColorElement(color).classList.remove('selected')
    })

    checkOrder()
}