function calculate() {
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Check if input values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers");
      return;
    }

    // Calculate sum
    var sum = num1 + num2;

    // Display result
    document.getElementById('result').innerHTML = "Sum: " + sum;
  }

function subtract() {
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Check if input values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers");
      return;
    }

    // subtract
    var result = num1 - num2;

    // Display result
    document.getElementById('result').innerHTML = "Result: " + result;
  
  }
  function exchangeValues() {
    // Get input values
    var value1 = document.getElementById('num1').value;
    var value2 = document.getElementById('num2').value;

    // Exchange values
    document.getElementById('num1').value = value2;
    document.getElementById('num2').value = value1;
  }