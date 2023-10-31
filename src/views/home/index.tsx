import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonNavLink,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { mailOutline, personOutline, star } from 'ionicons/icons';
import React from 'react';
import { Signin } from '../sign-in';
// import { Chat } from '../chat';
import { PuCard } from '../../components/card';
import { Chat } from '../chat';
import { Account } from '../acoount';
import { PuImage } from '../../components/image';
import { Search } from '../search';
import { SpecialDetail } from '../specialist-detail';
import { ellipse } from 'ionicons/icons';

export const Home: React.FC = () => {
  const ionRouter = useIonRouter();
  const token = localStorage.getItem('token');

  const handleLink = () => {
    if (token) {
      return <Chat />;
    } else {
      return <Signin />;
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='transparent'>
          <IonTitle color='primary' slot='start'>
            Healthpedia
          </IonTitle>
          <IonButtons slot='end'>
            <IonNavLink
              routerDirection='forward'
              component={() => handleLink()}
            >
              <IonButton>
                <IonIcon icon={mailOutline}></IonIcon>
              </IonButton>
            </IonNavLink>
            <IonNavLink
              routerDirection='forward'
              component={() => {
                return <Account />;
              }}
            >
              <IonButton>
                <IonIcon icon={personOutline}></IonIcon>
              </IonButton>
            </IonNavLink>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <PuCard
          title='Consult with specialists, Prevent you from diseases!'
          content='Get special 10% discount this December'
          style={{
            height: '150px',
            paddingRight: '20%',
            color: 'white',
            backgroundImage:
              'url(https://plus.unsplash.com/premium_photo-1682096894520-d7f7794c3981?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D)',
          }}
        />
        <IonGrid>
          <IonRow className='ion-align-items-center'>
            <IonCol>
              <IonText>Specialists Category</IonText>
            </IonCol>
            <IonCol size='auto'>
              <IonNavLink
                routerDirection='forward'
                component={() => {
                  return <Search />;
                }}
              >
                <IonButton>See all</IonButton>
              </IonNavLink>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4'>
              <IonNavLink
                routerDirection='forward'
                component={() => {
                  return <SpecialDetail title={'Cardiologists'} />;
                }}
              >
                {/* <IonButton>See all</IonButton> */}
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>Cardiologists</IonCardSubtitle>
                  </IonCardHeader>

                  <IonCardContent>213 doctors</IonCardContent>
                </IonCard>
              </IonNavLink>
            </IonCol>
            <IonCol size='4'>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Cardiologists</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>213 doctors</IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Cardiologists</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>213 doctors</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          {/* new */}
          <IonRow>
            <IonCol>
              <IonCard>
                <IonRow>
                  <IonCol size='2'>
                    <IonAvatar>
                      <img
                        alt="Silhouette of a person's head"
                        src='https://ionicframework.com/docs/img/demos/avatar.svg'
                      />
                    </IonAvatar>
                  </IonCol>
                  <IonCol>
                    <IonCardHeader>
                      <IonCardSubtitle>
                        <IonIcon
                          size='default'
                          color='warning'
                          icon={star}
                        ></IonIcon>
                        <IonText> 4.5 Cardiologists</IonText>
                      </IonCardSubtitle>
                      <IonCardTitle>
                        <IonCardTitle>dr. Usman Yusuf</IonCardTitle>
                      </IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                      <IonRow>
                        <IonCol size='8'>
                          <IonText color={'danger'}>$30</IonText>
                        </IonCol>
                        <IonCol size='4'>
                          <IonNavLink
                            routerDirection='forward'
                            component={() => {
                              return <Chat title={'dr. Usman Yusuf'} />;
                            }}
                          >
                            <IonButton slot='end' size='small'>
                              Chat
                            </IonButton>
                          </IonNavLink>
                        </IonCol>
                      </IonRow>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonCard>
            </IonCol>
          </IonRow>
          {/* new */}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
