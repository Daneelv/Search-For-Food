const readline = require("readline");

function foodSearchInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("Please enter Food Search: ", (answer) => {
      if (answer.trim() === "") {
        console.log("Input cannot be empty. Please try again.");
        resolve(foodSearchInput());
      } else {
        resolve(answer);
        rl.close();
      }
    });
  });
}

function formatSearchTerm(searchTerm, wordsToIgnore) {
  // Convert the search Term to an Array
  let searchTermArray = searchTerm.split(/\s+/);

  // Filter out the words that can be ignored as
  // they will take up unnecessary processing
  let filteredArray = searchTermArray.filter(
    (word) => !wordsToIgnore.includes(word.toLowerCase())
  );

  return filteredArray;
}

module.exports = { foodSearchInput, formatSearchTerm };
