import {
	IonRefresher,
	IonRefresherContent,
	RefresherEventDetail,
} from "@ionic/react";
import React from "react";

type Props = {};

const RefreshIndicator = (props: Props) => {
	function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
		// Any calls to load data go here
		event.detail.complete();
	}

	return (
		<IonRefresher slot='fixed' onIonRefresh={handleRefresh}>
			<IonRefresherContent></IonRefresherContent>
		</IonRefresher>
	);
};

export default RefreshIndicator;
