function rollDice(sides) {
    var resultElement = document.getElementById('result');
    var result = Math.floor(Math.random() * sides) + 1;
    resultElement.textContent = 'Rolagem: ' + result;
}
