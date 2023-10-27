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
import { useState } from "react";

const data = [
  { id: 1, text: "Accounting and Finance", active: false },
  { id: 2, text: "Architecture and Engineering", active: false },
  { id: 3, text: "Management and Consultancy", active: false },
  { id: 4, text: "Media, Design and Creatives", active: false },
  { id: 5, text: "Sales and Marketing", active: false },
  { id: 6, text: "Writing and Content", active: false },
];

export default function (): JSX.Element {
  const [list, setList] = useState([...data]);

  const toggleActive = (id) => {
    const updatedData = list.map((item) => {
      if (item.id === id) {
        return { ...item, active: !item.active };
      }
      return item;
    });
    setList(updatedData);
  };
  console.log(list);
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
            <IonCol size={"12"} style={{ textAlign: "center" }}>
              <IonText>
                <h1>What is Your Expertise</h1>
              </IonText>
              <IonText>
                <p>Please sellect your filed of expertise(up to 5)</p>
              </IonText>
            </IonCol>
            <IonCol size={"12"} style={{}}>
              <IonList lines="none">
                <IonRadioGroup className="expertise-cards">
                  {list.map((result) => (
                    <IonCheckbox
                      onClick={() => toggleActive(result.id)}
                      key={result.id}
                      className="expertise-card"
                      style={{
                        border: `1px solid ${
                          result.active ? "#3880ff" : "#dcdbdf"
                        }`,
                      }}
                      justify="start"
                      labelPlacement="end"
                    >
                      <IonText>{result.text}</IonText>
                    </IonCheckbox>
                  ))}
                </IonRadioGroup>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow style={{ padding: "10px" }}>
            <IonButton
              shape="round"
              style={{ width: "100%" }}
              expand="block"
              routerLink="/fill-your-profile"
            >
              <IonText>Continue</IonText>
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
