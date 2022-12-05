// Leetcode problem #682
// https://leetcode.com/problems/baseball-game/

// The lesson in this portion is about Stacks. I would highly recommend that you write your own
// There is a sample stack written in the /dataStructures directory if you do not wish to write one

// Leetcode problem #682
// https://leetcode.com/problems/baseball-game/

// The lesson in this portion is about Stacks. I would highly recommend that you write your own
// There is a sample stack written in the /dataStructures directory if you do not wish to write one

const Stack = function () {
  this.storage = {};
  this.size = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.size] = Number(value);
  this.size++;
};

Stack.prototype.pop = function () {
  const keys = Object.keys(this.storage);
  const popped = this.storage[keys.length - 1];
  delete this.storage[keys.length - 1];
  this.size--;
  return popped;
};

Stack.prototype.sumTwoPreviousAndAdd = function () {
  const keys = Object.keys(this.storage);
  const last = this.storage[keys.length - 1];
  const nextToLast = this.storage[keys.length - 2];
  const sum = last + nextToLast;
  this.push(sum);
};

Stack.prototype.doublePrevious = function () {
  const keys = Object.keys(this.storage);
  const last = this.storage[keys.length - 1];
  const doubled = last * 2;
  this.push(doubled);
};

const calPoints = (ops) => {
  const ballStack = new Stack();

  ops.forEach((value) => {
    if (value === "+") {
      ballStack.sumTwoPreviousAndAdd();
    } else if (value === "D") {
      ballStack.doublePrevious();
    } else if (value === "C") {
      ballStack.pop();
    } else {
      ballStack.push(value);
    }
  });
  let sum = 0;
  const keys = Object.keys(ballStack.storage);
  keys.forEach((key) => {
    sum += ballStack.storage[key];
  });

  return sum;
};

module.exports = {
  calPoints: calPoints,
};
