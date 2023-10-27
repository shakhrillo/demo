import {
  IonGrid,
  IonPage,
  IonText,
  IonRow,
  IonContent,
  IonList,
  IonRadioGroup,
  IonItem,
  IonButton,
  IonCheckbox,
  IonCol,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
} from "@ionic/react";
import "./index.css";

const data = [
  "Accounting and Finance",
  "Architecture and Engineering",
  "Managemant and Consultancy",
  "Media, Design and Creatives",
  "Sales and Marketing",
  "Writing and Content",
];
export default function (): JSX.Element {
  return (
    <IonPage>
      <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle>Your Expertise</IonTitle>
        </IonToolbar>
      <IonContent>
        <IonGrid className="expertise-container">
          <IonRow>
            <IonCol style={{textAlign:"center"}}>
              <IonText>
                <h1>What is Your Expertise</h1>
              </IonText>
              <IonText>Please sellect your filed of expertise(up to 5)</IonText>
            </IonCol>
            <IonCol>
              <IonList lines="none" style={{ width: "100%" }}>
                <IonRadioGroup>
                  {data.map((result, i) => (
                    <IonItem className="expertise-box" key={i}>
                      <IonCheckbox justify="start" labelPlacement="end">
                        {result}
                      </IonCheckbox>
                    </IonItem>
                  ))}
                </IonRadioGroup>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow style={{ padding: "10px" }}>
            <IonButton shape="round" style={{ width: "100%" }} expand="block" routerLink="fill-user-profile">
              Continue
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
