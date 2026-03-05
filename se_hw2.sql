-- MySQL dump 10.13  Distrib 9.6.0, for macos15.7 (arm64)
--
-- Host: localhost    Database: s26_section2
-- ------------------------------------------------------
-- Server version	9.6.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '0980d208-0e86-11f1-aee8-5e2fcf8016eb:1-64';

--
-- Table structure for table `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredients` (
  `Ingredient` varchar(255) DEFAULT NULL,
  `RecipeID` int DEFAULT NULL,
  `Description` varchar(2048) DEFAULT NULL,
  KEY `RecipeID` (`RecipeID`),
  CONSTRAINT `RecipeID` FOREIGN KEY (`RecipeID`) REFERENCES `recipes` (`RecipeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients`
--

LOCK TABLES `ingredients` WRITE;
/*!40000 ALTER TABLE `ingredients` DISABLE KEYS */;
INSERT INTO `ingredients` VALUES ('Noodles',1,'The longer you cook them, the softer they will be'),('Chicken',1,'Make sure to cook well to remove salmonella'),('Noodles',2,'The longer you cook them, the softer they will be'),('Chicken',2,'Make sure to cook well to remove salmonella'),('Beef',3,'Medium well, lightly seasoned'),('Bun',3,'Lightly seasoned'),('Chicken',4,'Make sure to cook well to remove salmonella'),('Bun',4,'Lightly seasoned'),('Carrots',5,'Slice thinly'),('Noodles',5,'The longer you cook them, the softer they will be'),('Pork',6,'Roll in salt and herbs'),('Beef',5,'Medium well, lightly seasoned'),('Eggs',7,'Scrambled or over easy'),('Bacon',7,'This is technically pork right?');
/*!40000 ALTER TABLE `ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes` (
  `RecipeID` int NOT NULL,
  `RecipeName` varchar(255) DEFAULT NULL,
  `Protein` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`RecipeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,'Pad Thai','Chicken'),(2,'Ramen','Chicken'),(3,'Hamburger','Beef'),(4,'Chicken Patty','Chicken'),(5,'Beef Stew','Beef'),(6,'Pork Chops','Pork'),(7,'Bacon & Eggs','Pork');
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-05 13:23:21
