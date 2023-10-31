import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonLoading,
  IonNavLink,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { logoApple, logoFacebook, logoGoogle } from "ionicons/icons";
import React, { useEffect, useRef, useState } from "react";
import { Signup } from "../sign-up";
import { Verification } from "../verification";
import counriesCode from "./countries.json";

export const Signin: React.FC = () => {
  const ionRouter = useIonRouter();
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);
  const mobileNumberRef = useRef<any>(null);
  const selectRef = useRef<HTMLIonSelectElement>(null);

  const handleButton = () => {
    const mobileNumber =
      selectRef?.current?.value + mobileNumberRef?.current?.value;
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonText>Welcome Back!</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>Start to consult your symptoms now</IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList>
          <IonItem>
            <IonGrid>
              <IonRow class="ion-align-items-center">
                <IonCol size="auto">
                  <img
                    width={24}
                    src="https://cdn.countryflags.com/thumbs/poland/flag-square-250.png"
                    alt="au"
                  />
                </IonCol>
                <IonCol size="auto">
                  <IonSelect placeholder="+1" ref={selectRef}>
                    {counriesCode.map((item) => (
                      <IonSelectOption key={item.code} value={item.dial_code}>
                        {item.dial_code} {item.code}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonCol>
                <IonCol>
                  <IonInput
                    ref={mobileNumberRef}
                    type="number"
                    placeholder="Mobile number"
                  ></IonInput>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonList>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonNavLink
              // routerDirection="forward"
              // component={() => <Verification />}
              >
                <IonButton
                  id="open-loading"
                  disabled={btnDisabled}
                  onClick={handleButton}
                  expand="block"
                >
                  Continue
                </IonButton>
                <IonLoading
                  trigger="open-loading"
                  message="Loading..."
                  duration={3000}
                  spinner="circles"
                />
              </IonNavLink>
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
          <IonRow class="ion-text-center ion-align-items-center">
            <IonCol size="auto">
              <IonText>Don't have an account?</IonText>
            </IonCol>
            <IonCol>
              <IonNavLink
                routerDirection="forward"
                component={() => <Signup />}
              >
                <IonButton size="small">Sign up</IonButton>
              </IonNavLink>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
