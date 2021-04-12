/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats (domains) {
  const arr = domains.map((item) => item.split('.').map((x) => `.${x}`));

  for (let i = 0; i < arr.length; i++) {
    for (let k = arr[i].length - 2; k >= 0; k--) {
      arr[i][k] = arr[i][k + 1] + arr[i][k];
    }
  }

  const result = {};
  for (let t = 0; t < arr.length; t++) {
    for (let m = 0; m < arr[t].length; m++) {
      if (result[arr[t][m]] === 1) {
        result[arr[t][m]]++;
      } else result[arr[t][m]] = 1;
    }
  }
  return result;
}
module.exports = getDNSStats;
