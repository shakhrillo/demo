import {
  IonContent,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonList,
  IonItem,
  IonSearchbar,
  IonRadio,
  IonRadioGroup,
} from "@ionic/react";
import "./index.css";
import { useState } from "react";
import countries from "./countries.json";

export default function (): JSX.Element {
  const data = countries.countryList;
  let [results, setResults] = useState([...data]);

  const handleInput = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();
    setResults(data.filter((d) => d.toLowerCase().indexOf(query) > -1));
  };
  return (
    <IonPage>
      <IonContent>
        <IonGrid className="countries-container">
          <IonRow>
            <IonSearchbar
              debounce={1000}
              onIonInput={(ev) => handleInput(ev)}
            ></IonSearchbar>
          </IonRow>
          <IonRow style={{ overflowY: "auto" }}>
            <IonList lines="none" style={{ width: "100%" }}>
              <IonRadioGroup>
                {results.map((result, i) => (
                  <IonItem key={i} style={{ background: "red" }}>
                    <IonRadio
                      value={result}
                      justify="start"
                      labelPlacement="end"
                    >
                      {result}
                    </IonRadio>
                  </IonItem>
                ))}
              </IonRadioGroup>
            </IonList>
          </IonRow>
          <IonRow style={{ padding: "10px" }}>
            <IonButton shape="round" style={{ width: "100%" }} expand="block">
              Continue
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
