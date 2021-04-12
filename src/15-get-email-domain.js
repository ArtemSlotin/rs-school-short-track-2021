/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = [];
  const partsEmail = email.split('@');
  const lastItem = partsEmail[partsEmail.length - 1];
  arr.push(lastItem.replace(/^\./, ' '));
  return arr.join('');
}

module.exports = getEmailDomain;
