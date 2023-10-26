import { IonGrid, IonPage, IonText, IonRow, IonCol } from "@ionic/react";

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonGrid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <IonRow style={{ marginTop: 'auto' }}>
          <IonCol>
            <IonText>
              <h1>Welcome to Jobee!</h1>
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cupiditate non
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
}
