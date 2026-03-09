CREATE TABLE `visa_fees` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`category` text NOT NULL,
	`type` text NOT NULL,
	`label` text NOT NULL,
	`fee_centavos` integer,
	`parent_id` integer,
	`sort_order` integer NOT NULL,
	`grid_column` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`parent_id`) REFERENCES `visa_fees`(`id`) ON UPDATE no action ON DELETE no action
);
