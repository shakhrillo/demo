import { IonButton, IonAvatar, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonNavLink, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";
import { mailOutline, personOutline, star } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { Signin } from "../sign-in";
import { PuCard } from "../../components/card";

const data = [
    {
        img:"https://clipart-library.com/img/1923810.png",
        title : "Cardiologists",
        description : "213 doctors",
    },
    {
        img:"https://clipart-library.com/img/1923810.png",
        title : "Internists",
        description : "122 doctors",
    },
    {
        img:"https://clipart-library.com/img/1923810.png",
        title : "Pulmonoligist",
        description : "332 doctors",
    },
  ]


export const Home2: React.FC = () => {
  const ionRouter = useIonRouter();  
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    setCategories([...data])
  },[])

  console.log(categories);
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="transparent">
          <IonTitle color="primary" slot="start">
            Healthpedia
          </IonTitle>
          <IonButtons slot="end">
            <IonNavLink routerDirection="forward" component={() => <Signin />}>
              <IonButton>
                <IonIcon icon={mailOutline}></IonIcon>
              </IonButton>
            </IonNavLink>
            <IonNavLink routerDirection="forward" component={() => <Signin />}>
              <IonButton>
                <IonIcon icon={personOutline}></IonIcon>
              </IonButton>
            </IonNavLink>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <PuCard 
          title="Consult with specialists, Prevent you from diseases!" 
          content="Get special 10% discount this December"
          style={{ 
            height: '150px',
            paddingRight: '20%',
            color: 'white',
            backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1682096894520-d7f7794c3981?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D)',
          }}
        />
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol>
              <IonText>
                Specialists Category
              </IonText>
            </IonCol>
            <IonCol size="auto">
              <IonNavLink component={() => <Signin />}>
                <IonButton>
                    See all
                </IonButton>
              </IonNavLink>
            </IonCol>
          </IonRow>
          <IonRow>
            {categories.map(item =>
                <IonCol size="4">
                <IonCard>
                <IonCardHeader>
                    <IonImg
                        src={item.img}
                        alt="The Wisconsin State Capitol building in Madison, WI at night"
                    ></IonImg>
                </IonCardHeader>
                <IonCardContent>
                    <IonCardSubtitle>{item.title}</IonCardSubtitle>
                    {item.description}
                </IonCardContent>
                </IonCard>
            </IonCol>
            )}
            <IonRow class="ion-align-items-center">
                <IonCol size="2">
                    <IonImg
                        src="https://clipart-library.com/img/1923810.png"
                        alt="The Wisconsin State Capitol building in Madison, WI at night"
                    ></IonImg>
                </IonCol>
                <IonCol>
                    <IonCardTitle>
                        Available Doctors
                    </IonCardTitle>
                    <IonCardSubtitle>Chat with our available doctors</IonCardSubtitle>
                </IonCol>
            </IonRow>
          </IonRow>
          <IonCard>
                <IonRow>
                  <IonCol size="2">
                    <IonAvatar>
                      <img
                        alt="Silhouette of a person's head"
                        src="https://clipart-library.com/img/1923810.png"
                      />
                    </IonAvatar>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardHeader>
                      <IonRow>
                        <IonCol size="auto">
                          <IonCardTitle>
                            <h4 style={{ margin: 0 }}>dr. Lorem, ipsum.</h4>
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
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}