import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonText, IonToolbar, useIonRouter } from "@ionic/react";
import React from "react";

export const Shop: React.FC = () => {
  const ionRouter = useIonRouter();

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonText>Shop</IonText>
      </IonContent>
    </IonPage>
  )
}