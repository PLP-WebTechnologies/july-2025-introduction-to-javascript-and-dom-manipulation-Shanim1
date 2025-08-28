// ==============================
// Part 1: Basics (Variables, Conditionals)
// ==============================
function checkNumber() {
  let number = prompt("Enter a number:");
  number = Number(number);

  if (number > 0) {
    document.getElementById("numberResult").textContent = number + " is Positive.";
  } else if (number < 0) {
    document.getElementById("numberResult").textContent = number + " is Negative.";
  } else {
    document.getElementById("numberResult").textContent = "The number is Zero.";
  }
}

// ==============================
// Part 2: Functions (Reusability)
// ==============================

// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to display total
function showTotal() {
  let total = calculateTotal(50, 3); // Example: price=50, qty=3
  document.getElementById("totalResult").textContent = "Total = $" + total;
}

// ==============================
// Part 3: Loops (Repetition)
// ==============================
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous countdown
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
  let li = document.createElement("li");
  li.textContent = "Go!";
  list.appendChild(li);
}

// ==============================
// Part 4: DOM Manipulation
// ==============================

// 1. Change text
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("textElement").textContent = "Text has been changed!";
});

// 2. Toggle class
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// 3. Add new item to a list
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (document.querySelectorAll("#itemList li").length + 1);
  document.getElementById("itemList").appendChild(newItem);
});
