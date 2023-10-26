import { IonGrid, IonPage, IonText, IonRow, IonCol } from "@ionic/react";
import { useEffect } from "react";
import { useHistory } from "react-router";

export default function (): JSX.Element {

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('walkthrough')
    }, 2000);
  }, []);

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
