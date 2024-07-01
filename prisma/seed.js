const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.Cities.createMany({
    data: [
      { cityName: "London" },
      { cityName: "Manchester" },
      { cityName: "Belfast" },
      { cityName: "Bracknell" },
      { cityName: "Brighton" },
      { cityName: "Cambridge" },
    ],
  });

  await prisma.Brands.createMany({
    data: [
      { brandName: "McDonald's" },
      { brandName: "Sushimania" },
      { brandName: "Burger King" },
      { brandName: "Pizza Hut" },
    ],
  });

  await prisma.DishTypes.createMany({
    data: [
      { dishName: "Sushi" },
      { dishName: "Pizza" },
      { dishName: "Pasta" },
      { dishName: "Salad" },
    ],
  });

  await prisma.Diets.createMany({
    data: [
      { dietName: "Vegan" },
      { dietName: "Vegetarian" },
      { dietName: "Rhubarb diet" },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
