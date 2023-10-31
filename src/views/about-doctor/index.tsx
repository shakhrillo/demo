import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonNavLink,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React from "react";
import { PuIcon } from "../../components/icon";
import { medal, star } from "ionicons/icons";
import { Chat } from "../chat";

export const AboutDoctor: React.FC = () => {
  const ionRouter = useIonRouter();

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent color={"light"} class="ion-padding"></IonContent>
      <IonFooter>
        <IonGrid>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Internist</IonCardSubtitle>
              <IonCardTitle color={"primary"}>dr. Joe Smith</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonRow>
                <IonCol size="auto">
                  <PuIcon color={"warning"} name={medal}></PuIcon>8 years
                </IonCol>
                <IonCol>
                  <PuIcon color={"warning"} name={star}></PuIcon>4.5 reviews
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                <h4>dr. Joe Smith</h4>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonText>
                dr. Joe Smith is an internist with special interest treatment of
                gastric problems. He was awarded with the recent publications
                about GERD problems from CDC
              </IonText>
            </IonCardContent>
          </IonCard>
          <IonNavLink
            component={() => {
              return <Chat />;
            }}
          >
            <IonButton expand="block">Chat</IonButton>
          </IonNavLink>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};
