const ratioFunction = require("../ratio/index");
const factorialFunction = require("../factorial/index");
const ratioAndFactorial = (num1, num2, num3) => {
  return {
    ratio: ratioFunction(num1, num2),
    factorial: factorialFunction(num3),
  };
};
module.exports = ratioAndFactorial;
