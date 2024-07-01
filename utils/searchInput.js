const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function foodSearchInput() {
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

module.exports = foodSearchInput;
