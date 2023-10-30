import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

export const Launch: React.FC = () => (
  <IonPage>
    <IonContent>
      <IonGrid class="pu-full-height">
        <IonRow class="pu-full-height ion-align-items-center ion-text-center">
          <IonCol>
            <IonText>
              Healthpedia
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);