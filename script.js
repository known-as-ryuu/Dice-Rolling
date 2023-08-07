function rollDice(sides) {
    var resultElement = document.getElementById('result');
    var rolledNumberElement = document.getElementById('rolledNumber');

    var result = Math.floor(Math.random() * sides) + 1;
    rolledNumberElement.textContent = 'Resultado: ' + result + ' (' + sides + ' faces)';

    resultElement.style.display = 'block';
}

function rollD100() {
    var d100Input = parseInt(document.getElementById('d100Input').value);
    var d100ResultElement = document.getElementById('d100Result');

    if (isNaN(d100Input)) {
        d100ResultElement.textContent = 'Digite um número válido.';
    } else {
        var d100Roll = Math.floor(Math.random() * 100) + 1;
        var goodThreshold = d100Input * 0.26; // 26% do número dado
        var successThreshold = d100Input * 0.5; // 50% do número dado
        var extremoThreshold = d100Input * 0.75; // 75% do número dado
        var pequenaFalhaThreshold = d100Input * 0.1; // 10% do número dado

        var resultText = 'Resultado do d100: ' + d100Roll;

        if (d100Roll <= 50 && d100Roll >= pequenaFalhaThreshold) {
            resultText += ' - Pequena Falha';
        }

        if (d100Roll > 50 && d100Roll <= extremoThreshold) {
            resultText += ' - Extremo';
        }

        if (d100Roll > 75) {
            resultText += ' - Sucesso';
        }

        if (d100Roll >= successThreshold) {
            resultText += ' - Bom';
        }

        d100ResultElement.textContent = resultText;
    }
}
