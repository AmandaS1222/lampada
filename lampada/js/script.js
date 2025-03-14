//Dom (Informar quem são os objetos que você quer movimentar)
const lampada = document.querySelector('#lampada')
const btligar = document.querySelector('#btligar')
const btdesligar = document.querySelector('#btdesligar')

//Eventos (O que eu faço no objeto e o que ele faz com isso)
btligar.addEventListener('click',ligar)
btdesligar.addEventListener('click',desligar)

//Funções ()
function ligar(){
    lampada.src = 'imagem/lampada-acesa.png'
}
function desligar(){
    lampada.src = 'imagem/lampada-apagada.png'
}