-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2020 at 10:47 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wil`
--

-- --------------------------------------------------------

--
-- Table structure for table `mytable`
--

CREATE TABLE `mytable` (
  `Student_Number` int(11) NOT NULL,
  `University` varchar(44) NOT NULL,
  `Nationality` varchar(11) NOT NULL,
  `Course` varchar(82) NOT NULL,
  `Mode_of_Study` varchar(9) NOT NULL,
  `Number_of_failed_modules` int(11) NOT NULL,
  `Gender` varchar(6) NOT NULL,
  `Age` varchar(14) NOT NULL,
  `Employment` varchar(9) NOT NULL,
  `Company_Sector` varchar(14) NOT NULL,
  `Company_Name` varchar(38) DEFAULT NULL,
  `How_was_the_internship_obtained` varchar(17) DEFAULT NULL,
  `Experience_rating` int(11) NOT NULL,
  `Employed_by_the_company_after_the_internship` varchar(36) NOT NULL,
  `Was_your_internship_job_in_line_with_what_you_studied` varchar(3) DEFAULT NULL,
  `Internship_environment` varchar(8) DEFAULT NULL,
  `Goals_after_completing_internship` varchar(54) DEFAULT NULL,
  `Knowledge_gained_through_Internship` varchar(140) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mytable`
--

INSERT INTO `mytable` (`Student_Number`, `University`, `Nationality`, `Course`, `Mode_of_Study`, `Number_of_failed_modules`, `Gender`, `Age`, `Employment`, `Company_Sector`, `Company_Name`, `How_was_the_internship_obtained`, `Experience_rating`, `Employed_by_the_company_after_the_internship`, `Was_your_internship_job_in_line_with_what_you_studied`, `Internship_environment`, `Goals_after_completing_internship`, `Knowledge_gained_through_Internship`) VALUES
(180019287, 'International University of Management', 'Namibian', 'Bachelor in Nursing Honours', 'Full time', 0, 'Female', '21 to 25 years', 'Unemplyed', 'Public Sector', 'N/A', 'School placements', 10, 'Still busy with internship', 'Yes', 'Working', 'Return to studies', 'To make sure I\'m healthy, so I treat my patients to the best of my ability'),
(180050966, 'International University of Management', 'Namibian', 'Bachelor of Education in secondary', 'Full time', 1, 'Female', '21 to 25 years', 'Unemplyed', 'Public Sector', NULL, NULL, 8, 'Still busy with internship', 'Yes', 'Training', 'Continue working for the company if they will allow it', NULL),
(200709160, 'Namibia University of Science and Technology', 'Indonesian', 'Bachelor of Informatics (Now Bachelor of Computer Science Hnrs: Digital Forensics)', 'Full time', 2, 'Female', '30 to 35 years', 'Employed', 'Private Sector', 'Sanlam Namibia', 'WIL', 7, 'I am now establishing my own brand.', 'No', 'Training', 'Return to studies', 'Industry is moving into automation. Their employees are afraid that they will loose their jobs as companies are not reinventing job titles.'),
(213108836, 'Namibia University of Science and Technology', 'Namibian', 'Bachelor of science', 'Full time', 1, 'Female', '21 to 25 years', 'Unemplyed', 'Public Sector', 'Ministry of health and social services', 'I applied.', 4, 'No', 'Yes', 'Learning', 'Return to studies', 'Workinf with instruments'),
(216074371, 'Namibia University of Science and Technology', 'Namibian', 'Bachelor of Communication', 'Part time', 2, 'Female', '21 to 25 years', 'Unemplyed', 'Private Sector', 'GIZ', 'WIL', 5, 'No', 'Yes', 'Working', 'Continue working for the company if they will allow it', NULL),
(217024920, 'Namibia University of Science and Technology', 'Namibian', 'Diploma in TVET', 'Distance', 0, 'Female', '26 to 30 years', 'Unemplyed', 'Public Sector', 'Eenhana Vocational Training Centre', 'WIL', 2, 'No', 'Yes', 'Training', 'Return to studies', NULL),
(217126022, 'Namibia University of Science and Technology', 'ANGOLAN', 'BACHELOR OF COMPUTER SCIENCE', 'Part time', 1, 'Male', '21 to 25 years', 'Employed', 'Private Sector', 'NUST', 'REFERRALS', 8, 'Yes', 'No', 'Working', 'Become self employed', 'N/A'),
(218081030, 'Namibia University of Science and Technology', 'Namibian', 'Computer Science', 'Full time', 5, 'Male', '21 to 25 years', 'Unemplyed', 'Private Sector', NULL, 'Legally', 8, 'No', 'Yes', 'Training', 'Return to studies', NULL),
(218102593, 'Namibia University of Science and Technology', 'Namibian', 'Bachelor of informatics', 'Full time', 0, 'Female', '17 to 20 years', 'Unemplyed', 'No internship', NULL, NULL, 1, 'No', NULL, NULL, NULL, NULL),
(220044139, 'Namibia University of Science and Technology', 'Namibia', 'Bachelor of accounting ( Charted Accountancy)', 'Full time', 0, 'Male', '17 to 20 years', 'Unemplyed', 'Private Sector', 'Windhoek accounting and Taxation', 'Referrals', 8, 'Still busy with internship', 'Yes', 'Learning', 'Return to studies', 'To contact with clients. Processing invoices'),
(2147483647, 'Namibia University of Science and Technology', 'Namibian', 'Civil Engineering', 'Full time', 0, 'Female', '21 to 25 years', 'Employed', 'Private Sector', 'Pregon Consulting Engineers', 'Referrals', 10, 'Still busy with internship', 'Yes', 'Learning', 'Return to studies', 'Humbleness');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mytable`
--
ALTER TABLE `mytable`
  ADD PRIMARY KEY (`Student_Number`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
