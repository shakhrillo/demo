import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { logoApple, logoFacebook, logoGoogle } from "ionicons/icons";
import React from "react";

export const Signin: React.FC = () => (
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
              Welcome Back!
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonText>
              Start to consult your symptoms now
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonList>
        <IonItem>
          <IonGrid>
            <IonRow class="ion-align-items-center">
              <IonCol size="auto">
                <img width={24} src="https://cdn.countryflags.com/thumbs/poland/flag-square-250.png" alt="au" />
              </IonCol>
              <IonCol size="auto">
                <IonSelect placeholder="+1">
                  <IonSelectOption value="+1">USA</IonSelectOption>
                  <IonSelectOption value="+34">Ukraine</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol>
                <IonInput placeholder="Mobile number"></IonInput>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonList>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonButton expand="block">Continue</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow class="ion-text-center">
          <IonCol>
            <IonText>or</IonText>
          </IonCol>
        </IonRow>
        <IonRow class="ion-padding ion-text-center">
          <IonCol>
            <IonIcon size="2" icon={logoFacebook} />
          </IonCol>
          <IonCol>
            <IonIcon size="2" icon={logoApple} />
          </IonCol>
          <IonCol>
            <IonIcon icon={logoGoogle} />
          </IonCol>
        </IonRow>
        <IonRow class="ion-text-center">
          <IonCol>
            <IonText>
              Don't have an account? <a href="#">Sign up</a>
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);