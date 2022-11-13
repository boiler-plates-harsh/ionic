import toast from "react-hot-toast";

class Toast {
	public toast: any;
	public toast_id: any;

	constructor(id?: any) {
		this.toast = toast;
		this.toast_id = "mytoastId";

		if (id) {
			this.toast_id = id;
		}
	}

	loading(msg?: any) {
		return this.toast.loading(msg ?? "Loading...", { id: this.toast_id });
	}

	success(msg: any) {
		return this.toast.success(msg ?? "", { id: this.toast_id });
	}

	error(msg: any) {
		return this.toast.error(msg ?? "", { id: this.toast_id });
	}

	clear() {
		return this.toast.dismiss(this.toast_id);
	}
}

export default Toast;
