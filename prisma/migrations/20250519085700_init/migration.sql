/*
  Warnings:

  - Added the required column `guest` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reservation` ADD COLUMN `guest` INTEGER NOT NULL;
