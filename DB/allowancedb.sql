-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema allowancedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `allowancedb` ;

-- -----------------------------------------------------
-- Schema allowancedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `allowancedb` DEFAULT CHARACTER SET utf8 ;
USE `allowancedb` ;

-- -----------------------------------------------------
-- Table `allowance`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `allowance` ;

CREATE TABLE IF NOT EXISTS `allowance` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `entry` INT NOT NULL,
  `createdDate` DATETIME NULL,
  `note` VARCHAR(200) NULL,
  `type` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS user;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'user' IDENTIFIED BY 'user';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'user';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `allowance`
-- -----------------------------------------------------
START TRANSACTION;
USE `allowancedb`;
INSERT INTO `allowance` (`id`, `entry`, `createdDate`, `note`, `type`) VALUES (1, 5, NULL, NULL, NULL);

COMMIT;

