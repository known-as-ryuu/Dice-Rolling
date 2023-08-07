﻿function rollDice(sides) {
    var resultElement = document.getElementById('result');
    var rolledNumberElement = document.getElementById('rolledNumber');

    var result = Math.floor(Math.random() * sides) + 1;
    rolledNumberElement.textContent = 'Resultado: ' + result + ' (' + sides + ' faces)';

    resultElement.style.display = 'block';
}

function rollD100() {
    var d100Input = parseInt(document.getElementById('d100Input').value);
    var d100ResultElement = document.getElementById('d100Result');

    console.log(d100ResultElement); // Serve para verificar o elemento
    console.log(d100ResultElement !== null); // Isso verificará se o elemento não é nulo


    if (isNaN(d100Input)) {
        d100ResultElement.textContent = 'Digite um numero valido.';
    } else {
        var d100Roll = Math.floor(Math.random() * 100) + 1;
        var TriumphThreshold = 1; // Quando o número obtido é igual a 1
        var minusExtremeThreshold = d100Input * 0.02; // 2% do número obtido
        var plusExtremeThreshold = d100Input * 0.25; // 25% do número obtido
        var minusGoodThreshold = d100Input * 0.26; // 26% do número obtido
        var plusGoodThreshold = d100Input * 0.5; // 50% do número obtido
        var minusNormalThreshold = d100Input * 0.51; // 51% do número obtido
        var plusNormalThreshold = d100Input * 1; // 100% do número obtido

        var minusTinyFailureThreshold = d100Input * 1.01; // 101% do número obtido
        var plusTinyFailureThreshold = d100Input * 1.24; // 124% do número obtido
        var minusFailureThreshold = d100Input * 1.25; // 125% do número obtido
        var plusFailureThreshold = d100Input * 1.49; // 149% do número obtido
        var minusBigFailureThreshold = d100Input * 1.50; // 150% do número obtido
        var plusBigFailureThreshold = d100Input * 1.99; // 199% do número obtido
        var DisasterThreshold = 100 // Quando número obtido é igual a 100

        var resultText = 'Resultado: ' + d100Roll;

        console.log(d100Roll)
        if (d100Roll === TriumphThreshold) {
            resultText += ' - Triunfo!!! 👑';
        } else if (d100Roll === DisasterThreshold) {
            resultText += ' - Desastre!!! ⚰️';
        } else if (d100Roll >= minusGoodThreshold && d100Roll) {
            resultText += ' - Bom';
        } else if (d100Roll >= minusExtremeThreshold && d100Roll) {
            resultText += ' - Extremo';
        } else if (d100Roll >= minusNormalThreshold && d100Roll) {
            resultText += ' - Normal';
        } else if (d100Roll >= minusTinyFailureThreshold && d100Roll) {
            resultText += ' - Pequena Falha';
        } else if (d100Roll >= minusFailureThreshold && d100Roll) {
            resultText += ' - Falha';
        } else if (d100Roll >= minusBigFailureThreshold && d100Roll) {
            resultText += ' - Grande Falha';
        }

        }

        d100ResultElement.textContent = resultText;
    }
}
