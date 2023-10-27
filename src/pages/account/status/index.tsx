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
import "./index.css";
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
  return (
    <IonPage>
      <IonContent>
        <IonGrid className="status-container">
          <IonList lines="full">
            <IonRadioGroup>
              <IonRow>
                {data.map((item, i) => (
                  <IonItem>
                    <IonCol>
                      <IonRadio value={i} labelPlacement="end">
                        <IonCard className="status-card">
                          <IonCardHeader>
                            <IonCardSubtitle>{item.title}</IonCardSubtitle>
                          </IonCardHeader>
                          <IonCardContent style={{ textWrap: "wrap" }}>
                            <IonText>{item.desc}</IonText>
                          </IonCardContent>
                        </IonCard>
                      </IonRadio>
                    </IonCol>
                  </IonItem>
                ))}
              </IonRow>
            </IonRadioGroup>
          </IonList>
          <IonRow>
            <IonCol>
              <IonButton shape="round" expand="block">
                Save
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
