/*
  Warnings:

  - You are about to drop the column `url` on the `imagem` table. All the data in the column will be lost.
  - Added the required column `arquivo` to the `Imagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `imagem` DROP COLUMN `url`,
    ADD COLUMN `arquivo` VARCHAR(191) NOT NULL,
    ADD COLUMN `destaque` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `legenda` VARCHAR(191) NULL;
