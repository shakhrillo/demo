import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import React from "react";
import WalkthroughComponent from "../../components/walkthrough";

export const Walkthrough: React.FC = () => (
  <>
    <WalkthroughComponent url="https://images.pexels.com/photos/18687546/pexels-photo-18687546/free-photo-of-a-green-surfboard-on-a-wooden-pier-overlooking-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
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
    </WalkthroughComponent>
  </>
);