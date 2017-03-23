-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Jeu 23 Mars 2017 à 17:21
-- Version du serveur: 5.5.54-0ubuntu0.14.04.1
-- Version de PHP: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `my_blog`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUsers` int(11) NOT NULL,
  `idCategorie` int(11) NOT NULL,
  `title` varchar(60) NOT NULL,
  `content` text NOT NULL,
  `date_creation` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Contenu de la table `articles`
--

INSERT INTO `articles` (`id`, `idUsers`, `idCategorie`, `title`, `content`, `date_creation`) VALUES
(20, 1, 1, 'Top 10 Guitar Solos Of All Time', '#10 "Crossroads" (Eric Clapton) - Cream, Wheels of Fire, 1968\r\n#9 "Crazy Train" (Randy Rhoads) - Ozzy Osbourne, Blizzard of Ozz, 1981\r\n#8 "Hotel California" (Don Felder, Joe Walsh) - The Eagles,Hotel California, 1976\r\n#7 "One" (Kirk Hammett) - Metallica, ...And Justice for All, 1988\r\n#6 "November Rain" (Slash) - Guns N'' Roses, Use Your Illusion I, 1991\r\n#5 "All Along the Watchtower" (Jimi Hendrix) - The Jimi Hendrix Experience, Electric Ladyland, 1968\r\n#4 "Comfortably Numb" (David Gilmour) - Pink Floyd, The Wall, 1979\r\n#3 "Free Bird" (Allen Collins, Gary Rossington) - Lynyrd Skynyrd,  pronounced ''leh-''nérd ''skin-''nérd, 1973\r\n#2 "Eruption" (Eddie Van Halen) - Van Halen, Van Halen, 1978\r\n#1 "Stairway to Heaven" (Jimmy Page) - Led Zeppelin, Led Zeppelin IV, 1971\r\n', '2017-03-23'),
(22, 1, 2, 'Rock and Roll Hall Of Fame Inductees', '2015 new Inductees\r\nBill Withers (Performers)\r\nThe "5" Royales (Early Influences)\r\nGreen Day (Performers)\r\nJoan Jett & The BlackHearts (Performers)\r\nLou Reed (Performers)\r\nThe Paul Butterfield Blues Band (Performers)\r\nRingo Starr (Award for Musical Excellence)\r\nStevie Ray Vaughan & Double Trouble (Performers)', '2017-03-23'),
(23, 1, 3, 'Hotel California - The Eagles', '"Hotel California" is the title track from the Eagles'' album of the same name and was released as a single in February 1977. Writing credits for the song are shared by Don Felder (music), Don Henley, and Glenn Frey (lyrics). The Eagles'' original recording of the song features Henley singing the lead vocals and concludes with an extended section of electric guitar interplay between Felder and Joe Walsh.\r\n\r\nThe song is considered the most famous recording of the band, and its long guitar coda has been voted the best guitar solo of all time. The song was awarded the Grammy Award for Record of the Year in 1978. The lyrics of the song have been given various interpretations by fans and critics alike, the Eagles themselves described the song as their "interpretation of the high life in Los Angeles". In the 2013 documentary History of the Eagles, Henley said that the song was about "a journey from innocence to experience... that''s all..."', '2017-03-23');

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `libelle` (`libelle`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `categories`
--

INSERT INTO `categories` (`id`, `libelle`) VALUES
(3, 'Classics'),
(1, 'Legendary Guitar Solos'),
(2, 'Rock n''Roll Hall Of Fame');

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idArticle` int(11) NOT NULL,
  `titre` varchar(30) NOT NULL,
  `commentaire` text NOT NULL,
  `date_post` datetime NOT NULL,
  `idUsers` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=58 ;

--
-- Contenu de la table `comments`
--

INSERT INTO `comments` (`id`, `idArticle`, `titre`, `commentaire`, `date_post`, `idUsers`) VALUES
(46, 20, 'Oh my god', 'All of this songs are great :)', '2017-03-23 00:00:00', 1),
(47, 20, 'GarryTest', 'azezaezaeza', '2017-03-23 00:00:00', 1),
(51, 20, 'Great list', 'This is a good list bro ', '2017-03-23 00:00:00', 1),
(52, 22, 'Oh my god it works !', 'Single comment ', '2017-03-23 00:00:00', 1),
(53, 22, 'GarryTest', 'azeaeazeza', '2017-03-23 00:00:00', 1),
(55, 22, 'Hey l''heure march', 'c''est vrai ? ', '2017-03-23 15:09:06', 1),
(56, 20, 'GarryTest', '12346', '2017-03-23 15:45:31', 2),
(57, 23, 'Classic', 'Classic song', '2017-03-23 16:49:48', 1);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(80) NOT NULL,
  `pseudo` varchar(20) NOT NULL,
  `date_inscrip` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `pseudo` (`pseudo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `email`, `pseudo`, `date_inscrip`) VALUES
(1, 'test1@test.fr', 'Garry', '2017-03-01 12:10:00'),
(2, 'test2@test.fr', 'ArminRandom', '2017-03-07 17:34:12');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
