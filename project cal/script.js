const display = document.getElementById("display");

/* APPEND VALUE */
function appendValue(value) {
  display.value += value;
}

/* CLEAR DISPLAY */
function clearDisplay() {
  display.value = "";
}

/* DELETE LAST CHARACTER */
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

/* CALCULATE */
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

/* KEYBOARD SUPPORT */
document.addEventListener("keydown", function(e) {
  if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
    appendValue(e.key);
  }
  if (e.key === "Enter") {
    calculate();
  }
  if (e.key === "Backspace") {
    deleteLast();
  }
  if (e.key === "Escape") {
    clearDisplay();
  }
});