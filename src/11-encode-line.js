/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let letters = [];
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else if (!(arr[i + 1] === arr[i]) && count > 1) {
      letters.push(`${count}${arr[i]}`);
      count = 1;
    } else {
      const same = `${arr[i]}`;
      letters = [...letters, ...same];
      count = 1;
    }
  }
  return letters.join('');
}

module.exports = encodeLine;
