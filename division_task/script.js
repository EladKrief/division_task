function numCalculate() {
  let num1 = prompt(`Enter first number`);
  let num2 = prompt(`Enter Second number`);

  if (num1 % num2 == 1) {
    alert(`there's a remainder`);
  } else if (num1 % num2 == 0) alert(`there's no remainder`);
}
