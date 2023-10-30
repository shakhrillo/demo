import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";
import { mailOutline, personOutline } from "ionicons/icons";
import React from "react";

export const Home: React.FC = () => {
  const ionRouter = useIonRouter();  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="transparent">
          <IonTitle color="primary" slot="start">
            Healthpedia
          </IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => ionRouter.push('sign-in', 'forward')}>
              <IonIcon icon={mailOutline}></IonIcon>
            </IonButton>
            <IonButton onClick={() => ionRouter.push('sign-in', 'forward')}>
              <IonIcon icon={personOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Consult with specialists, Prevent you from diseases!</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Get special 10% discount this December
          </IonCardContent>
        </IonCard>
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol>
              <IonText>
                Specialists Category
              </IonText>
            </IonCol>
            <IonCol size="auto">
              <IonButton>
                See all
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Cardiologists</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  213 doctors
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="4">
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Cardiologists</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  213 doctors
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="4">
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Cardiologists</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  213 doctors
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}