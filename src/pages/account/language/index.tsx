import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonList,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonText,
} from "@ionic/react";
import language from "./language.json";

const data = [
  {
    title: "Actively looking for jobs",
    desc: "I a actively looking for job right now,and I would like to acceot job invitation",
  },
  {
    title: "Passively looking for job",
    desc: "I'm not looking for a job right, but I am interested to accept job invications. ",
  },
  {
    title: "Not looking for jobs",
    desc: "I'm not looking for a job right now, please don't send me job invications",
  },
];

export default function (): JSX.Element {
  const elements = [];

  for (const key in language) {
    if (language.hasOwnProperty(key)) {
      const value = language[key];
      elements.push(value.name);
    }
  }
  return (
    <IonPage>
      <IonContent>
        <IonGrid className="language-container">
          <IonList lines="full">
            <IonRadioGroup>
              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h3>Suggested</h3>
                  </IonText>

                  <IonItem>
                    <IonRadio>English(US)</IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonRadio>English(UK)</IonRadio>
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonRadioGroup>
          </IonList>
          <IonList lines="full">
            <IonRadioGroup>
              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h3>Language</h3>
                  </IonText>

                  {elements.map((item, i) => (
                    <IonItem key={i}>
                      <IonRadio>{item}</IonRadio>
                    </IonItem>
                  ))}
                </IonCol>
              </IonRow>
            </IonRadioGroup>
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
