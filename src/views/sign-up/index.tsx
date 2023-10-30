import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
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
        </IonRow>
        <IonRow>
          <IonCol>
            <IonText>
              Let us get to know you better!
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonList>
        <IonItem>
          <IonInput placeholder="First Name"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput placeholder="First Name"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput placeholder="Password" type="password" helperText="*Minimum 6 characters"></IonInput>
        </IonItem>
      </IonList>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonButton expand="block">Continue</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);