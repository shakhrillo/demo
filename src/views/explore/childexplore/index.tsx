import { IonAvatar, IonIcon, IonBackButton, IonRow, IonButtons, IonImg, IonSegment, IonSegmentButton, IonLabel, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent, IonHeader, IonPage, IonText, IonToolbar, IonCardHeader, useIonRouter, IonButton, IonCard, IonCol, IonNavLink } from "@ionic/react";
import React from "react";
import { star, location } from 'ionicons/icons';

export const ChildExplore: React.FC = () => {
  const ionRouter = useIonRouter();

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonRow>
            <IonCardSubtitle>Monday, Dec 18</IonCardSubtitle>
        </IonRow>
        <IonRow>
            <IonCardTitle color={"primary"}>
                <h1>Morning Daniel</h1>
            </IonCardTitle>
        </IonRow>
        <IonRow>
            <IonCardSubtitle>Morning Daniel</IonCardSubtitle>
        </IonRow>
        <IonCard color={"primary"}>
            <IonRow className="ion-align-items-center">
                <IonCol size="3">
                <img
                    alt="Silhouette of a person's head"
                    src="https://media.istockphoto.com/id/1149521603/photo/this-puts-me-in-a-awkward-position.jpg?s=1024x1024&w=is&k=20&c=V-jdsYW4O1Y4vyiWoGtsp5aEiKO0rDo2VTyVSFWe7GA="
                  />
                </IonCol>
                <IonCol size="9">
                    <IonText><h3>dr Joe Smith</h3></IonText>
                    <IonText><h6>Today, 10:00 AM</h6></IonText>
                </IonCol>
            </IonRow>
        </IonCard>
        <IonButton fill={"outline"} color={"danger"} shape={"round"}>Doctors</IonButton>
        <IonButton fill={"outline"} color={"danger"} shape={"round"}>Doctors</IonButton>
        <IonButton fill={"outline"} color={"danger"} shape={"round"}>Doctors</IonButton>
        <IonRow className="ion-align-items-center">
            <IonCol size="9">
                <IonText><h2>Best doctors</h2></IonText>
            </IonCol>
            <IonCol size="3">
                <IonButton color={"danger"} fill="clear" size="small">see All</IonButton>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol size="6">
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>4.5</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>    
                            <IonText><h4>dr. Amanda Brown</h4></IonText>
                            <IonText><h4>Cardiologist</h4></IonText>
                    </IonCardContent>
                </IonCard>
            </IonCol>
            <IonCol size="6">
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>4.5</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>    
                            <IonText><h4>dr. Amanda Brown</h4></IonText>
                            <IonText><h4>Cardiologist</h4></IonText>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  )
}