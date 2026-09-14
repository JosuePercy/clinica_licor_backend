/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "expenses" DROP CONSTRAINT "expenses_userId_fkey";

-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_userId_fkey";

-- DropTable
DROP TABLE "users";

-- DropEnum
DROP TYPE "Role";
