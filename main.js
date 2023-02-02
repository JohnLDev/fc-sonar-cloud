/**
 *
 * @param {Number} n1
 * @param {Number} n2
 * @returns {Number}
 */
const sum = (n1, n2) => {
  return n1 + n2;
};

(() => {
  // calls the sum function with 2 and 3 as parameters
  console.log(sum(2, 3));
})();
