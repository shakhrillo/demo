import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonList, IonPage, IonRouterOutlet, IonRow, IonTabBar, IonTabButton, IonTabs, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { chevronForward, chevronForwardOutline, location, locationOutline, star, triangle } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import Home from "../../pages/main/home";

export const Forms: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Header</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h1>Ion Form</h1>
      <IonInput className="pu-input" placeholder="First name"></IonInput>
      <IonInput className="pu-input" placeholder="Last name"></IonInput>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonInput className="pu-input ion-text-center" placeholder="0" type="number"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput className="pu-input ion-text-center" placeholder="0" type="number"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput className="pu-input ion-text-center" placeholder="0" type="number"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput className="pu-input ion-text-center" placeholder="0" type="number"></IonInput>
          </IonCol>
        </IonRow>
      </IonGrid>
      
      <IonCard className="pu-card">
        <IonCardHeader>
          <IonGrid style={{
            width: '100%'
          }}>
            <IonRow>
              <IonCol size="auto">
                <img 
                  style={{
                    borderRadius: '50%'
                  }}
                  src="https://randomuser.me/api/portraits/women/47.jpg" 
                  alt="User" 
                  width={48}
                />
              </IonCol>
              <IonCol>
                <IonCardTitle>Dr. Jane Doe</IonCardTitle>
                <IonRow>
                  <IonCol size="auto">
                    <IonIcon color="warning" icon={star}></IonIcon>
                  </IonCol>
                  <IonCol size="auto">
                    <IonText>4.5</IonText>
                  </IonCol>
                  <IonCol size="auto">
                    <IonText>Specialist</IonText>
                  </IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center ion-justify-content-between">
                  <IonCol size="auto">
                    <IonText color='danger'>$0</IonText>
                  </IonCol>
                  <IonCol size="auto">
                    <IonButton>Chat</IonButton>
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardHeader>
      </IonCard>

      <IonCard className="pu-card">
        <IonCardHeader>
          <IonGrid style={{
            width: '100%'
          }}>
            <IonRow>
              <IonCol size="auto">
                <img 
                  src="https://static.vecteezy.com/system/resources/previews/016/223/362/original/human-heart-logo-medical-cardiology-icon-illustration-vector.jpg" 
                  alt="Heart" 
                  width={48}
                />
              </IonCol>
              <IonCol>
                <IonCardTitle>Cardioligist</IonCardTitle>
                <IonRow>
                  <IonCol size="auto">
                    <IonText>213 Doctors</IonText>
                  </IonCol>
                </IonRow>
              </IonCol>
              <IonCol size="auto">
                <IonButton>
                  <IonIcon icon={chevronForwardOutline}></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardHeader>
      </IonCard>

      <IonCard className="pu-card">
        <IonCardHeader>
          <IonGrid style={{
            width: '100%'
          }}>
            <IonRow>
              <IonCol size="auto">
                <img 
                  src="https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg" 
                  alt="Visa" 
                  width={48}
                />
              </IonCol>
              <IonCol>
                <IonCardTitle>Visa ****** 4122</IonCardTitle>
                <IonRow>
                  <IonCol size="auto">
                    <IonText>Primary</IonText>
                  </IonCol>
                </IonRow>
              </IonCol>
              <IonCol size="auto">
                <IonButton>
                  Change
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardHeader>
      </IonCard>

      <IonCard className="pu-card">
        <IonCardHeader>
          <IonGrid style={{
            width: '100%'
          }}>
            <IonRow>
              <IonCol>
                <IonCardTitle>Total Payment</IonCardTitle>
                <IonRow>
                  <IonCol size="auto">
                    <IonText>Sesion fee for 45 minutes</IonText>
                  </IonCol>
                </IonRow>
              </IonCol>
              <IonCol size="auto">
                <IonText color="primary" style={{
                  fontSize: '1.2rem'
                }}>$60</IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardHeader>
      </IonCard>

      <IonCard className="pu-card">
        <IonCardHeader>
          <IonGrid style={{
            width: '100%'
          }}>
            <IonRow>
              <IonCol size="auto">
                <IonIcon icon={location}></IonIcon>
              </IonCol>
              <IonCol>
                <IonCardTitle>Siloam Hospital</IonCardTitle>
                <IonRow>
                  <IonCol size="auto">
                    <IonText>Jl. Raya Ciputat Parung No.1, Ciputat, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15419</IonText>
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardHeader>
      </IonCard>

      <IonCard className="pu-card">
        <IonCardHeader>
          <IonGrid style={{
            width: '100%'
          }}>
            <IonRow>
              <IonCol size="auto">
                <img 
                  src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbGluZ3xlbnwwfHwwfHx8MA%3D%3D" 
                  alt="User" 
                  height={150}
                />
              </IonCol>
              <IonCol>
                <IonCardTitle>PCR Swab Test: COVID-19</IonCardTitle>
                <IonRow>
                  <IonCol size="auto">
                    <IonIcon color="warning" icon={star}></IonIcon>
                    <IonText> Antibody Test</IonText>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="auto">
                    <IonIcon color="warning" icon={locationOutline}></IonIcon>
                    <IonText> Siloam Hospital Karawaci</IonText>
                  </IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center ion-justify-content-between">
                  <IonCol>
                    <IonRow>
                      <IonCol>
                        <IonText>Starts from</IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <IonText>$20</IonText>
                      </IonCol>
                    </IonRow>
                  </IonCol>
                  <IonCol size="auto">
                    <IonButton>Book</IonButton>
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardHeader>
      </IonCard>
    </IonContent>
  </IonPage>
);