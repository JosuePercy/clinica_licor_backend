-- CreateTable
CREATE TABLE "expense_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "expense_categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "expense_categories_name_key" ON "expense_categories"("name");

-- Seed default categories so existing expense rows have somewhere to point,
-- and admins have a starting point instead of an empty list.
INSERT INTO "expense_categories" ("id", "name") VALUES
    ('expcat_merchandise', 'Mercadería'),
    ('expcat_services', 'Servicios'),
    ('expcat_supplies', 'Insumos'),
    ('expcat_other', 'Otros');

-- AlterTable: add categoryId as nullable first so existing rows can be backfilled
ALTER TABLE "expenses" ADD COLUMN "categoryId" TEXT;

-- Backfill existing rows from the old enum column
UPDATE "expenses" SET "categoryId" = CASE "category"
    WHEN 'MERCHANDISE' THEN 'expcat_merchandise'
    WHEN 'SERVICES' THEN 'expcat_services'
    WHEN 'SUPPLIES' THEN 'expcat_supplies'
    WHEN 'OTHER' THEN 'expcat_other'
END;

-- Now that every row has a categoryId, drop the old enum column and enforce NOT NULL
ALTER TABLE "expenses" DROP COLUMN "category";
ALTER TABLE "expenses" ALTER COLUMN "categoryId" SET NOT NULL;

DROP TYPE "ExpenseCategory";

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "expense_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
