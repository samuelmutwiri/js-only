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
  function multiply() {
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Check if input values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers");
      return;
    }

    // Calculate product instead of sum
    var product = num1 * num2;

    // Display result
    document.getElementById('result').innerHTML = "Product: " + product;
  }
  function divide() {
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Check if input values are valid numbers and if num2 is not zero
    if (isNaN(num1) || isNaN(num2) || num2 === 0) {
        alert("Please enter valid numbers and make sure the second number is not zero");
        return;
    }

    // Calculate division
    var divisionResult = num1 / num2;

    // Display result
    document.getElementById('result').innerHTML = "Division Result: " + divisionResult;
}
function copyToClipboard(value) {
  // Select the element whose content you want to copy
  tempInput.value = value;

  // Append the input element to the document body
  document.body.appendChild(tempInput);

  // Select the input element's content
  tempInput.select();

  // Copy the selected content to the clipboard
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(tempInput);
  // Alert the user that the content has been copied
  alert("Copied to clipboard!");
}
 