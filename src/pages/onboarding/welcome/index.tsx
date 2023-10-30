import {
  IonGrid,
  IonPage,
  IonText,
  IonRow,
  IonCol,
  IonContent,
} from "@ionic/react";
import { useHistory } from "react-router";
import "./index.css";

export default function (): JSX.Element {
  const history = useHistory();

  const navigate = () => {
    history.replace("walkthrough");
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid onClick={navigate} className="welcome-cotainer">
          <IonRow style={{ marginTop: "auto" }}>
            <IonCol>
              <IonText>
                <h1>
                  Welcome to Jobee!👋
                </h1>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>
                <p>
                  The best job finder & job portal app where <br /> the best
                  jobs will find you
                </p>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
