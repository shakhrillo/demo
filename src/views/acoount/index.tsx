import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonList,
  IonNavLink,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { logoApple, logoFacebook, logoGoogle } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';

export const Account: React.FC = () => {
  const ionRouter = useIonRouter();
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    id: 0,
  });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    const token = localStorage.getItem('token');
    fetch('http://prounity.uz:5000/api/authen/user_profiles_views/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/'></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent class='ion-padding'>
        <IonGrid class='ion-text-center'>
          <IonRow>
            <IonCol>
              <IonCardTitle>Account</IonCardTitle>
            </IonCol>
          </IonRow>
          <IonRow class='ion-justify-content-center'>
            <IonCol size='auto'>
              <IonAvatar>
                <img
                  alt="Silhouette of a person's head"
                  src='https://ionicframework.com/docs/img/demos/avatar.svg'
                />
              </IonAvatar>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCardTitle>{user?.first_name}</IonCardTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>Phone: {user?.username}</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>Email: {user?.email}</IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
