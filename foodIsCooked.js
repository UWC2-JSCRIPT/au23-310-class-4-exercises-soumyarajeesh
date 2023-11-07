/**
 * Determines whether meat temperature is high enough
 * @param {string} kind 
 * @param {number} internalTemp 
 * @param {string} doneness
 * @returns {boolean} isCooked
 */
const foodIsCooked = function(kind, internalTemp, doneness) {
  // Write function HERE
    // Check the internal temperature based on the kind of meat
    if (kind === 'chicken' && internalTemp >= 165) {
      return true;
    }else if (kind==='beef' && doneness==='rare' && internalTemp >= 125) {
    return true;
  }
     else if (kind === 'beef' && doneness=== 'medium' && internalTemp >= 138) {
      return true;
    } else if (kind === 'beef' && doneness === 'well' && internalTemp >= 155) {
      return true;
    }
  
    // If none of the conditions match, return false
    return false;
}



// Test function
console.log(foodIsCooked('chicken', 90)); // should be false
console.log(foodIsCooked('chicken', 190)); // should be true
console.log(foodIsCooked('beef', 138, 'well')); // should be false
console.log(foodIsCooked('beef', 138, 'medium')); // should be true
console.log(foodIsCooked('beef', 138, 'rare')); // should be true