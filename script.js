
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
    // } else if (d100Roll >= parameterValue * 0.501 && d100Roll <= parameterValue * 1) {
    //   resultText += ' - <b><span class="red">Normal</span></b>';

    // }
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

function rollHabilidade() {
  texto = "(Habilidade)"
  rollTableForParameter('Habilidade', 'd100Result')
}
function rollInteligência() {
  texto = "(Inteligência)"
  rollTableForParameter('Inteligência', 'd100Result')
}
function rollFlow() {
  texto = "(Flow)"
  rollTableForParameter('Flow', 'd100Result')
}
function rollMovimentação() {
  texto = "(Movimentação)"
  rollTableForParameter('Movimentação', 'd100Result')
}
function rollImobilizar() {
  texto = "(Imobilizar)"
  rollTableForParameter('Imobilizar', 'd100Result')
}
function rollSorte() {
  texto = "(Sorte)"
  rollTableForParameter('Sorte', 'd100Result')
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

  const HabilidadeElement = document.getElementById("Habilidade");
  const InteligênciaElement = document.getElementById("Inteligência");
  const FlowElement = document.getElementById("Flow");
  const MovimentaçãoElement = document.getElementById("Movimentação");
  const ImobilizarElement = document.getElementById("Imobilizar");
  const SorteElement = document.getElementById("Sorte");

  PercepcaoElement.value = '';
  AtirarElement.value = '';
  MirarElement.value = '';
  IntimidarElement.value = '';
  RoubarElement.value = '';

  HabilidadeElement.value = '';
  InteligênciaElement.value = ''; 
  FlowElement.value = ''; 
  MovimentaçãoElement.value = ''; 
  ImobilizarElement.value = '';
  SorteElement.value = ''; 


  localStorage.removeItem('valorPercepcao');
  localStorage.removeItem('valorAtirar');
  localStorage.removeItem('valorMirar');
  localStorage.removeItem('valorIntimidar');
  localStorage.removeItem('valorRoubar');
  
  localStorage.removeItem('valorHabilidade');
  localStorage.removeItem('valorInteligência');
  localStorage.removeItem('valorFlow');
  localStorage.removeItem('valorMovimentação');
  localStorage.removeItem('valorImobilizar');
  localStorage.removeItem('valorSorte');
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

const HabilidadeElement = document.getElementById("Habilidade");
const InteligênciaElement = document.getElementById("Inteligência");
const FlowElement = document.getElementById("Flow");
const MovimentaçãoElement = document.getElementById("Movimentação");
const ImobilizarElement = document.getElementById("Imobilizar");
const SorteElement = document.getElementById("Sorte");


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



if (localStorage.getItem("valorHabilidade")) {
  HabilidadeElement.value = localStorage.getItem("valorHabilidade");
}
if (localStorage.getItem("valorInteligência")) {
  InteligênciaElement.value = localStorage.getItem("valorInteligência");
}
if (localStorage.getItem("valorFlow")) {
  FlowElement.value = localStorage.getItem("valorFlow");
}
if (localStorage.getItem("valorMovimentação")) {
  MovimentaçãoElement.value = localStorage.getItem("valorMovimentação");
}
if (localStorage.getItem("valorImobilizar")) {
  ImobilizarElement.value = localStorage.getItem("valorImobilizar");
}
if (localStorage.getItem("valorSorte")) {
  SorteElement.value = localStorage.getItem("valorSorte");
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


HabilidadeElement.addEventListener("input", () => {
  localStorage.setItem("valorHabilidade", HabilidadeElement.value);
});
InteligênciaElement.addEventListener("input", () => {
  localStorage.setItem("valorInteligência", Inteligência.value);
});
FlowElement.addEventListener("input", () => {
  localStorage.setItem("valorFlow", FlowElement.value);
});
MovimentaçãoElement.addEventListener("input", () => {
  localStorage.setItem("valorMovimentação", MovimentaçãoElement.value);
});
ImobilizarElement.addEventListener("input", () => {
  localStorage.setItem("valorImobilizar", ImobilizarElement.value);
});
SorteElement.addEventListener("input", () => {
  localStorage.setItem("valorSorte", SorteElement.value);
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




// --------------------------------------------------
// -------------------- MACROS ----------------------
// --------------------------------------------------

    // Função para criar uma nova macro
    function createMacro(name, formula) {
      return { name, formula };
    }

    // Função para adicionar uma macro à lista
    function addMacroToList(macro) {
      const macrosList = document.getElementById('macros');
      const listItem = document.createElement('li');
      listItem.classList.add('macro-item'); // Adiciona a classe para layout flexível

      // Adicionar botão para rolar a macro
      const rollButton = document.createElement('button');
      rollButton.classList.add('rolarBtn');
      rollButton.onclick = function () {
        rollMacro(macro);
      };
      const rollImage = document.createElement('img');
      rollImage.src = '/Data/dice.png';
      rollImage.alt = 'Rolar';
      rollImage.classList.add('resized');
      rollButton.appendChild(rollImage);

      // Adicionar texto da macro
      const macroText = document.createElement('span');
      macroText.textContent = `${macro.name} - (${macro.formula})`;

      // Adicionar botão para apagar a macro
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delBtn');
      deleteButton.onclick = function () {
        deleteMacro(macro);
      };
      const delImg = document.createElement('img');
      delImg.src = '/Data/clear.png';
      delImg.alt = 'Apagar';
      delImg.classList.add('resized');
      deleteButton.appendChild(delImg);


      listItem.appendChild(rollButton);
      listItem.appendChild(macroText);
      listItem.appendChild(deleteButton);

      macrosList.appendChild(listItem);
    }

///////////////////////////////////
////////// - APAGAR - /////////////
///////////////////////////////////

    // Função para apagar uma macro individualmente
    function deleteMacro(macro) {
      const macrosList = document.getElementById('macros');
      const listItems = macrosList.getElementsByTagName('li');

      for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        const [name] = listItem.textContent.split(' - ')[0].split(' - ');

        if (name === macro.name) {
          macrosList.removeChild(listItem);
          // Remover a macro salva localmente
          removeMacroLocally(macro);
          break;  // Interromper o loop após encontrar a macro correta
        }
      }
    }
    // Função para remover uma macro salva localmente
    function removeMacroLocally(macro) {
      const savedMacros = JSON.parse(localStorage.getItem('savedMacros')) || [];
      const updatedMacros = savedMacros.filter(savedMacro => savedMacro.name !== macro.name);
      localStorage.setItem('savedMacros', JSON.stringify(updatedMacros));
    }


///////////////////////////////////
/////////// - ROLAR - /////////////
///////////////////////////////////

// Função para rolar uma macro individualmente
function rollMacro(macro) {
  const result = calculateResult(macro.formula);

  const resultsList = document.getElementById('results');
  const resultItem = document.createElement('li');

  // Adicionar o nome da macro com a classe 'macro-name' (cinza)
  const nameSpan = document.createElement('span');
  nameSpan.classList.add('macro-name');
  nameSpan.textContent = `${macro.name}: `;
  resultItem.appendChild(nameSpan);

  // Adicionar o resultado com a classe 'macro-result' (vermelho)
  const resultSpan = document.createElement('span');
  resultSpan.classList.add('macro-result');
  resultSpan.textContent = result;
  resultItem.appendChild(resultSpan);

  resultsList.appendChild(resultItem);
}


// Função para calcular o resultado da fórmula
function calculateResult(formula) {
  const match = formula.match(/(\d+)-(\d+)([+\-]\d+)?/);

  if (match) {
    const minValue = parseInt(match[1]);
    const maxValue = parseInt(match[2]);
    const modifier = match[3] ? parseInt(match[3]) : 0;

    // Verificar se os valores fornecidos são válidos
    if (!isNaN(minValue) && !isNaN(maxValue) && !isNaN(modifier)) {
      // Calcular um valor aleatório dentro do intervalo e adicionar o modificador
      const result = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue + modifier;
      return result;
    } else {
      return "Valores inválidos no intervalo";
    }
  } else {
    return "Fórmula inválida";
  }
}

    // Função para salvar macros localmente
    function saveMacroLocally(macro) {
      // Utilize localStorage para armazenar macros localmente
      const savedMacros = JSON.parse(localStorage.getItem('savedMacros')) || [];
      savedMacros.push(macro);
      localStorage.setItem('savedMacros', JSON.stringify(savedMacros));
    }

    // Função para carregar macros salvas localmente
    function loadSavedMacros() {
      const savedMacros = JSON.parse(localStorage.getItem('savedMacros')) || [];
      savedMacros.forEach(macro => {
        addMacroToList(macro);
      });
    }

    // Manipular o envio do formulário
    document.getElementById('new-macro-form').addEventListener('submit', function (event) {
      event.preventDefault(); // Evitar o comportamento padrão do formulário

      // Obter valores do formulário
      const name = document.getElementById('macro-name').value;
      const formula = document.getElementById('macro-formula').value;

      // Criar uma nova macro
      const newMacro = createMacro(name, formula);

      // Adicionar a nova macro à lista
      addMacroToList(newMacro);

      // Salvar a nova macro localmente
      saveMacroLocally(newMacro);

      // Limpar o formulário
      document.getElementById('new-macro-form').reset();
    });

    // Carregar macros salvas localmente ao carregar a página
    document.addEventListener('DOMContentLoaded', function () {
      loadSavedMacros();
    });


    $(document).ready(function(){
      $('#buff1 option').clone().appendTo('#buff2');
      $('#buff1 option').clone().appendTo('#buff3');
      $('#buff1 option').clone().appendTo('#buff4');
      $('#buff1 option').clone().appendTo('#buff5');
      $('#buff1 option').clone().appendTo('#buff6');
      $('#buff1 option').clone().appendTo('#buff7');
      $('#buff1 option').clone().appendTo('#buff8');
      $('#buff1 option').clone().appendTo('#buff9');
  });

      var input = document.getElementById("buff-select");
      var maxLength = parseInt(input.getAttribute("maxlength"));
  
      input.addEventListener("input", function() {
          if (input.value.length > maxLength) {
              input.value = input.value.slice(0, maxLength);
          }
      });


function notas() {
const NotasElement = document.getElementById("Notas");
if (localStorage.getItem("Notes")) {
    NotasElement.value = localStorage.getItem("Notes");
  }
  NotasElement.addEventListener("input", () => {
    localStorage.setItem("Notes", NotasElement.value);
});
}
notas()