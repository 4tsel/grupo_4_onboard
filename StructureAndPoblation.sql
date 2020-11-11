-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: onboard
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `icono` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Joysticks','fas fa-gamepad'),(2,'Audio','fas fa-headphones'),(3,'Consolas','fas fa-gamepad'),(4,'Computadoras','fas fa-desktop'),(5,'Notebooks','fas fa-laptop'),(6,'Netbooks','fas fa-laptop'),(7,'Juegos','fas fa-gamepad'),(12,'Teclados','fas fa-keyboard'),(13,'Mouses','fas fa-mouse'),(14,'Motherboards','fas fa-microchip'),(15,'Procesadores','fas fa-microchip'),(16,'RAMs','fas fa-memory'),(17,'Videocards','fas fa-desktop'),(18,'Audiocards','fas fa-headphones'),(19,'Video','fas fa-desktop'),(20,'Fuentes','fas fa-plug');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(100) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `precio` decimal(7,2) NOT NULL,
  `descuento` int(11) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id_categorias` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idCategorias_idx` (`id_categorias`),
  CONSTRAINT `idCategorias` FOREIGN KEY (`id_categorias`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Sony','Dualshock 4',4000.00,0,' Compatibilidad nativa con Playstation 4. Compatibilidad con Pc vía cable o bluetooth. asd','imagen-1605017885905.jpeg','2020-11-10 14:18:05','2020-11-10 23:25:49',1),(2,'Microsoft','XBOX ONE Controller',5000.00,0,'Compatibilidad nativa con XBOX ONE. Compatibilidad con PC vía cable o adaptador.','imagen-1605017950876.jpg','2020-11-10 14:19:10','2020-11-10 14:19:10',1),(4,'Redragon','Jupiter G809',5700.00,0,'Conexión inalámbrica. Compatibilidad nativa con PS4 y Nintendo Switch. Compatibilidad con PC vía cable o bluetooth','imagen-1605108315638.jpg','2020-11-11 15:25:15','2020-11-11 15:25:15',1),(5,'Asus','H310M-R Prime',6300.00,0,'Socket: 1151 Coffee Lake. Plataforma: Intel. Slots: 2 x DDR4','imagen-1605108477206.jpg','2020-11-11 15:27:57','2020-11-11 15:27:57',14),(6,'HP','V8 Series',4200.00,0,' Capacidad: 8 GB. Velocidad: 3000 Mhz. Tipo: DDR4','imagen-1605108601932.jpg','2020-11-11 15:30:01','2020-11-11 16:11:30',16),(7,'Asus','GeForce GT1030',10500.00,0,'Capacidad: 2 GB. Tipo: DDR5.','imagen-1605108695950.jpg','2020-11-11 15:31:35','2020-11-11 15:31:35',17),(8,'EVGA','Pro Card Xu216',45000.00,0,'Tipo: Placa de sonido interna. Canales de salida: 7. Canales de auriculares: 2.','imagen-1605108830142.jpeg','2020-11-11 15:33:50','2020-11-11 15:33:50',18),(9,'Redragon','Thunder E200',2700.00,0,'Micrófono: Sí. Tipo: Intraural.','imagen-1605108915710.jpg','2020-11-11 15:35:15','2020-11-11 15:35:15',2),(10,'LG','UltraGear 24GL600F',45000.00,0,'Tamaño: 24\". Resolución: 1080p. Frecuencia: 144hz. Respuesta: 1ms.','imagen-1605109026256.jpg','2020-11-11 15:37:06','2020-11-11 15:37:06',19),(11,'Corsair','VS 450',6500.00,0,'Formato: ATX. Watts: 450 W. Certificado: 80 plus.','imagen-1605109170670.jpg','2020-11-11 15:39:30','2020-11-11 15:39:30',20),(12,'PC armada','Gamer',33000.00,0,'Procesador: AMD A8 9600. Video: AMD Radeon R7. Ram: 8 GB. Sistema Operativo: Win 10 64bits.\r\nIMAGEN ILUSTRATIVA.\r\n','imagen-1605109270268.jpg','2020-11-11 15:41:10','2020-11-11 15:41:10',4),(13,'Acer','Aspire 3',95000.00,0,'Tamaño de pantalla: 15.6\". Procesador: Intel i5 7200U. Ram: 6 GB. Almacenamiento: 1 TB. Sistema Operativo: Win. 10 64 bits.','imagen-1605109383766.jpg','2020-11-11 15:43:03','2020-11-11 15:43:03',5),(14,'HP','Stream 11',72000.00,0,'Tamaño de pantalla: 11.6\". Procesador: Intel Celeron.. Ram: 2 GB. Almacenamiento: 500 GB. Sistema Operativo: Win 10.','imagen-1605109488485.jpg','2020-11-11 15:44:48','2020-11-11 15:44:48',6),(15,'Microsoft','XBOX One S',50000.00,0,'Color: Blanco. Almacenamiento: 1 TB. Joysticks: 1. ','imagen-1605109558866.jpg','2020-11-11 15:45:58','2020-11-11 15:45:58',3),(16,'PS4','Ghost of Tsushima',5000.00,0,'Formato: Físico. Idiomas: Chino/Inglés.','imagen-1605109659033.jpg','2020-11-11 15:47:39','2020-11-11 15:47:39',7),(17,'Redragon','Visnu K561-R',4500.00,0,'Idioma: Español. Distribución: Latinoamérica. Iluminación: Rainbow. Formato: Corto sin pad numérico. Mecanismo: Mecánico.','imagen-1605109743801.jpg','2020-11-11 15:49:03','2020-11-11 15:49:03',12),(18,'Redragon','Dagger 2 M715',3500.00,0,'Base: Aluminio. Botones: 8. Iluminación: RGB. Min. DPI: 100. Max. DPI: 10000 ','imagen-1605109833334.jpg','2020-11-11 15:50:33','2020-11-11 15:50:33',13),(19,'Logitech','F310',2000.00,0,'Conexión: Cable USB. Compatibilidad: PC.','imagen-1605109891226.jpg','2020-11-11 15:51:31','2020-11-11 15:51:31',1),(20,'MSI','A320M-A PRO',7000.00,0,'Socket: AM4. Plataforma: AMD. Slots: 2xDDR4.','imagen-1605109960010.jpg','2020-11-11 15:52:40','2020-11-11 15:52:40',14),(21,'AMD','Ryzen 5 1600 AF',13000.00,0,'Núcleos: 6. Frecuencia: 3.2 Ghz. (Turbo: 3600 Ghz). Socket: AM4. Incluye cooler: Sí.','imagen-1605110024309.jpg','2020-11-11 15:53:44','2020-11-11 15:53:44',15),(22,'Adata','Value',2500.00,0,'Capacidad: 4GB. Velocidad: 2666 Mhz. Tipo: DDR4.','imagen-1605110075348.jpg','2020-11-11 15:54:35','2020-11-11 15:54:35',16),(23,'Asrock','Radeon RX 5500 XT',22000.00,0,'Capacidad: 8 GB. Tipo: DDR6.','imagen-1605110134125.jpg','2020-11-11 15:55:34','2020-11-11 15:55:34',17),(24,'Sound Blaster','Z',20000.00,0,'Interfaz: PCIe. Tipo: Interna.','imagen-1605110187822.jpg','2020-11-11 15:56:27','2020-11-11 15:56:27',18),(25,'Logitech','G935 LightSync',26000.00,0,'Conexión: Inalámbrico. Canales: 7.1. Iluminación: RGB. Color: Negro.','imagen-1605110270385.jpg','2020-11-11 15:57:50','2020-11-11 15:57:50',2),(26,'LG','19M38A-B',15000.00,0,'Conectividad: VGA. Tamaño de pantalla: 19\".','imagen-1605110333929.jpg','2020-11-11 15:58:53','2020-11-11 15:58:53',19),(27,'Segotep','GP600G',2000.00,0,'Formato: ATX. Watts: 500W (199 Reales).','imagen-1605110424768.jpg','2020-11-11 16:00:24','2020-11-11 16:00:24',20),(28,'PC armada','Gamer',30000.00,0,'Procesador: AMD A6 7480. Almacenamiento: 240GB. Ram: 4 GB. Sistema Operativo: Win 10 64 bits. \r\nIMAGEN ILUSTRATIVA','imagen-1605110494578.jpg','2020-11-11 16:01:34','2020-11-11 16:01:34',4);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `contraseña` varchar(100) NOT NULL,
  `admin` tinyint(4) NOT NULL,
  `avatar` varchar(45) NOT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `ciudad` varchar(45) DEFAULT NULL,
  `provincia` varchar(45) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Axel','Novo','axelbnovo@gmail.com','$2b$10$e/29n1zwR0167MTWiv9k1eWBh6jruU2YK9jOi/KA3JCny7oj4Drfi',1,'default.png',NULL,NULL,NULL,NULL,'2020-11-10 14:16:10','2020-11-10 14:16:10'),(3,'Usuario','Común','usuario@comun.com','$2b$10$H5yX0OZmKkjhtHOjP89Q5.SBrFbE.weNrEyBqwQ47ZUx6HcIeQAL6',0,'avatar-1605054504236.jpg','','','',NULL,'2020-11-11 00:28:00','2020-11-11 00:28:24'),(4,'Una','Prueba','probando@probando.com','$2b$10$ZiDmcVTBL9GfgDxIFPGb4OJ10DsDnK.3pm1pKhFHMEpBsDatC6yK2',0,'default.png',NULL,NULL,NULL,NULL,'2020-11-11 00:30:30','2020-11-11 00:30:30');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-11 13:19:02
