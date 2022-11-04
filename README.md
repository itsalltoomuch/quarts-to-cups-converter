### This is a sample of using HTML + JS file to make simple web page. It provides a tool to convert quarts to cups.

## Briefly introduction: 
Reference: https://www.calculatorful.com/quarts-to-cups

Quarts and cups are commonly used to measure ingredient when cooking.

The quart is an English unit of volume which equals a quarter gallon. There are 3 common kinds of quarts currently used: 
- The liquid quart
- Dry quart of the customary system of the US
- The imperial quart of the British imperial system.

The cup is a unit measurement of volume, which is commonly used in cooking and serving. 

So, [how many cups in a quart](https://www.calculatorful.com/quarts-to-cups)? In general, when using cup and quart for the same country, one quart equals 4 cups

Since there are 4 cups in a quart, here is the formula:
```
1 quart = 4 cups
```
## Steps to create the website
1. Create a html file with the content
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quarts to Cups Converter</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <label for="v" id="variable">Quarts</label>
  <input type="number" id="v"><br><br>

  <button id="btn">Calculate</button>

  <p id="result"></p>
  <script src="app.js"></script>
</body>
</html>
```
2. Create js file to define the function
```
const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

let quarts = v; 

btn.addEventListener('click', function() {
  result.textContent = `Cups = ${calculateCups().toFixed(5)}`;
})

function calculateCups() {
  return Number(quarts.value) * 4;
}
```