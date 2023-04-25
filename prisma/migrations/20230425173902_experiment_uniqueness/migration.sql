/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Experiment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Experiment_name_key" ON "Experiment"("name");
