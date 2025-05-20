/*
  Warnings:

  - You are about to alter the column `parking` on the `Reservation` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Reservation` MODIFY `parking` VARCHAR(191) NOT NULL;
