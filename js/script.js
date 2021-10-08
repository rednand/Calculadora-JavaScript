function calcular() {
  var primeiro_numero = Number(document.getElementById("primeironumero").value); //contem o valor do primeiro número digitado
  var segundo_numero = Number(document.getElementById("segundonumero").value); //contem o valor do segundo número digitado

  var operador = document.getElementById("operadores").value; //seleciona o operador

  var result = 0; //inicia variavel que vai receber o resultado do calculo

  switch (operador) {
    case "soma":
      result = primeiro_numero + segundo_numero;
      break;
    case "subtracao":
      result = primeiro_numero - segundo_numero;
      break;
    case "multiplicacao":
      result = primeiro_numero * segundo_numero;
      break;
    case "divisao":
      if (segundo_numero != 0) {
        result = primeiro_numero / segundo_numero;
      } else {
        result = "inválido, pois não é possível realizar divisão por 0"; //substitue a div com mensagem de erro
      }
      break;
  }

  document.getElementById(
    "mostra_resultado"
  ).innerHTML = `O resultado é ${result}`; //substitue a div com o resultado
}
