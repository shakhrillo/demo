import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonRow,
  IonToggle,
} from "@ionic/react";

const data = ["Remember me", "Biometric ID", "Face ID"];

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonList lines="none">
            <IonRow>
              <IonCol size="12">
                {data.map((item, i) => (
                  <IonItem key={i}>
                    <IonToggle>
                      <IonCol>{item}</IonCol>
                    </IonToggle>
                  </IonItem>
                ))}
              </IonCol>
              <IonCol size="12">
                <IonItem button={true} style={{}}>
                  <IonLabel>Google Authenticator</IonLabel>
                  <IonNote slot="end"></IonNote>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonButton shape="round" expand="block">
                  Change PIN
                </IonButton>
              </IonCol>
              <IonCol size="">
                <IonButton shape="round" expand="block">
                  Change PIN
                </IonButton>
              </IonCol>
            </IonRow>
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
