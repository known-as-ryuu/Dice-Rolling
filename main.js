function rollDice(sides) {
    var resultElement = document.getElementById('result');
    var rolledNumberElement = document.getElementById('rolledNumber');

    var result = Math.floor(Math.random() * sides) + 1;
    rolledNumberElement.textContent = 'Número Rolado: ' + result + ' (' + sides + ' faces)';

    resultElement.style.display = 'block';
}
