import {
	IonContent,
	IonHeader,
	IonImg,
	IonPage,
	IonTitle,
	IonToolbar,
	useIonRouter,
} from "@ionic/react";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import atom from "store/atom";

import "./Splash.scss";
import { motion } from "framer-motion";
import { useHistory } from "react-router";
import { toast } from "react-hot-toast";
import { App } from "@capacitor/app";

type Props = {};

const Splash = (props: Props) => {
	const [user, setuser] = useAtom(atom.storage.user);
	let router = useIonRouter();

	const history = useHistory();

	useEffect(() => {
		setTimeout(handleSplash, 3000);
	}, []);

	const handleSplash = () => {
		if (!user) {
			// history.replace("/dashboard/tab1");
			history.replace("/login");
		} else {
			history.replace("/dashboard/tab1");
		}
	};

	return (
		<IonPage>
			<IonContent fullscreen className='spash-screen '>
				<div className='sp-ic'>
					<motion.img
						src='/assets/icon/logo.svg'
						initial={{ scale: 0 }}
						animate={{ rotate: 360, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					/>
					<motion.h4
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}>
						Grocery Store
					</motion.h4>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Splash;
