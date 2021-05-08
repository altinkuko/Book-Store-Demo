create database web_library_store;

-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: web_library_store
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `author_entity`
--
DROP TABLE IF EXISTS `author_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author_entity` (
                                 `author_id` bigint NOT NULL AUTO_INCREMENT,
                                 `bio` varchar(1000) DEFAULT NULL,
                                 `name` varchar(255) NOT NULL,
                                 PRIMARY KEY (`author_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author_entity`
--

LOCK TABLES `author_entity` WRITE;
/*!40000 ALTER TABLE `author_entity` DISABLE KEYS */;
INSERT INTO `author_entity` VALUES (7,'Craig Walls is a software developer, author of the popular book Spring in Action, Fourth Edition, and a frequent speaker at conferences.','Craig Walls'),(8,'An American author and screenwriter of fantasy, horror, and science fiction, George R. R. Martin is best known for his epic fantasy series A Song of Ice and Fire.','George R. R. Martin'),(9,'J. R. R. Tolkien (1892-1973) was an English writer, poet, philologist, and university professor who is best known as the author of the classic high-fantasy books The Hobbit and The Lord of the Rings series (The Fellowship of the Ring, The Two Towers, and The Return of the King). After his death, his son Christopher Tolkien published books based on Tolkien\'s notes and unpublished manuscripts, including The Silmarillion.','J. R. R. Tolkien'),(10,'Leigh Bardugo was born in Jerusalem, raised in Los Angeles, and graduated from Yale University. She is best known for the Grisha trilogy, a fantasy-adventure book series (Shadow and Bone, Siege and Storm, and Ruin and Rising).','Leigh Bardugo'),(11,'With his debut series, \"Attack on Titan,\" Hajime Isayama has enjoyed a meteoric rise from unknown to one of Japan\'s top comics artists.','Hajime Isayama');
/*!40000 ALTER TABLE `author_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_categories`
--

DROP TABLE IF EXISTS `book_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_categories` (
                                   `book_id` bigint NOT NULL,
                                   `category_id` bigint NOT NULL,
                                   PRIMARY KEY (`book_id`,`category_id`),
                                   KEY `FKt6xn399lmx8wwaff0idcerhl7` (`category_id`),
                                   CONSTRAINT `FKf6f3g2jm8xrnp03nsvkcl3xc3` FOREIGN KEY (`book_id`) REFERENCES `book_entity` (`book_id`),
                                   CONSTRAINT `FKt6xn399lmx8wwaff0idcerhl7` FOREIGN KEY (`category_id`) REFERENCES `category_entity` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_categories`
--

LOCK TABLES `book_categories` WRITE;
/*!40000 ALTER TABLE `book_categories` DISABLE KEYS */;
INSERT INTO `book_categories` VALUES (64,6),(68,6),(67,7),(68,7),(69,7),(71,7),(67,8),(69,8),(71,8),(71,11);
/*!40000 ALTER TABLE `book_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_entity`
--

DROP TABLE IF EXISTS `book_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_entity` (
                               `book_id` bigint NOT NULL AUTO_INCREMENT,
                               `description` varchar(255) DEFAULT NULL,
                               `img_url` varchar(255) DEFAULT NULL,
                               `title` varchar(255) NOT NULL,
                               `author_id` bigint DEFAULT NULL,
                               PRIMARY KEY (`book_id`),
                               KEY `FK3e3nppyc2tarykc693kx2cmim` (`author_id`),
                               CONSTRAINT `FK3e3nppyc2tarykc693kx2cmim` FOREIGN KEY (`author_id`) REFERENCES `author_entity` (`author_id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_entity`
--

LOCK TABLES `book_entity` WRITE;
/*!40000 ALTER TABLE `book_entity` DISABLE KEYS */;
INSERT INTO `book_entity` VALUES (54,'Learn rapid web development at enterprise scale with Spring through the highly popular Spring Boot framework','http://localhost:8080/admin/files/41Mno4eQFkL._SX396_BO1,204,203,200_.jpg','Learning Spring with Spring Boot',7),(64,'See the Grishaverse come to life on screen with Shadow and Bone, now a Netflix original series. ','http://localhost:8080/admin/files/9781250076960_p0_v7_s550x406.jpg','Six of Crows',10),(67,'One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them\n','http://localhost:8080/admin/files/9780544003415_p0_v4_s550x406.jpg','The Lord of the Rings',9),(68,'In the aftermath of a colossal battle, the future of the Seven Kingdoms hangs in the balance—beset by newly emerging threats from every direction.','http://localhost:8080/admin/files/9780553385953_p0_v1_s550x406.jpg','A Dance with Dragons',8),(69,'THE BOOK BEHIND THE FOURTH SEASON OF THE ACCLAIMED HBO SERIES GAME OF THRONES','http://localhost:8080/admin/files/9780553582031_p0_v1_s550x406.jpg','A Feast for Crows',8),(71,'The blockbuster action manga that inspired the epic anime stampedes towards its climax!','http://localhost:8080/admin/files/9781646510269_p0_v4_s550x406.jpg','Attack on Titan',11);
/*!40000 ALTER TABLE `book_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_entity`
--

DROP TABLE IF EXISTS `category_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_entity` (
                                   `category_id` bigint NOT NULL AUTO_INCREMENT,
                                   `name` varchar(255) DEFAULT NULL,
                                   PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_entity`
--

LOCK TABLES `category_entity` WRITE;
/*!40000 ALTER TABLE `category_entity` DISABLE KEYS */;
INSERT INTO `category_entity` VALUES (6,'Learning'),(7,'Adventure'),(8,'Fantasy'),(9,'Mystery'),(10,'Action '),(11,'Graphic-Novel');
/*!40000 ALTER TABLE `category_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_entity`
--

DROP TABLE IF EXISTS `user_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_entity` (
                               `id` bigint NOT NULL AUTO_INCREMENT,
                               `email` varchar(255) DEFAULT NULL,
                               `password` varchar(255) DEFAULT NULL,
                               `username` varchar(255) DEFAULT NULL,
                               PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_entity`
--

LOCK TABLES `user_entity` WRITE;
/*!40000 ALTER TABLE `user_entity` DISABLE KEYS */;
INSERT INTO `user_entity` VALUES (1,'localhost@localhost','$2y$12$eDcwRvrG4K5dB8DnD/FaUOWbQbFAA0oXwVXTW0q.tc/INYno3N5EO','admin');
/*!40000 ALTER TABLE `user_entity` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-08 22:51:22
