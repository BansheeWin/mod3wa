-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Mer 12 Avril 2017 à 17:30
-- Version du serveur: 5.5.54-0ubuntu0.14.04.1
-- Version de PHP: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `restaurant`
--

-- --------------------------------------------------------

--
-- Structure de la table `Booking`
--

CREATE TABLE IF NOT EXISTS `Booking` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `BookingDate` date NOT NULL,
  `BookingTime` time NOT NULL,
  `NumberOfSeats` tinyint(4) NOT NULL,
  `User_Id` int(11) NOT NULL,
  `CreationTimestamp` datetime NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `User_Id` (`User_Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `Booking`
--

INSERT INTO `Booking` (`Id`, `BookingDate`, `BookingTime`, `NumberOfSeats`, `User_Id`, `CreationTimestamp`) VALUES
(1, '2017-04-14', '20:45:00', 3, 74, '2017-04-07 15:36:08'),
(2, '2017-04-15', '12:45:00', 2, 74, '2017-04-07 15:38:10'),
(3, '2017-04-05', '12:45:00', 3, 74, '2017-04-12 14:49:39');

-- --------------------------------------------------------

--
-- Structure de la table `Meal`
--

CREATE TABLE IF NOT EXISTS `Meal` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) NOT NULL,
  `Photo` varchar(30) NOT NULL,
  `Description` varchar(250) NOT NULL,
  `QuantityInStock` tinyint(4) NOT NULL,
  `BuyPrice` double NOT NULL,
  `SalePrice` double NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Contenu de la table `Meal`
--

INSERT INTO `Meal` (`Id`, `Name`, `Photo`, `Description`, `QuantityInStock`, `BuyPrice`, `SalePrice`) VALUES
(1, 'Coca-Cola', 'coca.jpg', 'Mmmm, le Coca-Cola avec 10 morceaux de sucres et tout plein de caféine !', 72, 0.6, 3),
(2, 'Bagel Thon', 'bagel_thon.jpg', 'Notre bagel est constitué d''un pain moelleux avec des grains de sésame et du thon albacore, accompagné de feuilles de salade fraîche du jour  et d''une sauce renversante :-)', 18, 2.75, 5.5),
(3, 'Bacon Cheeseburger', 'bacon_cheeseburger.jpg', 'Ce délicieux cheeseburger contient un steak haché viande française de 150g ainsi que d''un buns grillé juste comme il faut, le tout accompagné de frites fraîches maison !', 14, 6, 12.5),
(4, 'Carrot Cake', 'carrot_cake.jpg', 'Le carrot cake maison ravira les plus gourmands et les puristes : tous les ingrédients sont naturels !\r\nÀ consommer sans modération', 9, 3, 6.75),
(5, 'Donut Chocolat', 'chocolate_donut.jpg', 'Les donuts sont fabriqués le matin même et sont recouvert d''une délicieuse sauce au chocolat !', 16, 3, 6.2),
(6, 'Dr. Pepper', 'drpepper.jpg', 'Son goût sucré avec de l''amande vous ravira !', 53, 0.5, 2.9),
(7, 'Milkshake', 'milkshake.jpg', 'Notre milkshake bien crémeux contient des morceaux d''Oréos et est accompagné de crème chantilly et de smarties en guise de topping. Il éblouira vos papilles !', 12, 2, 5.35);

-- --------------------------------------------------------

--
-- Structure de la table `Order`
--

CREATE TABLE IF NOT EXISTS `Order` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `User_Id` int(11) NOT NULL,
  `TotalAmount` double DEFAULT NULL,
  `TaxRate` float DEFAULT NULL,
  `TaxAmount` double DEFAULT NULL,
  `CreationTimestamp` datetime NOT NULL,
  `CompleteTimestamp` datetime NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `User_Id` (`User_Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=40 ;

--
-- Contenu de la table `Order`
--

INSERT INTO `Order` (`Id`, `User_Id`, `TotalAmount`, `TaxRate`, `TaxAmount`, `CreationTimestamp`, `CompleteTimestamp`) VALUES
(30, 74, 132.6, 5.5, 7.293, '2017-04-12 17:21:22', '2017-04-12 17:21:22'),
(31, 74, 139.893, 5.5, 7.293, '2017-04-12 17:22:14', '2017-04-12 17:22:14'),
(32, 74, 139.893, 5.5, 7.293, '2017-04-12 17:22:58', '2017-04-12 17:22:58'),
(33, 74, 139.893, 5.5, 7.293, '2017-04-12 17:23:20', '2017-04-12 17:23:20'),
(34, 74, 139.893, 5.5, 7.293, '2017-04-12 17:24:01', '2017-04-12 17:24:01'),
(35, 74, 139.893, 5.5, 7.293, '2017-04-12 17:25:13', '2017-04-12 17:25:13'),
(36, 74, 139.893, 5.5, 7.293, '2017-04-12 17:25:38', '2017-04-12 17:25:38'),
(37, 74, 139.893, 5.5, 7.293, '2017-04-12 17:25:42', '2017-04-12 17:25:42'),
(38, 74, 139.893, 5.5, 7.293, '2017-04-12 17:25:53', '2017-04-12 17:25:53'),
(39, 74, 139.893, 5.5, 7.293, '2017-04-12 17:26:24', '2017-04-12 17:26:24');

-- --------------------------------------------------------

--
-- Structure de la table `OrderLine`
--

CREATE TABLE IF NOT EXISTS `OrderLine` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `QuantityOrdered` int(4) NOT NULL,
  `Meal_Id` int(11) NOT NULL,
  `Order_Id` int(11) NOT NULL,
  `PriceEach` double NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `UniciteMealOrder` (`Meal_Id`,`Order_Id`),
  KEY `Meal_Id` (`Meal_Id`),
  KEY `Order_Id` (`Order_Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `OrderLine`
--

INSERT INTO `OrderLine` (`Id`, `QuantityOrdered`, `Meal_Id`, `Order_Id`, `PriceEach`) VALUES
(1, 11, 1, 39, 3),
(2, 4, 3, 39, 12.5),
(3, 8, 5, 39, 6.2);

-- --------------------------------------------------------

--
-- Structure de la table `User`
--

CREATE TABLE IF NOT EXISTS `User` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(40) NOT NULL,
  `LastName` varchar(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `BirthDate` date NOT NULL,
  `Address` varchar(250) NOT NULL,
  `City` varchar(40) NOT NULL,
  `ZipCode` char(5) NOT NULL,
  `Country` varchar(20) DEFAULT NULL,
  `Phone` char(10) NOT NULL,
  `CreationTimestamp` datetime NOT NULL,
  `LastLoginTimestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=75 ;

--
-- Contenu de la table `User`
--

INSERT INTO `User` (`Id`, `FirstName`, `LastName`, `Email`, `Password`, `BirthDate`, `Address`, `City`, `ZipCode`, `Country`, `Phone`, `CreationTimestamp`, `LastLoginTimestamp`) VALUES
(74, 'Admin', 'Supreme', 'debysergarry@gmail.com', '$2y$10$T3PYIM1AOLimle4c.JpqVucAC7kn2jg/u8D1vMTagbXb04CM4HDG6', '2017-04-27', '12 rue du test', 'Paris', '75019', 'France', '123456789', '2017-04-07 14:37:05', '0000-00-00 00:00:00');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `Booking`
--
ALTER TABLE `Booking`
  ADD CONSTRAINT `Booking_ibfk_1` FOREIGN KEY (`User_Id`) REFERENCES `User` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `Order`
--
ALTER TABLE `Order`
  ADD CONSTRAINT `Order_ibfk_1` FOREIGN KEY (`User_Id`) REFERENCES `User` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `OrderLine`
--
ALTER TABLE `OrderLine`
  ADD CONSTRAINT `OrderLine_ibfk_1` FOREIGN KEY (`Meal_Id`) REFERENCES `Meal` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `OrderLine_ibfk_2` FOREIGN KEY (`Order_Id`) REFERENCES `Order` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
