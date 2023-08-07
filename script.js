function calculate() {
    var inputNumber = parseInt(document.getElementById('inputNumber').value);
    var calcResultElement = document.getElementById('calcResult');

    if (isNaN(inputNumber)) {
        calcResultElement.textContent = 'Digite um número válido.';
    } else {
        var result = inputNumber * 2; // Exemplo de cálculo simples
        calcResultElement.textContent = 'Resultado do cálculo: ' + result;
    }
}
