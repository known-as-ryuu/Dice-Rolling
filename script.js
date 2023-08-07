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
