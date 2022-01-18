function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}
console.log(add(1, 1));

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}
console.log(subtract(1, 1));

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}
console.log(multiply(1, 1));

function divide(a, b) {
  return parseFloat(a) / parseFloat(b);
}
console.log(divide(1, 2));

function operate(n1, op, n2) {
  if (
    (op == "+" || op == "-" || op == "*" || op == "/") &&
    !isNaN(n1) &&
    !isNaN(n2)
  ) {
    switch (op) {
      case "+":
        return add(n1, n2);
      case "-":
        return subtract(n1, n2);
      case "*":
        return multiply(n1, n2);
      case "/":
        return divide(n1, n2);
    }
  }
}

let Numbers = document
  .querySelectorAll(".Number")
  .forEach((item) => item.addEventListener("click", num));
let display = document.querySelector(".Display");
console.log(Numbers);
let n1 = "";
let n2 = "";

window.addEventListener("keydown", (Event) => {
  let keys = String(Event.key);
  console.log(keys);
  if (
    keys == "+" ||
    keys == "-" ||
    keys == "*" ||
    keys == "/" ||
    keys == "=" ||
    keys == "0" ||
    keys == "1" ||
    keys == "2" ||
    keys == "3" ||
    keys == "4" ||
    keys == "5" ||
    keys == "6" ||
    keys == "7" ||
    keys == "8" ||
    keys == "9" ||
    keys == "Enter" ||
    keys == "Backspace" ||
    keys == "."
  ) {
    if (keys == "+" || keys == "-" || keys == "*" || keys == "/") {
      if (op != "") {
        if (
          display.innerText.includes("+") ||
          display.innerText.includes("-") ||
          display.innerText.includes("*") ||
          display.innerText.includes("/")
        ) {
          equal();
          display.innerText += keys;
          op = keys;
        }
      } else if (op == "") {
        display.innerText += keys;
        op = keys;
      }

      console.log("operand:" + op);
    } else if (keys == "=" || keys === "Enter") {
      equal();
    } else if (
      keys == "0" ||
      keys == "1" ||
      keys == "2" ||
      keys == "3" ||
      keys == "4" ||
      keys == "5" ||
      keys == "6" ||
      keys == "7" ||
      keys == "8" ||
      keys == "9"
    ) {
      if (op == "") {
        display.innerText += keys;
        n1 += keys;
      } else if (op == "+" || op == "-" || op == "*" || op == "/") {
        if (display.innerText.includes("=")) {
          display.innerText += keys;
          n2 = display.innerText.slice(-1, display.innerText.indexOf(op));
        } else {
          display.innerText += keys;
          n2 = display.innerText.slice(display.innerText.indexOf(op) + 1);
        }
      }
    } else if (keys == "Backspace") {
      if (op == "") {
        display.innerText = display.innerText.slice(0, -1);
        n1 = display.innerText;
        console.log("yes");
      } else if (op == "+" || op == "-" || op == "*" || op == "/") {
        if (display.innerText.includes("=")) {
          display.innerText = display.innerText.slice(0, -1);
          n2 = display.innerText.slice(-1, display.innerText.indexOf(op));
        } else {
          display.innerText = display.innerText.slice(0, -1);
          n2 = display.innerText.slice(display.innerText.indexOf(op) + 1);
        }
      }
    } else if (keys == ".") {
      if (n1 != "" || n2 != "") {
        if (String(n1).includes(".")) {
          console.log("here" + keys);
          if (op == "") {
            console.log("only one dot for firs num");
          } else if (op == "+" || op == "-" || op == "*" || op == "/") {
            if (display.innerText.includes("=")) {
              display.innerText += keys;
              n2 = display.innerText.slice(-1, display.innerText.indexOf(op));
            } else if (String(n2).includes(".")) {
              console.log("only one dot for second num");
            } else {
              display.innerText += keys;
              n2 = display.innerText.slice(display.innerText.indexOf(op) + 1);
            }
          }
        } else {
          if (op == "") {
            display.innerText += keys;
            n1 += keys;
          } else if (op == "+" || op == "-" || op == "*" || op == "/") {
            if (display.innerText.includes("=")) {
              display.innerText += keys;
              n2 = display.innerText.slice(-1, display.innerText.indexOf(op));
            } else {
              display.innerText += keys;
              n2 = display.innerText.slice(display.innerText.indexOf(op) + 1);
            }
          }
        }
      }
    }
    console.log("allowed:" + keys);
  }
});
function num() {
  console.log(this.innerText);
  if (this.innerText == ".") {
    if (n1 != "" || n2 != "") {
      if (String(n1).includes(".")) {
        if (op == "") {
          console.log("only one dot for firs num");
        } else if (op == "+" || op == "-" || op == "*" || op == "/") {
          if (display.innerText.includes("=")) {
            display.innerText += this.innerText;
            n2 = display.innerText.slice(-1, display.innerText.indexOf(op));
          } else if (String(n2).includes(".")) {
            console.log("only one dot for second num");
          } else {
            display.innerText += this.innerText;
            n2 = display.innerText.slice(display.innerText.indexOf(op) + 1);
          }
        }
      } else if (String(n2).includes(".")) {
        console.log("only one dot for firs num");
      }

      //don't touch this
      else {
        if (op == "") {
          display.innerText += this.innerText;
          n1 += this.innerText;
        } else if (op == "+" || op == "-" || op == "*" || op == "/") {
          if (display.innerText.includes("=")) {
            display.innerText += this.innerText;
            n2 = display.innerText.slice(-1, display.innerText.indexOf(op));
          } else {
            display.innerText += this.innerText;
            n2 = display.innerText.slice(display.innerText.indexOf(op) + 1);
          }
        }
      }
    }
  } else if (op == "") {
    //here
    display.innerText += this.innerText;
    n1 += this.innerText;
  } else if (op == "+" || op == "-" || op == "*" || op == "/") {
    console.log("last choice");
    if (display.innerText.includes("=")) {
      display.innerText += this.innerText;
      n2 = display.innerText.slice(-1, display.innerText.indexOf(op));
    } else if (!display.innerText.includes("=")) {
      display.innerText += this.innerText;
      n2 = display.innerText.slice(display.innerText.indexOf(op) + 1);
    }
  } else {
    console.log("last choice");
    /*display.innerText += this.innerText;
      n2 = display.innerText.slice(display.innerText.indexOf(op) + 1);*/
  }

  console.log("num1:" + n1);
  console.log("num2:" + n2);
}
let op = "";
let operand = document
  .querySelectorAll(".operand")
  .forEach((item) => item.addEventListener("click", operandF));
function operandF() {
  if (op != "") {
    if (
      display.innerText.includes("+") ||
      display.innerText.includes("-") ||
      display.innerText.includes("*") ||
      display.innerText.includes("/")
    ) {
      equal();
      display.innerText += this.innerText;
      op = this.innerText;
    }
  } else if (op == "") {
    display.innerText += this.innerText;
    op = this.innerText;
  }

  console.log("operand:" + op);
}

let clear = document
  .querySelector(".clear")
  .addEventListener("click", function clear() {
    display.innerText = "";
    n1 = "";
    n2 = "";
    op = "";
  });
let result = document
  .querySelector(".operate")
  .addEventListener("click", equal);
function equal() {
  if (n1 != "") {
    if (n2 == "") {
    } else if (n2 == 0 && op == "/") {
      alert("cant divide any number by 0");
    } else {
      display.innerText += "=";
      console.log("n1:" + n1 + ",op:" + op + ",n2:" + n2);
      display.innerText = operate(n1, op, n2);
      n1 = operate(n1, op, n2);
      op = "";
      n2 = "";
    }
  } else if (n2 == "") {
  }

  console.log("num1:" + n1);
}
