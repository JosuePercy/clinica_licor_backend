-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'YAPE_PLIN', 'CARD');

-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "paymentMethod" "PaymentMethod" NOT NULL DEFAULT 'CASH';
