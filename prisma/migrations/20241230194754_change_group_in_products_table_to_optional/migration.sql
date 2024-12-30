-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_groupId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "groupId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
