CREATE TABLE `shortCode` (
	`id` int AUTO_INCREMENT NOT NULL,
	`url` varchar(255) NOT NULL,
	`shortCode` varchar(20) NOT NULL,
	CONSTRAINT `shortCode_id` PRIMARY KEY(`id`)
);
