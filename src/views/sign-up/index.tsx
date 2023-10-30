import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";
import { logoApple, logoFacebook, logoGoogle } from "ionicons/icons";
import React from "react";

export const Signup: React.FC = () => {
  const ionRouter = useIonRouter();

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color="transparent">
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonText>
                Welcome to Healthpedia
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>
                Let us get to know you better!
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList>
          <IonItem>
            <IonInput placeholder="First Name"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput placeholder="First Name"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput placeholder="Email"></IonInput>
          </IonItem>
          <IonItem>
            <IonGrid>
              <IonRow class="ion-align-items-center">
                <IonCol size="auto">
                  <img width={24} src="https://cdn.countryflags.com/thumbs/india/flag-square-250.png" alt="au" />
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
          <IonItem>
            <IonInput placeholder="Password" type="password" helperText="*Minimum 6 characters"></IonInput>
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
                Already have an account? 
                <IonButton size="small" onClick={() => ionRouter.push('sign-in', 'back')}>Sign in</IonButton>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>
                By signing up, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
};