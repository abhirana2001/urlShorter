CREATE TABLE `shortCode` (
	`id` int AUTO_INCREMENT NOT NULL,
	`url` varchar(255) NOT NULL,
	`shortCode` varchar(20) NOT NULL,
	`user_id` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`update_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `shortCode_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_Info` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`update_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `user_Info_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_Info_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `shortCode` ADD CONSTRAINT `shortCode_user_id_user_Info_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user_Info`(`id`) ON DELETE no action ON UPDATE no action;