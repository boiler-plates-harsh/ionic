import React from "react";

type Props = { h?: any; w?: any };

const SizedBox = ({ h, w }: Props) => {
	return <div style={{ width: w || "100%", height: h || "100%" }}></div>;
};

export default SizedBox;
