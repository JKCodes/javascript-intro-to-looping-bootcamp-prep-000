var array = [];

for (let i = 0; i < 25; i++) {
  i === 1 ? array.push("I am 1 strange loop.") : array.push(`I am ${i} strange loops.`);
}

console.log(array);

function whileLoop(number) {
  while (number > 0) {
    number--;
  }
  return 'done';
}

console.log(whileLoop(100));

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
    do {
      array.pop();
    } while (maybeTrue() && array.length > 0);

    return array;
}

console.log(doWhileLoop(array));
