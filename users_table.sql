CREATE TABLE `user` (
  `user_id` varchar(36) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
