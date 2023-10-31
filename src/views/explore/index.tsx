import { IonAvatar, IonIcon, IonBackButton, IonRow, IonButtons, IonImg, IonSegment, IonSegmentButton, IonLabel, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent, IonHeader, IonPage, IonText, IonToolbar, IonCardHeader, useIonRouter, IonButton, IonCard, IonCol, IonNavLink } from "@ionic/react";
import React from "react";
import { star, location } from 'ionicons/icons';
import { ChildExplore } from "./childexplore";
import { BookAppointment } from "./book";

export const Explore: React.FC = () => {
  const ionRouter = useIonRouter();

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonCard color={"danger"}>
          <IonCardHeader>
            <IonCardTitle>
              Booking appoinment
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <IonCardSubtitle>
              Get Special 10% discount
            </IonCardSubtitle>
            <IonNavLink   routerDirection='forward'
              component={() => {
                return <ChildExplore />;
              }}
            >
              <IonButton size="small" fill="outline" color={"light"}>Check</IonButton>
            </IonNavLink>
          </IonCardContent>
        </IonCard>
        <IonButton>Doctors</IonButton>
        <IonButton>Lab test</IonButton>
        <IonButton>Doctor</IonButton>
        <IonSegment  scrollable={true} value="default">
          <IonSegmentButton value="All">
            <IonLabel>All</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Internist">
            <IonLabel>Internist</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Cardiologist">
            <IonLabel>Cardiologist</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Pulmonologist">
            <IonLabel>Pulmonologist</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="segment">
            <IonLabel>Segment</IonLabel>
          </IonSegmentButton>
      </IonSegment>
      <IonCard>
          <IonRow>
            <IonCol size="2">
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  />
                </IonAvatar>
              </IonCol>
              <IonCol size="10">
                <IonCardHeader>
                  <IonRow>
                    <IonCol size="auto">
                      <IonCardTitle>
                        <h6>dr. Amanda Brown</h6>
                      </IonCardTitle>
                      <IonIcon color={"warning"} icon={star}></IonIcon>
                      <IonText> 4.5 - Cardiologist</IonText><br />
                      <IonIcon icon={location}></IonIcon>
                      <IonText> Siloam Hospital Karawaci</IonText>
                    </IonCol>
                  </IonRow>
                </IonCardHeader>
                <IonCardContent>
                  <IonRow>
                    <IonCol>
                      <IonText color={"danger"}>$30</IonText>
                    </IonCol>
                    <IonCol size="auto">
                      <IonNavLink routerDirection='forward'
                        component={() => {
                          return <BookAppointment />;
                        }}>
                        <IonButton size="small">Book</IonButton>
                      </IonNavLink>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonCard>
      <IonCard>
          <IonRow>
            <IonCol size="2">
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  />
                </IonAvatar>
              </IonCol>
              <IonCol size="10">
                <IonCardHeader>
                  <IonRow>
                    <IonCol size="auto">
                      <IonCardTitle>
                        <h6>dr. Amanda Brown</h6>
                      </IonCardTitle>
                      <IonIcon color={"warning"} icon={star}></IonIcon>
                      <IonText> 4.5 - Cardiologist</IonText><br />
                      <IonIcon icon={location}></IonIcon>
                      <IonText> Siloam Hospital Karawaci</IonText>
                    </IonCol>
                  </IonRow>
                </IonCardHeader>
                <IonCardContent>
                  <IonRow>
                    <IonCol>
                      <IonText color={"danger"}>$30</IonText>
                    </IonCol>
                    <IonCol size="auto">
                    <IonNavLink routerDirection='forward'
                        component={() => {
                          return <BookAppointment />;
                        }}>
                        <IonButton size="small">Book</IonButton>
                      </IonNavLink>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonCard>
      </IonContent>
    </IonPage>
  )
}