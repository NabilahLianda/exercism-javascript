/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * @param {number | undefined} timeRemaining
 * @returns {string}
 */
export function cookingStatus(timeRemaining) {
  if (timeRemaining === undefined) {
    return "You forgot to set the timer.";
  }
  if (timeRemaining === 0) {
    return "Lasagna is done.";
  }
  return "Not done, please wait.";
}

/**
 * @param {string[]} layers
 * @param {number} timePerLayer
 * @returns {number}
 */
export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

/**
 * @param {string[]} layers
 * @returns {{ noodles: number, sauce: number }}
 */
export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  for (const layer of layers) {
    if (layer === "noodles") {
      noodles += 50;
    } else if (layer === "sauce") {
      sauce += 0.2;
    }
  }
  return { noodles, sauce };
}

/**
 * @param {string[]} friendsList
 * @param {string[]} myList
 * @returns {void}
 */
export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
  return;
}

/**
 * @param {Record<string, number>} recipe 
 * @param {number} targetPortions
 * @returns {object} 
 */
export function scaleRecipe(recipe, targetPortions) {
  const factor = targetPortions / 2;
  const scaled = {};

  for (const ingredient in recipe) {
    scaled[ingredient] = recipe[ingredient] * factor;
  }

  return scaled;
}
