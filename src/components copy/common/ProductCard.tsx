import { IonButton, IonIcon, IonImg, useIonRouter } from "@ionic/react";
import api from "api/services/api";
import common from "helpers/common";
import { addOutline, removeOutline } from "ionicons/icons";
import { useAtom, useAtomValue } from "jotai";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router";
import atom from "store/atom";
import { ProductDetail } from "types/type";
import "./ProductCard.scss";

type Props = {
	d?: ProductDetail;
};

const ProductCard = ({ d }: Props) => {
	const router = useIonRouter();
	const history = useHistory();
	const [cart, setCart] = useAtom(atom.storage.cart);

	// useEffect(() => {
	// 	toast.success("Cart udpated");
	// }, [cart]);

	const go_to_productDetail = () => {
		return history.push(`/product-detail/${d?._id}`, null);
	};

	return (
		<div className='product_card'>
			<div className='pc_img' onClick={go_to_productDetail}>
				<IonImg src={d?.photo?.[0] || "/assets/pngs/pepper.png"} />
			</div>
			<div className='pc_titles'>
				<p>{d?.name}</p>
				<small>{d?.weight}</small>
			</div>
			<div className='pc_price_btn'>
				<div className='pc_price'>₹{d?.price}</div>
				{cart[d?._id]?.quantity ? (
					<div className='pd_add_to_cart'>
						<IonButton
							className='pd_atc_btn_rm ion-no-padding'
							onClick={() => {
								common.handle_cart({
									cart,
									id: d?._id,
									remove: true,
									setCart: setCart,
								});
							}}>
							<IonIcon icon={removeOutline} />
						</IonButton>
						<IonButton className='pd_atc_btn_count'>
							{cart[d?._id]?.quantity}
						</IonButton>
						<IonButton
							className='pd_atc_btn_add ion-no-padding'
							onClick={() => {
								common.handle_cart({
									cart,
									id: d?._id,
									remove: false,
									setCart: setCart,
								});
							}}>
							<IonIcon icon={addOutline} />
						</IonButton>
					</div>
				) : (
					<div className='pc_btn'>
						<IonButton
							className='ion-no-padding'
							onClick={() => {
								common.handle_cart({
									cart,
									id: d?._id,
									remove: false,
									setCart: setCart,
								});
							}}>
							<IonIcon icon={addOutline} />
						</IonButton>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
