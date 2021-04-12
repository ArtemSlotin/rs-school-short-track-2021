/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const exclInd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      exclInd.push(i);
    }
  }

  const positNum = arr.filter((x) => x > -1);
  const sortArr = positNum.sort((a, b) => a - b);
  for (let k = 0; k < exclInd.length; k++) {
    sortArr.splice(exclInd[k], 0, -1);
  }
  return sortArr;
}

module.exports = sortByHeight;
