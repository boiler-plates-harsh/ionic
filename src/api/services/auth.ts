// // 👇️ ts-nocheck ignores all ts errors in the file
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-nocheck

import { GetParams, GetResponse, PostParams, UploadParams } from "types/type";
import Toast from "helpers/Toast";
import { Validate } from "validation/utils/Pick";
import schema from "validation/schema/schema";
import Client from "api/Client";
import { Router } from "react-router";
import { readAtom, writeAtom } from "jotai-nexus";
import atom from "store/atom";
import env from "config/env";
import { io } from "socket.io-client";

const api = new Client();
const toast = new Toast();

export default {
	sendOtp: ({ params, body }: PostParams, cb?: GetResponse) => {
		toast.loading();
		// let data = Validate([], schema.auth.send_otp, body);

		// if (!data) {
		// 	return;
		// }

		api
			.post("auth/send-otp", { ...body }, params)
			.then((d) => {
				if (d.status) {
					toast.clear();
					writeAtom(atom.api.send_otp, d?.data);
					toast.success(d.message + " " + d.data.otp);
					return cb(d);
				} else {
					toast.error(d.message);
				}
			})
			.catch((err) => console.log(err));
	},

	address_list: ({ params }: GetParams, cb?: GetResponse) => {
		api
			.get("auth/address", params)
			.then((d) => {
				if (d.status) {
					writeAtom(atom.api.address_list, d?.data);

					return cb(d);
				}
			})
			.catch((err) => console.log(err));
	},

	socket: (cb) => {
		let socket: any = readAtom(atom.socket);

		if (!socket) {
			socket = io(env.socket_url);
			// socket = io(api.socket_url, { transports: ["websocket", "polling"], })
		}

		socket.on("error", (err) => {
			console.log(err);
			return;
		});

		writeAtom(atom.socket, socket);

		return cb(socket);
	},
};
