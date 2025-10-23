// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time = 0;
  switch (name) {
    case 'Pure Strawberry Joy':
      time = 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      time = 1.5;
      break;
    case 'Tropical Island':
      time = 3;
      break;
    case 'All or Nothing':
      time = 5;
      break;
    default:
      time = 2.5;
      break;
  }
  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if (wedgesNeeded === 0 || limes.length === 0) {
    return 0;
  }

  let wedges = 0;
  let limesCut = 0;
  let i = 0;

  do {
    const limeSize = limes[i];
    let wedgesPerLime = 0;

    if (limeSize === 'small') {
      wedgesPerLime = 6;
    } else if (limeSize === 'medium') {
      wedgesPerLime = 8;
    } else if (limeSize === 'large') {
      wedgesPerLime = 10;
    }

    wedges += wedgesPerLime;
    limesCut++;
    i++;
  } while (i < limes.length && wedges < wedgesNeeded);

  return limesCut;
}


/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let time = timeLeft;
  let i = 0;

  while (i < orders.length && time > 0) {
    const order = orders[i];
    const timeToPrepare = timeToMixJuice(order);
    time -= timeToPrepare;
    i++;
  }

  return orders.slice(i);
}
