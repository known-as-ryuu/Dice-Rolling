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
    console.log(d100ResultElement !== null);

    if (isNaN(d100Input)) {
        d100ResultElement.textContent = 'Digite um numero valido.';
    } else {
        var d100Roll = Math.floor(Math.random() * 100) + 1;
        console.log(d100Roll);
        var TriumphThreshold = 1;
        var DisasterThreshold = 100;
        var minusExtremeThreshold = d100Input * 0.02;
        var plusExtremeThreshold = d100Input * 0.25;
        var minusGoodThreshold = d100Input * 0.26;
        var plusGoodThreshold = d100Input * 0.5;
        var minusNormalThreshold = d100Input * 0.51;
        var plusNormalThreshold = d100Input * 1;
        var minusTinyFailureThreshold = d100Input * 1.01;
        var plusTinyFailureThreshold = d100Input * 1.24;
        var minusFailureThreshold = d100Input * 1.25;
        var plusFailureThreshold = d100Input * 1.49;
        var minusBigFailureThreshold = d100Input * 1.50;
        var plusBigFailureThreshold = d100Input * 1.99;

        var resultText = 'Resultado: ' + d100Roll;

        if (d100Roll === TriumphThreshold) {
            resultText += ' - Triunfo!!! 👑';
        } else if (d100Roll === DisasterThreshold) {
            resultText += ' - Desastre!!! ⚰️';
        } else if (d100Roll >= minusBigFailureThreshold && d100Roll <= minusFailureThreshold) {
            resultText += ' - Grande Falha';
        } else if (d100Roll >= minusFailureThreshold && d100Roll <= plusFailureThreshold) {
            resultText += ' - Falha';
        } else if (d100Roll >= minusTinyFailureThreshold && d100Roll <= plusTinyFailureThreshold) {
            resultText += ' - Pequena Falha';
        } else if (d100Roll >= minusExtremeThreshold && d100Roll <= plusExtremeThreshold) {
            resultText += ' - Extremo';
        } else if (d100Roll >= minusGoodThreshold && d100Roll <= plusGoodThreshold) {
            resultText += ' - Bom';
        } else if (d100Roll >= minusNormalThreshold && d100Roll <= plusNormalThreshold) {
            resultText += ' - Normal';
        }

        d100ResultElement.textContent = resultText;
    }
}
