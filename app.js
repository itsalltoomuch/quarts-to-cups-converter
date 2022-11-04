
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