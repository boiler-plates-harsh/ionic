export interface GetParams {
	params?: any;
	[key: string]: any;
}
export interface PostParams {
	params?: any;
	body?: any;
	[key: string]: any;
}

export interface UploadParams {
	params?: any;
	body?: any;
	file?: any;
	[key: string]: any;
}

export interface GetResponse {
	(d: { status?: any; message?: any; data?: any }): any;
}

export interface ProductDetail {
	_id: "63556f1e7032777633c414f4";
	name: "pepper";
	description: "test dec";
	photo: ["http://183.83.177.13/assets/1666543388071.png"];
	price: 10;
	unit: {
		_id: "63556e7e7032777633c414df";
		name: "KG";
		createdAt: "2022-10-23T16:40:30.458Z";
		updatedAt: "2022-10-23T16:40:30.458Z";
		__v: 0;
	};
	unit_value: 1;
	weight: "1kg";
	category: {
		_id: "635538297032777633c414d8";
		name: "Pepper";
		description: "Hi";
		photo: "http://183.83.177.13/assets/1666529317326.png";
		active: true;
		createdAt: "2022-10-23T12:48:41.791Z";
		updatedAt: "2022-10-23T12:48:41.791Z";
		__v: 0;
	};
	quantity: 100;
	details: [
		{
			title: "";
			description: "";
		},
	];
	options: [
		{
			price: "";
			title: "";
		},
	];
	discount: 0;
	store: {
		_id: "63556ef37032777633c414ed";
		name: "test store";
		address: "test address";
		apartment: "test apt";
		city: "test city";
		state: "test state";
		pin_code: 123456;
		employee_count: 10;
		createdAt: "2022-10-23T16:42:27.730Z";
		updatedAt: "2022-10-23T16:42:27.730Z";
		__v: 0;
	};
	active: true;
	createdAt: "2022-10-23T16:43:10.341Z";
	updatedAt: "2022-10-23T16:43:10.341Z";
	__v: 0;
}

export interface AddressInfo {
	_id: "635d562ef6c6314bfeae3f55";
	user: "634aabf56a4b69599ccf076f";
	type: "HOME";
	address: "B72, shastri nagar";
	apartment: "House";
	how_to_reach: "new Sulabh Complex";
	city: "Jaipur";
	state: "Rajasthan";
	pin_code: 302016;
	primary: false;
	createdAt: "2022-10-29T16:34:54.526Z";
	updatedAt: "2022-10-29T16:34:54.526Z";
	__v: 0;
}

