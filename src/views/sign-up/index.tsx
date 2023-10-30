import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

export const Signup: React.FC = () => (
  <IonPage>
    <IonHeader className="ion-no-border">
      <IonToolbar color="transparent">
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonText>
              Welcome to Healthpedia
            </IonText>
          </IonCol>
          <IonCol>
            <IonText>
              Let us get to know you better!
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);