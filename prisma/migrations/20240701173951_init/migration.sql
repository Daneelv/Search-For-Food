-- CreateTable
CREATE TABLE "Cities" (
    "id" SERIAL NOT NULL,
    "cityName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brands" (
    "id" SERIAL NOT NULL,
    "brandName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DishTypes" (
    "id" SERIAL NOT NULL,
    "dishName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DishTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diets" (
    "id" SERIAL NOT NULL,
    "dietName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Diets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cities_cityName_key" ON "Cities"("cityName");

-- CreateIndex
CREATE UNIQUE INDEX "Brands_brandName_key" ON "Brands"("brandName");

-- CreateIndex
CREATE UNIQUE INDEX "DishTypes_dishName_key" ON "DishTypes"("dishName");

-- CreateIndex
CREATE UNIQUE INDEX "Diets_dietName_key" ON "Diets"("dietName");
