var sumIt = 1;
var subtractIt = 2;
var multiplyIt = 3;
var divideIt = 4;
var square = 5;
var squareRoot = 6;
var squareRoot3 = 7;

var operatorOpt = prompt(`Select operator : 
    1.Penjumlahan
    2.Pengurangan
    3.Pembagian
    4.Perkalian
    5.Pangkat 2
    6.Akar 2
    7.Akar 3
`);

function showResult(whatResult) {
  console.log(whatResult);
  document.write(whatResult);
  document.write("<br>");
}

var doSomething = function (num1, num2) {
  if (operatorOpt == sumIt) {
    // Kak Gusti Silahkan diisi
  } else if (operatorOpt == subtractIt) {
    showResult("The result is: " + (num1 - num2));
  } else if (operatorOpt == multiplyIt) {
    // Kak raymond Silahkan diisi
  } else if (operatorOpt == divideIt) {
    // Kak dimas Silahkan diisi
  } else if (operatorOpt == square) {
    // Kak Evelio Silahkan diisi
  } else if (operatorOpt) {
    // Kak Rais Silahkan disi
  } else if (operatorOpt == squareRoot3) {
    showResult("The result is: " + Math.cbrt(num1));
  } else {
    console.log("Tidak Menerima Input");
  }
};

doSomething(
  parseInt(prompt("Enter first number: ")),
  parseInt(prompt("Enter second number: "))
);
