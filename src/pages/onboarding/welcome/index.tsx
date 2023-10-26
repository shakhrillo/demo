import { IonGrid, IonPage, IonText, IonRow, IonCol } from "@ionic/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "./index.css";

export default function (): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    // setTimeout(() => {
    //   history.push('walkthrough')
    // }, 2000);
  }, []);

  return (
    <IonPage>
      <IonGrid className="welcome-cotainer">
        <IonRow style={{ marginTop: "auto" }}>
          <IonCol>
            <IonText>
              <h1>
                Welcome to <br />
                Jobee!👋
              </h1>
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonText>
              <p>
                The best job finder & job portal app where <br /> the best jobs
                will find you
              </p>
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
}
