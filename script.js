const calcular = document.getElementById('calcular')
const nightDay = document.getElementById('nightDay')



function imc() {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (!nome.value && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2)

        let classificacao = ''

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.'
        } else if (valorIMC < 25) {
            classificacao = 'Peso Ideal'
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso'
        } else if (valorIMC < 35) {
            classificacao = 'obesidade grau 1º'
        } else if (valorIMC < 40) {
            classificacao = 'Procure um NUTRICIONISTA'
        } else {
            classificacao = 'obesidade morbida ... CUIDADO!!'
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao} `

    } else {
        resultado.textContent = `Preencha todos os campos!!`

    }

}

nightDay.addEventListener('click', () => {
    const body = document.querySelector('body')

    body.classList.toggle('ativo')
})

calcular.addEventListener('click', imc)
