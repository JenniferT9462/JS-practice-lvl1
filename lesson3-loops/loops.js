function showNumbers() {
  const list = document.getElementById("numberList");
  list.innerHTML = ""; // clear any existing items

  for (let i = 1; i <= 10; i++) {
    const item = document.createElement("li");
    item.textContent = "Number " + i;
    list.appendChild(item);
  }
}
// 🚀 TODO CHALLENGES FOR PRACTICE

// TODO: Change the loop to count from 5 to 15 instead of 1 to 10.

// TODO: Make a new function called showEvenNumbers that shows only even numbers from 2 to 20.
    //Hint: Use (i % 2 === 0) inside the loop.

// TODO: Make a function called showCountdown that counts down from 10 to 1.

// TODO: Make a function that asks the user for a number using prompt() and then loops up to that number.

// TODO: Inside the loop, add an emoji after the number (e.g., "Number 1 🔢")

// TODO: Instead of showing "Number 1", "Number 2", etc., show "I can loop!" 10 times.

// BONUS: Add a button for each challenge on the HTML page and call the right function when clicked.

//  Tip: Only write one loop per function. Test it with `console.log()` or update the HTML just like in showNumbers().
