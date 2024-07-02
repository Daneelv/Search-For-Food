const { foodSearchInput, formatSearchTerm } = require("./src/helpers");
const extractEntities = require("./src/logic");

(async () => {
  const wordsToIgnore = ["in", "me", "near", "at", "from", "or"];
  const enteredSearch = await foodSearchInput();
  const searchTermArray = formatSearchTerm(enteredSearch, wordsToIgnore);
  const results = await extractEntities(searchTermArray);
  console.log(results);
})();
