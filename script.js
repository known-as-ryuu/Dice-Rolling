
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


// DADO NORMAL
function roll() {
    var d100Input = parseInt(document.getElementById('d100Input').value);
    var d100ResultElement = document.getElementById('d100Result');


  if (isNaN(d100Input)) {
        d100ResultElement.textContent = 'Digite um número válido.';
  } else {
        var d100Roll = Math.floor(Math.random() * 100) + 1;
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
      console.log(resultText, texto)
    }
}


// DADO TABELA
function rollTableForParameter(parameterName, resultElementId) {
  var parameterValue = parseInt(document.getElementById(parameterName).value);
  var d100ResultElement = document.getElementById(resultElementId);

  if (isNaN(parameterValue)) {
    d100ResultElement.textContent = 'Digite um número válido.';
    return;
  }

  var d100Roll = Math.floor(Math.random() * 100) + 1;
  var resultText = 'Resultado: ' + d100Roll;

  if (d100Roll === 1) {
    resultText += ' - Triunfo!!! 👑';
  } else if (d100Roll === 100) {
    resultText += ' - Desastre!!! ⚰️';
  } else {
    if (d100Roll >= parameterValue * 1.50 && d100Roll <= 99) {
      resultText += ' - Grande Falha';
    } else if (d100Roll >= parameterValue * 1.25 && d100Roll <= parameterValue * 1.499) {
      resultText += ' - Falha';
    } else if (d100Roll >= parameterValue * 1.01 && d100Roll <= parameterValue * 1.249) {
      resultText += ' - Pequena Falha';
    } else if (d100Roll >= parameterValue * 0.02 && d100Roll <= parameterValue * 0.25) {
      resultText += ' - Extremo';
    } else if (d100Roll >= parameterValue * 0.251 && d100Roll <= parameterValue * 0.5) {
      resultText += ' - Bom';
    } else if (d100Roll >= parameterValue * 0.501 && d100Roll <= parameterValue * 1) {
      resultText += ' - Normal';
    }
  }

  d100ResultElement.textContent = resultText;
  console.log(resultText, texto);
}

// 1ª Tabela
function rollD100() {
  texto = "(Default)"
  roll()
}
function rollForça() {
  texto = "(Força)"
  rollTableForParameter('Força', 'd100Result')
}
function rollMagia() {
  texto = "(Magia)"
  rollTableForParameter('Magia', 'd100Result')
}
function rollEsquiva() {
  texto = "(Esquiva)"
  rollTableForParameter('Esquiva', 'd100Result')
}
function rollResistência() {
  texto = "(Resistência)"
  rollTableForParameter('Resistência', 'd100Result')
}
function rollDestreza() {
  texto = "(Destreza)"
  rollTableForParameter('Destreza', 'd100Result')
}
function rollProcurar() {
  texto = "(Procurar)"
  rollTableForParameter('Procurar', 'd100Result')
}
function rollEscutar() {
  texto = "(Escutar)"
  rollTableForParameter('Escutar', 'd100Result')
}
function rollFurtividade() {
  texto = "(Furtividade)"
  rollTableForParameter('Furtividade', 'd100Result')
}
function rollMedicina() {
  texto = "(Medicina)"
  rollTableForParameter('Medicina', 'd100Result')
}
function rollLábia() {
  texto = "(Lábia)"
  rollTableForParameter('Lábia', 'd100Result')
}


// 2ª TABELA
function rollPercepção() {
  texto = "(Percepção)"
  rollTableForParameter('Percepção', 'd100Result')
}
function rollAtirar() {
  texto = "(Atirar)"
  rollTableForParameter('Atirar', 'd100Result')
}
function rollMirar() {
  texto = "(Mirar)"
  rollTableForParameter('Mirar', 'd100Result')
}
function rollIntimidar() {
  texto = "(Intimidar)"
  rollTableForParameter('Intimidar', 'd100Result')
}
function rollRoubar() {
  texto = "(Roubar)"
  rollTableForParameter('Roubar', 'd100Result')
}


 // 1o botao
