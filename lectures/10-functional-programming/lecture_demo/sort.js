const sortNumericArray = function (left, right) {
  if (left < right) {
    return -1;
  } else if (left > right) {
    return 1;
  } else {
    return 0;
  }
}

const arrowSort = (left, right) => left - right;


var numericArray = [1, 30, 4, 21];
// numericArray.sort(arrowSort);
numericArray.sort((left, right) => left - right);
console.log(numericArray);

const doctorSort = (left, right) => left.number - right.number;

const doctorSortByName = (left, right) => {
  const leftNames = left.actor.split(' ');
  const leftLast = leftNames[1];
  const rightNames = right.actor.split(' ');
  const rightLast = rightNames[1];
  if (leftLast < rightLast) {
    return -1;
  } else if (leftLast > rightLast) {
    return 1;
  } else {
    return 0;
  }
}
