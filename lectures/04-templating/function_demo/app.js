function makeNumber() {
  return 42;
}

function makeFunction() {
  return makeNumber;
}

function makeGreeting() {
  return function(name) {
    console.log(`Hello, ${name}. I like the number 42!`);
  }
}
