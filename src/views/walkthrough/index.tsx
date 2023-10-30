import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import React from "react";

export const Walkthrough: React.FC = () => (
  <IonPage>
    <IonHeader className="ion-no-border">
      <IonToolbar color="transparent">
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <IonGrid class="pu-flex-column pu-full-height">
        <IonRow>
          <IonCol>
            <IonText>
              Easiest Consultation
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonText>
              Get the right treatment directly from doctor by online consultation
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow class="pu-margin-top-auto">
          <IonCol>
            <IonButton expand="block">Continue</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);