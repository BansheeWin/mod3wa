-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Jeu 22 Septembre 2016 à 12:11
-- Version du serveur: 5.5.50-0ubuntu0.14.04.1
-- Version de PHP: 5.5.9-1ubuntu4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `blog`
--
CREATE DATABASE IF NOT EXISTS `blog` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `blog`;

-- --------------------------------------------------------

--
-- Structure de la table `Author`
--

CREATE TABLE IF NOT EXISTS `Author` (
  `Id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `Author`
--

INSERT INTO `Author` (`Id`, `FirstName`, `LastName`) VALUES
(1, 'John', 'Doe');

-- --------------------------------------------------------

--
-- Structure de la table `Category`
--

CREATE TABLE IF NOT EXISTS `Category` (
  `Id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(40) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Name` (`Name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `Category`
--

INSERT INTO `Category` (`Id`, `Name`) VALUES
(2, 'Jeux-Vidéos'),
(1, 'Voyages');

-- --------------------------------------------------------

--
-- Structure de la table `Comment`
--

CREATE TABLE IF NOT EXISTS `Comment` (
  `Id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `NickName` varchar(30) DEFAULT NULL,
  `Contents` text NOT NULL,
  `CreationTimestamp` datetime NOT NULL,
  `Post_Id` smallint(5) unsigned NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `CreationTimestamp` (`CreationTimestamp`),
  KEY `Post_Id` (`Post_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `Post`
--

CREATE TABLE IF NOT EXISTS `Post` (
  `Id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `Title` varchar(100) NOT NULL,
  `Contents` text NOT NULL,
  `CreationTimestamp` datetime NOT NULL,
  `Author_Id` tinyint(3) unsigned DEFAULT NULL,
  `Category_Id` tinyint(3) unsigned DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Title` (`Title`),
  KEY `CreationTimestamp` (`CreationTimestamp`),
  KEY `Author_Id` (`Author_Id`),
  KEY `Category_Id` (`Category_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `Comment`
--
ALTER TABLE `Comment`
  ADD CONSTRAINT `Comment_ibfk_1` FOREIGN KEY (`Post_Id`) REFERENCES `Post` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `Post`
--
ALTER TABLE `Post`
  ADD CONSTRAINT `Post_ibfk_1` FOREIGN KEY (`Author_Id`) REFERENCES `Author` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Post_ibfk_2` FOREIGN KEY (`Category_Id`) REFERENCES `Category` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
