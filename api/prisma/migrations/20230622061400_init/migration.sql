/*
  Warnings:

  - A unique constraint covering the columns `[imeiNumber]` on the table `Phone` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Phone_imeiNumber_key" ON "Phone"("imeiNumber");
