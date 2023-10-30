import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { logoApple, logoFacebook, logoGoogle } from "ionicons/icons";
import React from "react";

export const Verification: React.FC = () => (
  <IonPage>
    <IonHeader className="ion-no-border">
      <IonToolbar color="transparent">
        <IonButton slot="end" disabled>Resend Code</IonButton>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonGrid class="ion-padding pu-full-height pu-flex-column">
        <IonRow>
          <IonCol>
            <IonText>
              Verify Account
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonText>
              Four digits code are sent to (**)*** - 513. Enter the codes to verify your account.
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow class="ion-text-center">
          <IonCol>
            <IonInput type="number" placeholder="0"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput type="number" placeholder="0"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput type="number" placeholder="0"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput type="number" placeholder="0"></IonInput>
          </IonCol>
        </IonRow>
        <IonRow className="pu-margin-top-auto">
          <IonCol>
            <IonButton expand="block">Verify</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton expand="block">Send code by mail</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);