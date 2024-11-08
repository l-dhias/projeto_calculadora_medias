const form = document.getElementById('form-atividade');

const imgAprovado = '<img src="./images/aprovado.png" alt = "Emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt = "Emoji triste" />'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinina = parseFloat(prompt("Digite a nota minima: "))

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionalinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionalinha() {
    const inputNomeAtivaidade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if (atividades.includes(inputNomeAtivaidade.value)) {
        alert(`A atividade: ${inputNomeAtivaidade.value} já foi inserida`)
    }else {
        atividades.push(inputNomeAtivaidade.value)
    notas.push(parseFloat(inputNotaAtividade.value))

    let linha = '<tr>'
    linha += `<td> ${inputNomeAtivaidade.value}</td>`
    linha += `<td> ${inputNotaAtividade.value}</td>`
    linha += `<td> ${inputNotaAtividade.value >= notaMinina ? imgAprovado : imgReprovado}</td>`
    linha += '</tr>'

    linhas += linha;
    }

    inputNomeAtivaidade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinina ? spanAprovado : spanReprovado

}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++ ){
    somaDasNotas += notas [i]
    }

    return somaDasNotas / notas.length
}