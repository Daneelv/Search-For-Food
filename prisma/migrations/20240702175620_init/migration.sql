/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Brands` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Brands` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Cities` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Cities` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Diets` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Diets` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `DishTypes` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `DishTypes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Brands" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Cities" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Diets" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "DishTypes" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
