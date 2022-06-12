export interface Product {
	id?: string;
	code?: string;
	name?: string;
	description?: string;
	price?: number;
	quantity?: number;
	inventoryStatus?: string;
	category?: string;
	image?: string;
	rating?: number;
}

export class Product {
	id?: string;
	name?: string;
	description?: string;
	price?: number;
	discount?: number;
	quantity?: number;
	category_id?: string;
	category_name?: string;
	images?: string[];
	image1?: string;
	image2?: string;
	image3?: string;
	image4?: string;
	image5?: string;
	reviews?: [{
		user_id: string;
		user_name: string;
		rating: number;
		comment: string;
	}];
}