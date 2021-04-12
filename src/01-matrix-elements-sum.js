/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const array = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let sum = 0;
    for (let k = 0; k < matrix.length; k++) {
      if (matrix[k][i] > 0) {
        sum += matrix[k][i];
      } else {
        break;
      }
    }
    array.push(sum);
  }
  return array.reduce((a, b) => a + b);
}

module.exports = getMatrixElementsSum;
