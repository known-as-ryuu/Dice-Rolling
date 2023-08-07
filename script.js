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
        d100ResultElement.textContent = 'Digite um numero valido.';
    } else {
        var d100Roll = Math.floor(Math.random() * 100) + 1;
        var TriumphThreshold = 1; // Quando o dado é igual a 1
        var minusExtremeThreshold = d100Input * 0.02; // 2% do número obtido
        var plusExtremeThreshold = d100Input * 0.25; // 25% do número obtido
        var minusGoodThreshold = d100Input * 0.26; // 26% do número obtido
        var plusGoodThreshold = d100Input * 0.5; // 50% do número obtido
        var minusNormalThreshold = d100Input * 0.51; // 51% do número obtido
        var plusNormalThreshold = d100Input * 1; // 100% do número obtido

        var minusTinyFailure = d100Input * 1.01 // 101% do número obtido
        var plusTinyFailure = d100Input * 1.24 // 124% do número obtido

        var resultText = 'Resultado: ' + d100Roll;


        if (d100Roll >= minusNormalThreshold && d100Roll >= plusNormalThreshold) {
            resultText += ' - Normal';
        }

        else if (d100Roll >= minusGoodThreshold && d100Roll >= plusGoodThreshold) {
            resultText += ' - Bom';
        }

        else if (d100Roll >= minusExtremeThreshold && d100Roll <= plusExtremeThreshold) {
            resultText += ' - Extremo';
        }

        else if (d100Roll === TriumphThreshold) {
            resultText += ' - Triunfo!!! 👑';
        } 

        else if (d100Roll >= minusTinyFailure && d100Roll >= plusTinyFailure) {
            resultText += ' - Pequena Falha';
        }

        d100ResultElement.textContent = resultText;
    }
}
