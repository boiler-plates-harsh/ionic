import {
	IonApp,
	IonFab,
	IonFabButton,
	IonIcon,
	IonImg,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	useIonRouter,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { add, ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "pages/Tab1";
import React, { useEffect, useState } from "react";
import { Route, useHistory } from "react-router";

type Props = {};

const DashBoard = (props: Props) => {
	const [stop, setStop] = useState(true);
	const router = useHistory();
	const r = useIonRouter();

	const [path, setpath] = useState("/dashboard/tab1");

	useEffect(() => {
		console.log(router.location.pathname);
	}, [r]);

	return (
		<IonApp>
			<IonTabs>
				<IonRouterOutlet>
					<Route path='/dashboard/tab1'>
						<Tab1 />
					</Route>
				</IonRouterOutlet>
				<IonTabBar
					slot='bottom'
					style={{
						width: "100vw",
						margin: "auto",
						padding: "0 10px",
					}}>
					<IonTabButton
						tab={"path"}
						href={"path"}
						onClick={(e) => {
							e.preventDefault();
						}}>
						<div
							style={{
								width: "100%",
								height: "100%",
								display: "flex",
								justifyContent: "space-between",
								padding: 6,
								alignItems: "center",
								flexDirection: "column",
							}}>
							{"icon"}

							<IonLabel>{"Title"}</IonLabel>
						</div>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
			{/* </IonReactRouter> */}
		</IonApp>
	);
};

export default DashBoard;
