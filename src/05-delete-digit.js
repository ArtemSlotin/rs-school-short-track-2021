/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = [];
  const strNum = n.toString();

  for (let i = 0; i < strNum.length; i++) {
    const newNum = parseInt(strNum.slice(0, i) + strNum.slice(i + 1), 10);
    array.push(newNum);
  }
  return Math.max(...array);
}

module.exports = deleteDigit;
