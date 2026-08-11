/*
  Warnings:

  - You are about to drop the column `categoria` on the `documento` table. All the data in the column will be lost.
  - Added the required column `clienteId` to the `Documento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `documento` DROP COLUMN `categoria`,
    ADD COLUMN `clienteId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Categoria_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CategoriaToDocumento` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CategoriaToDocumento_AB_unique`(`A`, `B`),
    INDEX `_CategoriaToDocumento_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Documento` ADD CONSTRAINT `Documento_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoriaToDocumento` ADD CONSTRAINT `_CategoriaToDocumento_A_fkey` FOREIGN KEY (`A`) REFERENCES `Categoria`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoriaToDocumento` ADD CONSTRAINT `_CategoriaToDocumento_B_fkey` FOREIGN KEY (`B`) REFERENCES `Documento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
