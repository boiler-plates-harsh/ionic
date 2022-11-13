import React, { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
type Props = {};

const SmoothScroll = (props: Props) => {
	useEffect(() => {
		Scrollbar.init(document.body, { damping: 0.07 });
	}, []);
	return null;
};

export default SmoothScroll;
