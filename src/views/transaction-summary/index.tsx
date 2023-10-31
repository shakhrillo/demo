import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonText,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonToolbar,
  useIonRouter,
  IonCardSubtitle,
} from "@ionic/react";
import React from "react";

export const TransactionSummary: React.FC = () => {
  const ionRouter = useIonRouter();

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonGrid>
          <IonCard color={"light"}>
            <IonCardHeader>
              <IonRow>
                <IonCol size="auto">
                  <IonAvatar>
                    <img
                      alt="doctor"
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    />
                  </IonAvatar>
                </IonCol>
                <IonCol size="auto">
                  <IonCardTitle>
                    <h5>dr. Joe Smith</h5>
                  </IonCardTitle>
                  <IonCardSubtitle>Internist</IonCardSubtitle>
                </IonCol>
                <IonCol size="auto"></IonCol>
              </IonRow>
            </IonCardHeader>
          </IonCard>
          <IonList lines="none">
            <IonRow>
              <IonItem style={{ width: "100%" }}>
                <IonCol>
                  <IonText>
                    <h5>Total Payment</h5>
                  </IonText>
                  <IonText>Session fee for 45 minutes</IonText>
                </IonCol>
                <IonCol size="auto">
                  <IonText>$60</IonText>
                </IonCol>
              </IonItem>
            </IonRow>
            <IonRow>
              <IonItem style={{ width: "100%" }}>
                <IonCol>
                  <IonText>
                    <h5>Promo Applied</h5>
                  </IonText>
                  <IonText>Coupon discount</IonText>
                </IonCol>
                <IonCol size="auto">
                  <IonText>$6</IonText>
                </IonCol>
              </IonItem>
            </IonRow>
            <IonRow>
              <IonItem style={{ width: "100%" }}>
                <IonCol>
                  <IonText>
                    <h5>To pay</h5>
                  </IonText>
                </IonCol>
                <IonCol size="auto">
                  <IonText>$54</IonText>
                </IonCol>
              </IonItem>
            </IonRow>
          </IonList>
          <IonRow>
            <IonItem lines="none" style={{ width: "100%" }}>
              <IonCol>
                <IonText color={"tertiary"}>
                  <h5>Coupon Applied!</h5>
                </IonText>
                <IonText color={"primary"}>November Promo 10%</IonText>
              </IonCol>
              <IonCol size="auto">
                <IonText color={"primary"}>Change</IonText>
              </IonCol>
            </IonItem>
          </IonRow>
          <IonRow>
            <h5>Payment Method</h5>
            <IonItem lines="none" style={{ width: "100%" }}>
              <IonCol size="auto">
                <img
                  src="https://logowik.com/content/uploads/images/219_visa.jpg"
                  alt=""
                />
              </IonCol>
              <IonCol>
                <IonText>
                  <h5 style={{ margin: 0 }}>Visa ..... 4122</h5>
                </IonText>
                <IonText>Primary</IonText>
              </IonCol>
              <IonCol size="auto">
                <IonText color={"primary"}>Change</IonText>
              </IonCol>
            </IonItem>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter class="ion-padding">
        <IonButton expand="block">Purchase</IonButton>
      </IonFooter>
    </IonPage>
  );
};
