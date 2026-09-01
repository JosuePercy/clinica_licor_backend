/*
  Warnings:

  - Added the required column `category` to the `expenses` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ExpenseCategory" AS ENUM ('MERCHANDISE', 'SERVICES', 'SUPPLIES', 'OTHER');

-- AlterTable
ALTER TABLE "expenses" DROP COLUMN "category",
ADD COLUMN     "category" "ExpenseCategory" NOT NULL;
