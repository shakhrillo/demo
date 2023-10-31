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

const list = [
  { title: "Total Payment", desc: "Session fee for 45 minutes", price: "60" },
  { title: "Promo Applied", desc: "Coupon discount", price: "6" },
  { title: "To pay", price: "54" },
];

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
            {list.map((item) => (
              <IonRow>
                <IonItem style={{ width: "100%" }}>
                  <IonCol>
                    <IonText>
                      <h5>{item?.title}</h5>
                    </IonText>
                    <IonText>{item.desc}</IonText>
                  </IonCol>
                  <IonCol size="auto">
                    <IonText>${item?.price}</IonText>
                  </IonCol>
                </IonItem>
              </IonRow>
            ))}
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
              <IonCol size="2">
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
