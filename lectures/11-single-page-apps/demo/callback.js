const addTwoNumbers = (first, second, callback) => {
  const answer = first + second;
  if (callback) {
    callback(answer);
  } else {
    return answer;
  }
}

const showAnswer = answer => {
  alert(`Answer: ${answer}`);
}

// $.get('http://somewhere.com/get/data', showData);

const showData = data => {
  // Code that adds data to the HTML page
}

const addNumbers = function() {
  const args = Array.from(arguments);
  const callback = typeof args[args.length - 1] == 'function' ? args.splice(-1)[0] : null;
  const total = args.reduce((sum, number) => sum + number, 0);
  if (callback) {
    callback(total);
  } else {
    return total;
  }
}
