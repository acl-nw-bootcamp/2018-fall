function addNumbers (a, b) {
  return a + b;
}

const objectAddNumbers = function (a, b) {
  return a + b;
}

const arrowAddNumbersWithReturn = (a, b) => {
  return a + b;
}

const arrowAddNumbers = (a, b) => a + b;

const sum = arrowAddNumbers(5, 8); // sum = 13

window.addEventListener('load', function() {
  // document.getElementById('main-menu').addEventListener('click', handleClickFn);
})

const arrowHello = () => "Hello World!";

const sayGreeting = name => `Hello, ${name}!`;
