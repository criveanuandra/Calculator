function onAddNumber(number) {
  const calculatorDisplay = document.getElementById("calculator-display");
  if (Number(calculatorDisplay.value) === 0) {
    calculatorDisplay.value = number;
  } else {
    calculatorDisplay.value = calculatorDisplay.value + number;
  }
}

function onAddOperation(operation) {
  const calculatorDisplay = document.getElementById("calculator-display");
  console.log(calculatorDisplay.value.length);
  if (isNaN(`${calculatorDisplay.value}`.substr(calculatorDisplay.value.length - 1))) {
    return;
  }
  calculatorDisplay.value = calculatorDisplay.value + operation;
}

function onCalculate() {
  const calculatorDisplay = document.getElementById("calculator-display");
  if (`${calculatorDisplay.value}`.split("+").length - 1) {
    const numbers = `${calculatorDisplay.value}`.split("+");
    calculatorDisplay.value = Number(numbers[0]) + Number(numbers[1]);
  } else if (`${calculatorDisplay.value}`.split("-").length - 1) {
    const numbers = `${calculatorDisplay.value}`.split("-");
    calculatorDisplay.value = Number(numbers[0]) - Number(numbers[1]);
  } else if (`${calculatorDisplay.value}`.split("*").length - 1) {
    const numbers = `${calculatorDisplay.value}`.split("*");
    calculatorDisplay.value = Number(numbers[0]) * Number(numbers[1]);
  } else if (`${calculatorDisplay.value}`.split("/").length - 1) {
    const numbers = `${calculatorDisplay.value}`.split("/");
    calculatorDisplay.value = Number(numbers[0]) / Number(numbers[1]);
  }
}