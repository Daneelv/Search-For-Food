const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const foodSearchInput = require("./utils/searchInput");

async function extractEntities(enteredSearch) {
  console.log(enteredSearch);
  return {};
}

(async () => {
  const enteredSearch = await foodSearchInput();
  console.log(`Search String: ${enteredSearch}`);
  const results = await extractEntities(enteredSearch);
  console.log(results);
})();
