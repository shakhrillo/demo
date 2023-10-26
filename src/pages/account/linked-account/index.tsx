import {
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonToggle,
} from "@ionic/react";
import profile from "../../../assets/images/user-logo.jpeg";

const data = ["Google", "Apple", "Facebook", "Twitter", "Linkedin"];

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonList lines="none">
            <IonRow>
              <IonCol>
                {data.map((item) => (
                  <IonItem>
                    <IonToggle>
                      <IonRow style={{ display: "flex", alignItems: "center" }}>
                        <IonCol>
                          <img src={profile} width={50} alt="" />
                        </IonCol>
                        <IonCol>{item}</IonCol>
                      </IonRow>
                    </IonToggle>
                  </IonItem>
                ))}
              </IonCol>
            </IonRow>
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
