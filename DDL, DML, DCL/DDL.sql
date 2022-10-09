CREATE TABLE `course` (
  `course_id` int(11) NOT NULL,
  `NAME` varchar(255) NOT NULL,
  `duration` int(11) NOT NULL,
  PRIMARY KEY (`course_id`)
)

CREATE TABLE `jadwal` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `tanggal` date NOT NULL,
  `jam` time NOT NULL,
  `students_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `students_id` (`students_id`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `jadwal_ibfk_1` FOREIGN KEY (`students_id`) REFERENCES `students` (`students_id`),
  CONSTRAINT `jadwal_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`)
)

CREATE TABLE `students` (
  `students_id` int(11) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `major` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`students_id`)
)