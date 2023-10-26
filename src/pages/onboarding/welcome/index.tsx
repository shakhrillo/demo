import { IonGrid, IonPage, IonText, IonRow, IonCol } from "@ionic/react";

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonGrid>
        <IonRow>
          <IonCol></IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow>
          <IonCol></IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow>
          <IonCol></IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>
            <IonText>Lorem ipsum dolor sit.</IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonText>Lorem ipsum dolor sit.</IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
}
