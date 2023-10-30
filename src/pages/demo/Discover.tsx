import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonList, IonPage, IonRouterOutlet, IonRow, IonTabBar, IonTabButton, IonTabs, IonText, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";
import { mailOpenOutline, personOutline, chevronForward, chevronForwardOutline, location, locationOutline, star, triangle } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import Home from "../../pages/main/home";

export const Discover: React.FC = () => (
  <IonPage>
    <IonContent class="ion-padding">
        <IonGrid>
            <IonRow class='ion-align-items-center'>
                <IonCol size="8">
                    <IonCardTitle color={"primary"}>Appointment</IonCardTitle>
                </IonCol>
                <IonCol size="4">
                    <IonButton size='small' fill="clear">
                        <IonIcon color='dark' icon={mailOpenOutline}></IonIcon>
                    </IonButton>
                    <IonButton size='small' fill="clear">
                        <IonIcon color='dark' icon={personOutline}></IonIcon>
                    </IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonText>Book your time to have a consultation</IonText>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonCard style={{background:"url(https://img.freepik.com/free-photo/portrait-happy-young-woman-pointing-her-fingers-against-orange-background_23-2148119682.jpg)"}}>
                        <IonCardHeader>
                            <IonText color={"light"}>
                                <h2>Booking appoinment</h2>
                            </IonText>
                            <IonText color={"light"}>
                                Get special 10% discount
                            </IonText>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonButton color={"light"}>
                                <IonText color={"danger"}>Check</IonText>
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
            <IonRow style={{marginBottom:"20px"}}>
                <IonCol>
                    <IonButton color={"light"}><IonIcon size="small" color='dark' icon={personOutline}></IonIcon> &nbsp;Doctors</IonButton>
                    <IonButton><IonIcon size="small" color='dark' icon={personOutline}></IonIcon> &nbsp;Lab Test</IonButton>
                    <IonButton color={"light"}>Doctors</IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonSegment color={"primary"} value="All" scrollable>
                    <IonSegmentButton value="All">
                    <IonLabel>All</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="PCR">
                    <IonLabel>PCR Covid-19</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Blood">
                    <IonLabel>Blood Test</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Allergic">
                    <IonLabel>Allergic Test</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </IonRow>
            <IonRow class='ion-align-items-center'>
                <IonCol>
                    <IonCard>
                        <IonRow>
                        <IonCol size="5" >
                            <img src="https://cloud9australia.com.au/cdn/shop/products/bluewhite.jpg?v=1625712731" alt="" />
                        </IonCol>
                        <IonCol style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
                            <IonRow><IonCardTitle>PCR Test: Covid 19</IonCardTitle></IonRow>
                            <IonRow><IonCardSubtitle>Antiboty Test</IonCardSubtitle></IonRow>
                            <IonRow><IonCardSubtitle>Siloam Hospital Karawaci</IonCardSubtitle></IonRow>
                            <IonRow class='ion-align-items-center'>
                                <IonCol>
                                    <IonText>Starts from</IonText><br />
                                    <IonText color={"danger"}>20$</IonText>
                                </IonCol>
                                <IonCol>
                                    <IonButton>Book</IonButton>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                        </IonRow>
                    </IonCard>
                </IonCol>
            </IonRow>
            <IonRow class='ion-align-items-center'>
                <IonCol>
                    <IonCard>
                        <IonRow>
                        <IonCol size="5" >
                            <img src="https://cloud9australia.com.au/cdn/shop/products/bluewhite.jpg?v=1625712731" alt="" />
                        </IonCol>
                        <IonCol style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
                            <IonRow><IonCardTitle>PCR Test: Covid 19</IonCardTitle></IonRow>
                            <IonRow><IonCardSubtitle>Antiboty Test</IonCardSubtitle></IonRow>
                            <IonRow><IonCardSubtitle>Siloam Hospital Karawaci</IonCardSubtitle></IonRow>
                            <IonRow class='ion-align-items-center'>
                                <IonCol>
                                    <IonText>Starts from</IonText><br />
                                    <IonText color={"danger"}>20$</IonText>
                                </IonCol>
                                <IonCol>
                                    <IonButton>Book</IonButton>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                        </IonRow>
                    </IonCard>
                </IonCol>
            </IonRow>
            <IonRow class='ion-align-items-center'>
                <IonCol>
                    <IonCard>
                        <IonRow>
                        <IonCol size="5" >
                            <img src="https://cloud9australia.com.au/cdn/shop/products/bluewhite.jpg?v=1625712731" alt="" />
                        </IonCol>
                        <IonCol style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
                            <IonRow><IonCardTitle>PCR Test: Covid 19</IonCardTitle></IonRow>
                            <IonRow><IonCardSubtitle>Antiboty Test</IonCardSubtitle></IonRow>
                            <IonRow><IonCardSubtitle>Siloam Hospital Karawaci</IonCardSubtitle></IonRow>
                            <IonRow class='ion-align-items-center'>
                                <IonCol>
                                    <IonText>Starts from</IonText><br />
                                    <IonText color={"danger"}>20$</IonText>
                                </IonCol>
                                <IonCol>
                                    <IonButton>Book</IonButton>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                        </IonRow>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonContent>
  </IonPage>
);