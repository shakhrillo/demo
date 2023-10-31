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
import { logoApple, logoFacebook, logoGoogle, searchCircle } from "ionicons/icons";
import React, { useEffect, useRef, useState } from "react";
import { Signup } from "../sign-up";
import { Verification } from "../verification";
import counriesCode from "./countries.json";
import { PuHeader } from "../../components/header";
import { PuText } from "../../components/text";
import { PuInput } from "../../components/input";
import { PuButton } from "../../components/button";

export const Signin: React.FC = () => {
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);
  const mobileNumberRef = useRef<any>(null);
  const selectRef = useRef<HTMLIonSelectElement>(null);

  const handleButton = () => {
    const mobileNumber =
      selectRef?.current?.value + mobileNumberRef?.current?.value;
  };

  return (
    <IonPage>
      <PuHeader isBackButton={true} />
      <IonContent class="ion-padding">
        <PuText type="h3">Welcome Back!</PuText>
        <PuText type="caption">Start to consult your symptoms now</PuText>
        <PuInput color="primary" type="tel" placeholder="Mobile number" />
        <IonNavLink routerDirection="forward" component={() => <Verification />}>
          <PuButton expand="block">Continue</PuButton>
        </IonNavLink>
        <PuText className="ion-text-center">or</PuText>
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
