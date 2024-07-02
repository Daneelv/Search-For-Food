const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function extractEntities(searchTerms) {
  const cities = [];
  const brands = [];
  const dishTypes = [];
  const diets = [];
  const results = [];

  //Loop through the searchTerms Array and populate the Arrays (to categorise the search terms)
  for (const searchTerm of searchTerms) {
    const city = await prisma.Cities.findMany({
      where: { cityName: { contains: searchTerm, mode: "insensitive" } },
    });

    const brand = await prisma.Brands.findMany({
      where: { brandName: { contains: searchTerm, mode: "insensitive" } },
    });

    const dishType = await prisma.DishTypes.findMany({
      where: { dishName: { contains: searchTerm, mode: "insensitive" } },
    });

    const diet = await prisma.Diets.findMany({
      where: { dietName: { contains: searchTerm, mode: "insensitive" } },
    });

    city && cities.push(...city);

    brand && brands.push(...brand);

    dishType && dishTypes.push(...dishType);

    diet && diets.push(...diet);
  }

  //All Combinations for City
  for (const city of cities) {
    for (const brand of brands) {
      results.push({
        city: { id: city.id, name: city.cityName },
        brand: { id: brand.id, name: brand.brandName },
      });
    }
    for (const dishType of dishTypes) {
      results.push({
        city: { id: city.id, name: city.cityName },
        dishType: { id: dishType.id, name: dishType.dishName },
      });
    }
    for (const diet of diets) {
      results.push({
        city: { id: city.id, name: city.cityName },
        diet: { id: diet.id, name: diet.dietName },
      });
    }

    if (results.length === 0) {
      results.push({
        city: { id: city.id, name: city.cityName },
      });
    }
  }

  // All Combinations for brands
  // Excluding Cities
  for (const brand of brands) {
    for (const dishType of dishTypes) {
      results.push({
        brand: { id: brand.id, name: brand.brandName },
        dishType: { id: dishType.id, name: dishType.dishName },
      });
    }
    for (const diet of diets) {
      results.push({
        brand: { id: brand.id, name: brand.brandName },
        diet: { id: diet.id, name: diet.dietName },
      });
    }

    if (results.length === 0) {
      results.push({
        brand: { id: brand.id, name: brand.brandName },
      });
    }
  }

  // All Combinations for dishTypes
  // Excluding brands and Cities
  for (const dishType of dishTypes) {
    for (const diet of diets) {
      results.push({
        dishType: { id: dishType.id, name: dishType.dishName },
        diet: { id: diet.id, name: diet.dietName },
      });
    }

    if (results.length === 0) {
      results.push({
        dishType: { id: dishType.id, name: dishType.dishName },
      });
    }
  }

  // All Combinations for diets
  // Will only print if there's no other combinations available
  for (const diet of diets) {
    if (results.length === 0) {
      results.push({ diet: { id: diet.id, name: diet.dietName } });
    }
  }

  return results;
}

module.exports = extractEntities;
