/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const counts = data.asteroids.reduce(function(acc, val){
    acc[val.discoveryYear] = (acc[val.discoveryYear] || 0) + 1;
    return acc;
  }, {});

  const maxCount = Object.values(counts).reduce(function(max, count) {
    if (count > max){
      max = count;
    };
    return max;
  }, 0);

  function getKeyByValue(object, value){
    return Object.keys(object).find(key => object[key] === value);
  }
  
  const discoveryYear = getKeyByValue(counts, maxCount);
  
  return parseInt(discoveryYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
