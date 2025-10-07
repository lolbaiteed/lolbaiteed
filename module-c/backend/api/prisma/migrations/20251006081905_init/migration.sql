/*
  Warnings:

  - You are about to drop the `machine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `machineusage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usertoken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wallettransaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `WalletTransaction` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- DropTable
DROP TABLE `machine`;

-- DropTable
DROP TABLE `machineusage`;

-- DropTable
DROP TABLE `user`;

-- DropTable
DROP TABLE `usertoken`;

-- DropTable
DROP TABLE `wallettransaction`;
