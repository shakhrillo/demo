import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonList,
  IonPage,
  IonRow,
  IonSearchbar,
  IonText,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { star } from "ionicons/icons";
import React, { useState } from "react";

export const SpecialDetail: React.FC = () => {
  const ionRouter = useIonRouter();
  const data = [
    {
      icon: "https://ionicframework.com/docs/img/demos/avatar.svg",
      name: "Usman Yusuf",
    },
    {
      icon: "https://ionicframework.com/docs/img/demos/avatar.svg",
      name: "Joe Smith",
    },
    {
      icon: "https://ionicframework.com/docs/img/demos/avatar.svg",
      name: "David Johnson",
    },
    {
      icon: "https://ionicframework.com/docs/img/demos/avatar.svg",
      name: "David Johnson",
    },
    {
      icon: "https://ionicframework.com/docs/img/demos/avatar.svg",
      name: "Michael Joe",
    },
  ];
  let [results, setResults] = useState([...data]);

  const handleInput = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();
    setResults(data.filter((d) => d.name.toLowerCase().indexOf(query) > -1));
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
                    <IonAvatar>
                      <img
                        alt="Silhouette of a person's head"
                        src={result.icon}
                      />
                    </IonAvatar>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardHeader>
                      <IonRow>
                        <IonCol size="auto">
                          <IonCardTitle>
                            <h4 style={{ margin: 0 }}>dr. {result.name}</h4>
                          </IonCardTitle>
                          <IonIcon icon={star}></IonIcon>
                          <IonText> 4.5 - Cardiologist</IonText>
                        </IonCol>
                      </IonRow>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonRow>
                        <IonCol>$30</IonCol>
                        <IonCol size="auto">
                          <IonButton size="small">chat</IonButton>
                        </IonCol>
                      </IonRow>
                    </IonCardContent>
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
