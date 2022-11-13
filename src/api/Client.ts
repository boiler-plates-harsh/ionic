import axios, {
	AxiosRequestConfig,
	AxiosRequestHeaders,
	AxiosResponse,
} from "axios";
import env from "config/env";
import common from "../helpers/common";

class Client {
	public BaseURL: string;
	public headers: any;
	public params: any;
	public ignorePaths: any;

	constructor(options: any = {}) {
		this.BaseURL = env.base_url || "http://localhost:4000/";
		this.headers = options.headers || {};
		this.headers["Content-Type"] = "application/json";
		axios.defaults.timeout = 12000;
		this.params = {};
		this.ignorePaths = [
			"auth/login",
			"auth/test",
			"auth/register",
			"auth/send-mobile-otp",
			"auth/get-otp",
			"auth/verify-mobile-otp",
			"project/list",
			"auth/google-login",
			"auth/register",
			"auth/forgot-password",
			"/public",
			"/send-test-notification",
			"auth/verify-otp",
			"auth/send-otp",
			"project/add-temp",
			"project/detail",
			"project/get-my-temp",
		];
	}

	setHeader(key, value) {
		this.headers[key] = value;
		return this;
	}

	setAuth(url) {
		let user: any = localStorage.getItem("user");
		if (user != null && !this.ignorePaths.includes(url)) {
			user = JSON.parse(user);
			this.headers["Authorization"] = "Bearer " + user.token;
		}
	}

	async get(url, params) {
		try {
			this.headers = {};
			this.setAuth(url);

			url = env.base_url + url;
			params = { ...params } || {};

			const response = await axios.get(url, {
				params: params,
				headers: this.headers,
			});
			const status = response.status == 200;
			if (status) {
				common.JSONstringify(response.data);
				return response.data;
			}
		} catch (e) {
			return e;
		}
	}

	async post(url, body, params) {
		try {
			this.headers = {};
			this.headers["Content-Type"] = "application/json";
			this.setAuth(url);

			url = env.base_url + url;
			console.log(url);
			params = { ...params } || {};
			body = body || {};
			const response = await axios.post(url, body, {
				params: params,
				headers: this.headers,
			});
			const status = response.status == 200;
			console.log(response);
			if (status) {
				common.JSONstringify(response.data);
				return response.data;
			}
		} catch (e) {
			console.log(e);
			return e;
		}
	}

	async uploadFile(url, body, params) {
		try {
			this.headers = {};
			this.headers["Content-Type"] = "multipart/form-data";
			this.setAuth(url);

			url = env.base_url + url;

			body = body || {};
			params = { ...params } || {};

			const response = await axios.post(url, body, {
				params: params,
				headers: this.headers,
			});
			const status = response.status == 200;

			if (status) {
				common.JSONstringify(response.data);
				return response.data;
			}
		} catch (e) {
			return e;
		}
	}
}

export default Client;
