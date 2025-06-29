// ✅ Repeat: Use different numbers or -, *, or /.

var num1 = 5;
var num2 = 3;
var userAnswer = prompt("What is " + num1 + " + " + num2 + "?");

if (userAnswer == num1 + num2) {
  alert("✅ Correct!");
} else {
  alert("❌ Try again.");
}
