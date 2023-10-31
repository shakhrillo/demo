import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { sendOutline } from "ionicons/icons";
import React from "react";

export const Chat: any = (props: { title: string }) => {
  const ionRouter = useIonRouter();

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>{props.title}</IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding" color={"light"}>
        <IonGrid
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "end",
        //   height: "100%",
        // }}
        >
          <IonRow>
            <IonCol size="2">
              <IonAvatar>
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  <IonText>Hi, dr. Joe here. How may I help you?</IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard color={"danger"}>
                <IonCardContent>
                  <IonText>Hi, dr. Joe here. How may I help you?</IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="auto">
              <IonAvatar>
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard color={"danger"}>
                <IonCardContent>
                  <IonText>Hi, dr. Joe here. How may I help you?</IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="auto">
              <IonAvatar>
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonRow>
          <IonCol>
            <IonInput fill="outline" placeholder="Write message"></IonInput>
          </IonCol>
          <IonCol size="auto">
            <IonButton>
              <IonIcon icon={sendOutline}></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonFooter>
    </IonPage>
  );
};
