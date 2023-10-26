import { IonCard, IonContent, IonItem, IonPage, IonText } from "@ionic/react";
import "./index.css";

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonContent class="background-image content">
        <IonCard className="content">
          <IonText className="large-text">Lorem, ipsum dolor.</IonText>
          <br />
          <IonText className="">Lorem, ipsum dolor.</IonText>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
