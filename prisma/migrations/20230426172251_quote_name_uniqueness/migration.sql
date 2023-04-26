/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Quote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Quote_name_key" ON "Quote"("name");
