function rollDice(sides) {
    var resultElement = document.getElementById('result');
    var rolledNumberElement = document.getElementById('rolledNumber');

    var result = Math.floor(Math.random() * sides) + 1;
    rolledNumberElement.textContent = 'N�mero Rolado: ' + result + ' (' + sides + ' faces)';

    resultElement.style.display = 'block';
}

function calculate() {
    var inputNumber = parseInt(document.getElementById('inputNumber').value);
    var calcResultElement = document.getElementById('calcResult');

    if (isNaN(inputNumber)) {
        calcResultElement.textContent = 'Digite um n�mero v�lido.';
    } else {
        var result = inputNumber * 2; // Exemplo de c�lculo simples
        calcResultElement.textContent = 'Resultado do c�lculo: ' + result;
    }
}
