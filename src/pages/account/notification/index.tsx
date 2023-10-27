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

const data = [
  "General Notification",
  "Sound",
  "Vibrate",
  "Notify me when there is as job recommendation",
  "Notify me when there is as job invitation",
  "Notify me when a recruiter views my profile",
  "App Updates",
  "News Services Available",
  "New Tips Available",
];

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonList lines="none">
            <IonRow>
              <IonCol>
                {data.map((item, i) => (
                  <IonItem key={i}>
                    <IonToggle>
                      <IonCol>{item}</IonCol>
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
