// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const num1 = BigInt(array1.join(''));
  const num2 = BigInt(array2.join(''));
  const sum = num1 + num2;
  return Number(sum);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const strValue = value.toString();
  const reversedStrValue = strValue.split('').reverse().join('');
  return strValue === reversedStrValue;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === null || input === undefined || input.trim() === '') {
    return 'Required field';
  } if (input.trim() === '0' || isNaN(Number(input))) {
    return 'Must be a number besides 0';
  } 
  return '';
}
