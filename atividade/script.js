var numero = '';
var operadorAtual = '';
var numeroAnterior = '';

function addNumero(caracter) {
    numero += caracter;
    document.getElementById('display').value = numero;
}

function limparDisplay() {
    numero = '';
    operadorAtual = '';
    numeroAnterior = '';
    document.getElementById('display').value = '';
}

function apagar() {
    let display = document.getElementById('display').value;
    numero = display.slice(0, -1);
    document.getElementById('display').value = numero;
}

function operador(op) {
    if (numero !== '') {
        operadorAtual = op;
        numeroAnterior = numero;
        numero = '';
        document.getElementById('display').value = '';
    }
}

function calcular() {
    let resultado = 0;
    let atual = parseFloat(numero);
    let anterior = parseFloat(numeroAnterior);

    if (operadorAtual === '+') {
        resultado = anterior + atual;
    } else if (operadorAtual === '-') {
        resultado = anterior - atual;
    } else if (operadorAtual === '*') {
        resultado = anterior * atual;
    } else if (operadorAtual === '/') {
        if (atual === 0) {
            document.getElementById('display').value = 'Erro: divisão por zero';
            return;
        }
        resultado = anterior / atual;
    }

    document.getElementById('display').value = resultado;
    numero = resultado.toString();
    operadorAtual = '';
    numeroAnterior = '';
}

function calcularRaiz() {
    const valorAtual = parseFloat(numero);
    if (valorAtual < 0) {
        document.getElementById('display').value = 'Erro';
    } else {
        const resultado = Math.sqrt(valorAtual);
        document.getElementById('display').value = resultado;
        numero = resultado.toString();
    }
}

function calcularPorcentagem() {
    const valorAtual = parseFloat(numero);
    const resultado = valorAtual / 100;
    document.getElementById('display').value = resultado;
    numero = resultado.toString();
}