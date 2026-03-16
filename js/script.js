// * C to F formula: (C * 9/5) + 32
function convertToFahrenheit() {
  let c = document.getElementById("celsius").value;

  let fahrenheit = (c * 9) / 5 + 32;

  document.getElementById("returnFahrenheit").textContent =
    `Answer: ${fahrenheit.toFixed(2)} °F`;
}

//* F to C formula: (F - 32) * 5/9
function convertToCelsius() {
  let f = document.getElementById("fahrenheit").value;
  let celsius = ((f - 32) * 5) / 9;

  document.getElementById("returnCelsius").textContent =
    `Answer: ${celsius.toFixed(2)} °C`;
}
