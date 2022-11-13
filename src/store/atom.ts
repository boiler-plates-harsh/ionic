import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { ProductDetail } from "types/type";

export default {
	storage: {
		user: atomWithStorage("user", null),
		cart: atomWithStorage("cart", {}),
	},
	socket: atom(0),

	api: {
		send_otp: atom(false),
		banner_list: atom([]),
		address_list: atom([]),
		category_products: atom(false),
		product_details: atom<ProductDetail | any>(false),
		category_list: atom([]),
		exclusive: atom([]),
		best_selling: atom([]),
		most_popular: atom([]),
		cart_list: atom([]),
		order_list: atom([]),
		active_order: atom(false),
	},
};
