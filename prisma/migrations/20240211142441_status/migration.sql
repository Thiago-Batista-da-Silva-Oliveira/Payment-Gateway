-- AlterTable
ALTER TABLE `payment` ADD COLUMN `status` ENUM('PENDING', 'PAID', 'CANCELED') NOT NULL DEFAULT 'PENDING';