export interface ActiveOrderResponse {
	_id: "6326c7cff8ccd5ff26fd2829";
	user: {
		_id: "62c19de40f177f6331bdd3c3";
		phone: 9983396152;
		address: [];
		device_token: "62c19de40f177f6331bdd3c3|RybetEQdMP7QKDfXCTqk3B74fRrKXuwmmynVxtWnDsJm32cvdF";
		createdAt: "2022-07-03T13:47:16.795Z";
		updatedAt: "2022-08-28T17:18:57.673Z";
		__v: 0;
		email: "harsh";
		name: "harsh";
	};
	number: 46;
	items: [
		{
			product: {
				_id: "63236f4c59c726278ecaa0ff";
				name: "Banana (Kela)";
				description: "Bananas are one of the most popular fruits in the world. They're full important nutrients, but eating too many could end up doing more harm than good. Too much of any single food may contribute to weight gain and nutrient deficiencies. One to two bananas per day is considered a moderate intake for most healthy people.";
				photo: ["https://assets.frutocity.com/1663266575988.png"];
				price: 28;
				unit: {
					_id: "62c1d3e7c41e3c95d258302b";
					name: "KG";
					createdAt: "2022-07-03T17:37:43.899Z";
					updatedAt: "2022-07-03T17:37:43.899Z";
					__v: 0;
				};
				unit_value: 3;
				weight: "3Kg";
				category: {
					_id: "62c1d3dfc41e3c95d2583026";
					name: "Fruits";
					description: "Best Quality Fruits";
					photo: "https://assets.frutocity.com/1663267672088.png";
					active: true;
					createdAt: "2022-07-03T17:37:35.658Z";
					updatedAt: "2022-09-15T18:47:53.871Z";
					__v: 0;
				};
				quantity: 8;
				details: [
					{
						title: "";
						description: "";
					},
				];
				options: [
					{
						price: "";
						title: "";
					},
				];
				discount: 0;
				store: {
					_id: "62c1d41af49bc4915c95ff03";
					name: "Vaishali Nagar";
					address: "B72, nahri ka naka, madina masjid road Jaipur";
					apartment: "Ridhi Sidhi";
					city: "Jaipur";
					state: "Rājasthān";
					pin_code: 302016;
					employee_count: 19;
					createdAt: "2022-07-03T17:38:34.752Z";
					updatedAt: "2022-07-03T17:38:34.752Z";
					__v: 0;
				};
				active: true;
				createdAt: "2022-09-15T18:30:36.342Z";
				updatedAt: "2022-09-15T18:30:36.342Z";
				__v: 0;
			};
			quantity: 1;
			_id: "6326c7cff8ccd5ff26fd282a";
		},
		{
			product: {
				_id: "63236fa159c726278ecaa107";
				name: "Green Grapes";
				description: "Sonaka Green Grapes are juicy elongated berries with sweet fresh taste. They are considered best table fruits with low fat and high levels of sugar, vitamin C and vitamin K. These seedless grapes are extremely low in calories with high nutrition and taste.";
				photo: ["https://assets.frutocity.com/1663266718782.png"];
				price: 216;
				unit: {
					_id: "62c5c536c41e3c95d25830e8";
					name: "Gram";
					createdAt: "2022-07-06T17:24:06.375Z";
					updatedAt: "2022-07-06T17:24:06.375Z";
					__v: 0;
				};
				unit_value: 500;
				weight: "500 g";
				category: {
					_id: "62c1d3dfc41e3c95d2583026";
					name: "Fruits";
					description: "Best Quality Fruits";
					photo: "https://assets.frutocity.com/1663267672088.png";
					active: true;
					createdAt: "2022-07-03T17:37:35.658Z";
					updatedAt: "2022-09-15T18:47:53.871Z";
					__v: 0;
				};
				quantity: 8;
				details: [
					{
						title: "";
						description: "";
					},
				];
				options: [
					{
						price: "";
						title: "";
					},
				];
				discount: 0;
				store: {
					_id: "62c1d41af49bc4915c95ff03";
					name: "Vaishali Nagar";
					address: "B72, nahri ka naka, madina masjid road Jaipur";
					apartment: "Ridhi Sidhi";
					city: "Jaipur";
					state: "Rājasthān";
					pin_code: 302016;
					employee_count: 19;
					createdAt: "2022-07-03T17:38:34.752Z";
					updatedAt: "2022-07-03T17:38:34.752Z";
					__v: 0;
				};
				active: true;
				createdAt: "2022-09-15T18:32:01.069Z";
				updatedAt: "2022-09-15T18:32:01.069Z";
				__v: 0;
			};
			quantity: 1;
			_id: "6326c7cff8ccd5ff26fd282b";
		},
	];
	status: "AWAITING";
	address: {
		_id: "631b6fbb7ecece9cd36de201";
		user: "62c19df90f177f6331bdd3c6";
		type: "Jaipur ";
		address: "Jaipur ";
		apartment: "Jaipur ";
		how_to_reach: "hello";
		city: "Jaipur";
		state: "state";
		pin_code: 302012;
		primary: false;
		geo_location: {
			full_address: "143, Azad Colony, Nahari Ka Naka, Jaipur, Rajasthan 302016, India";
		};
		createdAt: "2022-09-09T16:54:19.754Z";
		updatedAt: "2022-09-09T16:54:19.754Z";
		__v: 0;
	};
	createdAt: "2022-09-18T07:25:03.758Z";
	updatedAt: "2022-09-18T07:25:03.758Z";
	__v: 0;
}

export interface OrderDetail {
	_id: "635e7259f6c6314bfeae4b00";
	user: "634aabf56a4b69599ccf076f";
	number: 1;
	items: [
		{
			product: "63556f1e7032777633c414f4";
			quantity: 1;
			_id: "635e7259f6c6314bfeae4b01";
		},
	];
	status: "AWAITING";
	address: "635d562ef6c6314bfeae3f55";
	createdAt: "2022-10-30T12:47:21.357Z";
	updatedAt: "2022-10-30T12:47:21.357Z";
	__v: 0;
}