function clearTable1() {
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

  // Limpa o conteúdo da caixa de texto
  ForçaElement.value = ''; 
  MagiaElement.value = '';
  EsquivaElement.value = '';
  ResistenciaElement.value = '';
  DestrezaElement.value = '';
  ProcurarElement.value = '';
  EscutarElement.value = '';
  FurtividadeElement.value = '';
  MedicinaElement.value = '';
  LabiaElement.value = '';

  // Remove os dados armazenados
  localStorage.removeItem('valorForça'); 
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
 // 2o botao
function clearTable2() {
  const PercepcaoElement = document.getElementById("Percepção");
  const AtirarElement = document.getElementById("Atirar");
  const MirarElement = document.getElementById("Mirar");
  const IntimidarElement = document.getElementById("Intimidar");
  const RoubarElement = document.getElementById("Roubar"); 

  PercepcaoElement.value = '';
  AtirarElement.value = '';
  MirarElement.value = '';
  IntimidarElement.value = '';
  RoubarElement.value = '';

  localStorage.removeItem('valorPercepcao');
  localStorage.removeItem('valorAtirar');
  localStorage.removeItem('valorMirar');
  localStorage.removeItem('valorIntimidar');
  localStorage.removeItem('valorRoubar');

}

// iguala os valores dos elementos no html às constantes criadas
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

const PercepcaoElement = document.getElementById("Percepção");
const AtirarElement = document.getElementById("Atirar");
const MirarElement = document.getElementById("Mirar");
const IntimidarElement = document.getElementById("Intimidar");
const RoubarElement = document.getElementById("Roubar");



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



  if (localStorage.getItem("valorPercepcao")) {
    PercepcaoElement.value = localStorage.getItem("valorPercepcao");
}

if (localStorage.getItem("valorAtirar")) {
    AtirarElement.value = localStorage.getItem("valorAtirar");
}

if (localStorage.getItem("valorMirar")) {
    MirarElement.value = localStorage.getItem("valorMirar");
}

if (localStorage.getItem("valorIntimidar")) {
    IntimidarElement.value = localStorage.getItem("valorIntimidar");
}

if (localStorage.getItem("valorRoubar")) {
    RoubarElement.value = localStorage.getItem("valorRoubar");
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
  localStorage.setItem("valorEscutar", EscutarElement.value);
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



PercepcaoElement.addEventListener("input", () => {
  localStorage.setItem("valorPercepcao", PercepcaoElement.value);
});

AtirarElement.addEventListener("input", () => {
  localStorage.setItem("valorAtirar", AtirarElement.value);
});

MirarElement.addEventListener("input", () => {
  localStorage.setItem("valorMirar", MirarElement.value);
});

IntimidarElement.addEventListener("input", () => {
  localStorage.setItem("valorIntimidar", IntimidarElement.value);
});

RoubarElement.addEventListener("input", () => {
  localStorage.setItem("valorRoubar", RoubarElement.value);
});


// Botao Hidden

function toggleBackground() {
  const inputs = document.querySelectorAll('.d100Table');
  
  inputs.forEach(input => {
    input.classList.toggle('black-bg'); // Alterna a classe para cada input individualmente

  });
  // Vê se o input tem a clase 'black-bg' e armazena o estado no localStorage ('true' ou 'false')
  const isBlackBackground = inputs[0].classList.contains('black-bg');
  localStorage.setItem("valorBg", isBlackBackground);
}

// Verifica se valorBg esta armazenado no LocalStorage ao carregar a página
const valorBg = localStorage.getItem("valorBg");

if (valorBg === "true") {
  // Se valorBg for "true", significa que o background deve estar preto
  const inputs = document.querySelectorAll('.d100Table');
  inputs.forEach(input => {
    input.classList.add('black-bg')
  })
}

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});


// --------------------------------------------------
// ----------------- RANDOMIZADOR -------------------
// --------------------------------------------------
// Acessando elementos do HTML
const minInput = document.getElementById("minInput");
const maxInput = document.getElementById("maxInput");
const randomButton = document.getElementById("randomButton");
const result = document.getElementById("randomResult");

// Adicionando um evento de clique ao botão
randomButton.addEventListener("click", function() {
  const min = parseFloat(minInput.value);
  const max = parseFloat(maxInput.value);

  if (isNaN(min) || isNaN(max)) {
      result.innerHTML = "Insira valores válidos.";
  } else if (min >= max) {
      result.innerHTML = "O valor mínimo deve ser menor que o valor máximo.";
  } else {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      result.innerHTML = `<i>Resultado: <span class="randomNumber-Color">${randomNumber}</span> - Gongástico!!</i>`;
  }
});