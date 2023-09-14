function rollDice(sides) {
    var resultElement = document.getElementById('result');
    var rolledNumberElement = document.getElementById('rolledNumber');
    var clearButton = document.getElementById('clearResultButton');

    var result = Math.floor(Math.random() * sides) + 1;
    rolledNumberElement.textContent = 'Resultado: ' + result + ' (d'+ sides +')'; // Resultado: 5 (d10)

    resultElement.style.display = 'block';
    clearButton.style.display = 'inline-block'; // Exibe o botão de limpar
}
function clearResults() {
    var resultElement = document.getElementById('result');
    var rolledNumberElement = document.getElementById('rolledNumber');
    var clearButton = document.getElementById('clearResultButton');

    resultElement.style.display = 'none';
    rolledNumberElement.textContent = '';
    clearButton.style.display = 'none'; // Oculta o botao de limpar outra vez
}

function rollD100() {
    var d100Input = parseInt(document.getElementById('d100Input').value);
    var d100ResultElement = document.getElementById('d100Result');
    console.log(d100ResultElement !== null);

    console.log('d100Input:', d100Input);

    if (isNaN(d100Input)) {
        d100ResultElement.textContent = 'Digite um número válido.';
    } else {
        var d100Roll = Math.floor(Math.random() * 100) + 1;
        console.log(d100Roll);
        var TriumphThreshold = 1;
        var DisasterThreshold = 100;
        var minusExtremeThreshold = d100Input * 0.02;
        var plusExtremeThreshold = d100Input * 0.25;
        var minusGoodThreshold = d100Input * 0.251;
        var plusGoodThreshold = d100Input * 0.5;
        var minusNormalThreshold = d100Input * 0.501;
        var plusNormalThreshold = d100Input * 1;
        var minusTinyFailureThreshold = d100Input * 1.01;
        var plusTinyFailureThreshold = d100Input * 1.249;
        var minusFailureThreshold = d100Input * 1.25;
        var plusFailureThreshold = d100Input * 1.499;
        var minusBigFailureThreshold = d100Input * 1.50;
        var plusBigFailureThreshold = 99;;

        var resultText = 'Resultado: ' + d100Roll;

        if (d100Roll === TriumphThreshold) {
            resultText += ' - Triunfo!!! 👑';
        } else if (d100Roll === DisasterThreshold) {
            resultText += ' - Desastre!!! ⚰️';
        } else if (d100Roll >= minusBigFailureThreshold && d100Roll <= plusBigFailureThreshold) {
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
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});


function clearTable() {
  const ForçaElement = document.getElementById("Força")
  const MagiaElement = document.getElementById("Magia");
  const EsquivaElement = document.getElementById("Esquiva");
  const ResistenciaElement = document.getElementById("Resistência");
  const DestrezaElement = document.getElementById("Destreza");
  const ProcurarElement = document.getElementById("Procurar");
  const EscutarElement = document.getElementById("Escutar");
  const FurtividadeElement = document.getElementById("Furtividade");
  const MedicinaElement = document.getElementById("Medicina");
  const LabiaElement = document.getElementById("Lábia");
  const ModoElement = document.getElementById("Modo");


  ForçaElement.value = ''; // Limpa o conteúdo da caixa de texto
  MagiaElement.value = '';
  EsquivaElement.value = '';
  ResistenciaElement.value = '';
  DestrezaElement.value = '';
  ProcurarElement.value = '';
  EscutarElement.value = '';
  FurtividadeElement.value = '';
  MedicinaElement.value = '';
  LabiaElement.value = '';
  ModoElement.value = '';

  localStorage.removeItem('valorForça'); // Remove os dados armazenados
  localStorage.removeItem('valorMagia');
  localStorage.removeItem('valorEsquiva');
  localStorage.removeItem('valorResistencia');
  localStorage.removeItem('valorDestreza');
  localStorage.removeItem('valorProcurar');
  localStorage.removeItem('valorEscutar');
  localStorage.removeItem('valorFurtividade');
  localStorage.removeItem('valorMedicina');
  localStorage.removeItem('valorLabia');
  localStorage.removeItem('valorModo');
}


// iguala os valores dos elementos no html às constantes criadas<
const ForçaElement = document.getElementById("Força");
const MagiaElement = document.getElementById("Magia");
const EsquivaElement = document.getElementById("Esquiva");
const ResistenciaElement = document.getElementById("Resistência");
const DestrezaElement = document.getElementById("Destreza");
const ProcurarElement = document.getElementById("Procurar");
const EscutarElement = document.getElementById("Escutar");
const FurtividadeElement = document.getElementById("Furtividade");
const MedicinaElement = document.getElementById("Medicina");
const LabiaElement = document.getElementById("Lábia");
const ModoElement = document.getElementById("Modo");

// verifica se existem valores no localStorage e, se houver, preenche os campos de input
if (localStorage.getItem("valorForça")) {
    ForçaElement.value = localStorage.getItem("valorForça");
  }
if (localStorage.getItem("valorMagia")) {
    MagiaElement.value = localStorage.getItem("valorMagia");
  }

if (localStorage.getItem("valorEsquiva")) {
    EsquivaElement.value = localStorage.getItem("valorEsquiva");
  }

if (localStorage.getItem("valorResistencia")) {
    ResistenciaElement.value = localStorage.getItem("valorResistencia");
  }

if (localStorage.getItem("valorDestreza")) {
    DestrezaElement.value = localStorage.getItem("valorDestreza");
  }

if (localStorage.getItem("valorProcurar")) {
    ProcurarElement.value = localStorage.getItem("valorProcurar");
  }

if (localStorage.getItem("valorEscutar")) {
    EscutarElement.value = localStorage.getItem("valorEscutar");
  }

if (localStorage.getItem("valorFurtividade")) {
    FurtividadeElement.value = localStorage.getItem("valorFurtividade");
  }

if (localStorage.getItem("valorMedicina")) {
    MedicinaElement.value = localStorage.getItem("valorMedicina");
  }

if (localStorage.getItem("valorLabia")) {
    LabiaElement.value = localStorage.getItem("valorLabia");
  }

if (localStorage.getItem("valorModo")) {
    ModoElement.value = localStorage.getItem("valorModo");
  }


// adiciona um evento para salvar os valores no localStorage quando forem inseridos dados
ForçaElement.addEventListener("input", () => {
    localStorage.setItem("valorForça", ForçaElement.value);
  });

MagiaElement.addEventListener("input", () => {
    localStorage.setItem("valorMagia", MagiaElement.value);
  });

EsquivaElement.addEventListener("input", () => {
    localStorage.setItem("valorEsquiva", EsquivaElement.value);
  });

ResistenciaElement.addEventListener("input", () => {
    localStorage.setItem("valorResistencia", ResistenciaElement.value);
  });

DestrezaElement.addEventListener("input", () =>{
  localStorage.setItem("valorDestreza", DestrezaElement.value);
});

ProcurarElement.addEventListener("input", () => {
  localStorage.setItem("valorProcurar", ProcurarElement.value);
});

EscutarElement.addEventListener("input", () => {
  localStorage.setItem("valorEscutar", EsquivaElement.value);
});

FurtividadeElement.addEventListener("input", () => {
  localStorage.setItem("valorFurtividade", FurtividadeElement.value);
});

MedicinaElement.addEventListener("input", () => {
  localStorage.setItem("valorMedicina", MedicinaElement.value);
});

LabiaElement.addEventListener("input", () => {
  localStorage.setItem("valorLabia", LabiaElement.value);
});

ModoElement.addEventListener("input", () => {
  localStorage.setItem("valorModo", ModoElement.value);
});


