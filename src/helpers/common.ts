import api from "api/services/api";
import { toast } from "react-hot-toast";
import env from "../config/env";

const ChangeState = (state: any) => (key: any, value?: any) => (e) => {
	state((p) => {
		return {
			...p,
			[key]: value != null ? value : e?.target?.value,
		};
	});

	return true;
};

const JSONstringify = (json) => {
	if (typeof json != "string") {
		json = JSON.stringify(json, undefined, "\t");
	}
	var arr = [],
		_string = "color:green",
		_number = "color:darkorange",
		_boolean = "color:blue",
		_null = "color:magenta",
		_key = "color:red";
	json = json.replace(
		/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
		function (match) {
			var style = _number;
			if (/^"/.test(match)) {
				if (/:$/.test(match)) {
					style = _key;
				} else {
					style = _string;
				}
			} else if (/true|false/.test(match)) {
				style = _boolean;
			} else if (/null/.test(match)) {
				style = _null;
			}
			arr.push(style);
			arr.push("");
			return "%c" + match + "%c";
		},
	);
	arr.unshift(json);
	console.log.apply(console, arr);
};
const log = JSONstringify;

const color: any = [
	["r", 1],
	["g", 2],
	["b", 4],
	["w", 7],
	["c", 6],
	["m", 5],
	["y", 3],
	["k", 0],
].reduce(
	(cols, col) => ({
		...cols,
		[col[0]]: (f) => `\x1b[3${col[1]}m${f}\x1b[0m`,
	}),
	{},
);

const r: any = (msg) => {
	console.log(color.r(msg));
};

const get_image = (path: string) => {
	return `${env.file_path}2022/projects/${path}`;
};

const toBase64 = (file) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});

function getFile(string) {
	var base64 = string;
	var base64Parts = base64.split(",");

	var fileFormat = base64Parts[0].split(";")[1];

	let format = base64Parts[0].split(";")[0].split(":")[1];

	var fileContent = base64Parts[1];

	const type = base64.split(";")[0].split("/")[1];
	console.log(type);

	var file = new File([fileContent], "myFile." + type, {
		type: format,
	});

	return file;
}

const handle_cart = ({ id, opt = {}, remove = false, setCart, cart }) => {
	let c = cart;

	if (!id) return toast.error("please provide a id");

	if (!c) {
		c = {};
	}

	if (!c[id] && !remove) {
		c[id] = {
			quantity: 1,
			...opt,
		};
	} else {
		if (remove) {
			if (c[id]) {
				if (c[id].quantity == 1) {
					delete c[id];
				} else {
					c[id] = {
						quantity: c[id].quantity - 1,
						...opt,
					};
				}
			}
		} else {
			c[id] = {
				quantity: c[id].quantity + 1,
				...opt,
			};
		}
	}

	// toast.success(JSON.stringify(c));
	setCart((p) => {
		return {
			...p,
			...c,
			// [`${d?._id}`]: { quantity: (p[`${d?._id}`]?.quantity || 0) + 1 },
		};
	});

	// api.auth.handle_cart({});
};
export default {
	ChangeState,
	JSONstringify,
	r,
	log,
	get_image,
	toBase64,
	getFile,
	handle_cart,
};
