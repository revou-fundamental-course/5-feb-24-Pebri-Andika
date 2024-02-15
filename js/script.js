document
  .getElementById("temperatureForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;
    if (celsius === "") {
      celsius = "N/A";
    }
    if (fahrenheit === "") {
      fahrenheit = "N/A";
    }
    var celsiusToFahrenheit = (celsius * 9) / 5 + 32;
    var fahrenheitToCelsius = ((fahrenheit - 32) * 5) / 9;
    var result =
      "Celsius: " +
      celsius +
      "°C = Fahrenheit: " +
      celsiusToFahrenheit.toFixed(2) +
      "°F<br>" +
      "Fahrenheit: " +
      fahrenheit +
      "°F = Celsius: " +
      fahrenheitToCelsius.toFixed(2) +
      "°C";
    document.getElementById("result").innerHTML = result;
  });

function resetForm() {
  document.getElementById("temperatureForm").reset();
  document.getElementById("result").innerHTML = "";
}

function reverseConversion() {
  var celsius = document.getElementById("celsius");
  var fahrenheit = document.getElementById("fahrenheit");
  var temp = celsius.value;
  celsius.value = fahrenheit.value;
  fahrenheit.value = temp;
  document.getElementById("result").innerHTML = "";
}
