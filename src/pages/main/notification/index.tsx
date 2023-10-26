import { IonBackButton, IonButtons, IonContent, IonHeader, IonLabel, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from "@ionic/react"
import "./index.css"

export default function(): JSX.Element {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="#"></IonBackButton>
                    </IonButtons>
                    <IonTitle>Header Toolbar</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonSegment value="default">
                    <IonSegmentButton value="default">
                        <IonLabel>Default</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="segment">
                        <IonLabel>Segment</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </IonContent>
        </IonPage>
    )
}