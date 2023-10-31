import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonSearchbar,
  IonText,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import React, { useState } from "react";

export const Search: React.FC = () => {
  const ionRouter = useIonRouter();
  const data = [
    {
      icon: "https://clipart-library.com/img/1923810.png",
      title: "Cardiologists",
      desc: "213 Doctors",
    },
    {
      icon: "https://clipart-library.com/img/1923810.png",
      title: "Pulmonologists",
      desc: "122 Doctors",
    },
    {
      icon: "https://clipart-library.com/img/1923810.png",
      title: "Internists",
      desc: "332 Doctors",
    },
    {
      icon: "https://clipart-library.com/img/1923810.png",
      title: "Neurologists",
      desc: "97 Doctors",
    },
    {
      icon: "https://clipart-library.com/img/1923810.png",
      title: "Dentistry",
      desc: "167 Doctors",
    },
  ];
  let [results, setResults] = useState([...data]);

  const handleInput = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setResults(data.filter((d) => d.title.toLowerCase().indexOf(query) > -1));
  };
  
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonGrid>
          <IonSearchbar
            placeholder="Search doctors"
            debounce={500}
            onIonInput={(ev) => handleInput(ev)}
          ></IonSearchbar>

          <IonList>
            {results.map((result) => (
              <IonCard>
                <IonRow>
                  <IonCol size="2">
                    <img src={result.icon} alt="icon" />
                  </IonCol>
                  <IonCol size="">
                    <IonCardHeader>
                      <IonCardTitle>
                        <h5 style={{ margin: 0 }}>{result.title}</h5>
                      </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonText>{result.desc}</IonText>
                    </IonCardContent>
                  </IonCol>
                  <IonCol size="auto">
                    <IonButton fill="clear">
                      <IonIcon icon={chevronForwardOutline}></IonIcon>
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonCard>
            ))}
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
