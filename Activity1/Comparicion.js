let valueA = document.getElementById("number1");
let valueB = document.getElementById("number2");
let valueC = document.getElementById("number3");
let valueD = document.getElementById("number4");
const boton = document.getElementById("boton");
let greater = document.getElementById("greaterResult");
let minior = document.getElementById("miniorResult");

boton.addEventListener("click", function () {
  let value1 = parseInt(valueA.value);
  let value2 = parseInt(valueB.value);
  let value3 = parseInt(valueC.value);
  let value4 = parseInt(valueD.value);
  let valueArray = [value1, value2, value3, value4];
  let repeated = false;
  for (
    var previousValue = 0;
    previousValue < valueArray.length;
    previousValue++
  ) {
    for (var nextValue = 0; nextValue < valueArray.length; nextValue++) {
      if (
        valueArray[previousValue] == valueArray[nextValue] &&
        previousValue != nextValue
      ) {
        repeated = true;
      }
    }
  }
  if (isNaN(value1) || isNaN(value2) || isNaN(value3) || isNaN(value4)) {
    alert("Ningún valor puede ser vacío");
  } else if (repeated == true) {
    alert("Los números deben ser diferentes");
  } else {
    let greaterValue = Math.max(...valueArray);
    let miniorValue = Math.min(...valueArray);
    greater.textContent = greaterValue;
    minior.textContent = miniorValue;
  }
});

