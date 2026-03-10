PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_visa_fees` (
	`id` text PRIMARY KEY NOT NULL,
	`category` text NOT NULL,
	`type` text NOT NULL,
	`label` text NOT NULL,
	`fee_centavos` integer,
	`parent_id` text,
	`sort_order` integer NOT NULL,
	`grid_column` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`parent_id`) REFERENCES `visa_fees`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_visa_fees`("id", "category", "type", "label", "fee_centavos", "parent_id", "sort_order", "grid_column", "created_at", "updated_at") SELECT "id", "category", "type", "label", "fee_centavos", "parent_id", "sort_order", "grid_column", "created_at", "updated_at" FROM `visa_fees`;--> statement-breakpoint
DROP TABLE `visa_fees`;--> statement-breakpoint
ALTER TABLE `__new_visa_fees` RENAME TO `visa_fees`;--> statement-breakpoint
PRAGMA foreign_keys=ON;