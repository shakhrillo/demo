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
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import {
  chevronForward,
  chevronForwardOutline,
  location,
  locationOutline,
  star,
} from 'ionicons/icons';
import React from 'react';
import {
  personOutline,
  mailOpenOutline,
  medkitOutline,
  medalOutline,
  eyedropOutline,
  starOutline,
} from 'ionicons/icons';

export const Appointment: React.FC = () => (
  <IonPage>
    <IonContent class='ion-padding'>
      <IonRow class='ion-align-items-center'>
        <IonCol size='auto'>
          <IonCardTitle>Appointment</IonCardTitle>
        </IonCol>
        <IonCol></IonCol>
        <IonCol size='auto'>
          <IonButton size='small' fill='clear'>
            <IonIcon color='dark' icon={mailOpenOutline}></IonIcon>
          </IonButton>
          <IonButton size='small' fill='clear'>
            <IonIcon color='dark' icon={personOutline}></IonIcon>
          </IonButton>
        </IonCol>
        <IonRow>
          <IonCol>
            <IonText>Book your time to have a consultation</IonText>
          </IonCol>
        </IonRow>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonCard
            style={{
              backgroundSize: '100% 100%',
              background:
                'url(https://img.freepik.com/free-photo/portrait-happy-young-woman-pointing-her-fingers-against-orange-background_23-2148119682.jpg)',
            }}
          >
            <IonCardHeader>
              <IonText color={'light'}>
                <h2>Booking appoinment</h2>
              </IonText>
              <IonText color={'light'}>Get special 10% discount</IonText>
            </IonCardHeader>
            <IonCardContent>
              <IonButton color={'light'}>
                <IonText color={'danger'}>Check</IonText>
              </IonButton>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size='auto'>
          <IonButton color='medium' fill='outline'>
            <IonIcon color='dark' slot='start' icon={medalOutline}></IonIcon>
            <IonText color='dark'>Doctors</IonText>
          </IonButton>
        </IonCol>
        <IonCol size='auto'>
          <IonButton color='medium' fill='outline'>
            <IonIcon color='dark' slot='start' icon={eyedropOutline}></IonIcon>
            <IonText color='dark'>Lab Test</IonText>
          </IonButton>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonSegment scrollable={true} value='Internist'>
            <IonSegmentButton value='All'>
              <IonText>All</IonText>
            </IonSegmentButton>
            <IonSegmentButton value='Internist'>
              <IonText>Internist</IonText>
            </IonSegmentButton>
            <IonSegmentButton value='Cardiologist'>
              <IonText>Cardiologist</IonText>
            </IonSegmentButton>
            <IonSegmentButton value='Pulmonologist'>
              <IonText>Pulmonologist</IonText>
            </IonSegmentButton>
            <IonSegmentButton value='Neurologist'>
              <IonText>Neurologist</IonText>
            </IonSegmentButton>
          </IonSegment>
        </IonCol>
      </IonRow>

      <IonCard className='pu-card'>
        <IonRow>
          <IonCol style={{ paddingTop: 15 }} size='3'>
            <IonImg
              style={{ borderRadius: '100px' }}
              src='https://docs-demo.ionic.io/assets/madison.jpg'
              alt='The Wisconsin State Capitol building in Madison, WI at night'
            ></IonImg>
          </IonCol>

          <IonCol>
            <IonCardHeader>
              <IonCardTitle>dr. Amanda Brown</IonCardTitle>
              <IonCardSubtitle>
                <IonIcon color='warning' icon={star}></IonIcon>
                <IonText> 4.5 · Cardiologist</IonText>
              </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              <IonIcon icon={locationOutline}></IonIcon>
              <IonText> Siloam Hospital Karawaci</IonText>
            </IonCardContent>

            <IonRow>
              <IonCol>
                <IonButton color='danger' fill='clear'>
                  35$
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton>Book</IonButton>
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonCard>

      <IonCard className='pu-card'>
        <IonRow>
          <IonCol style={{ paddingTop: 15 }} size='3'>
            <IonImg
              style={{ borderRadius: '100px' }}
              src='https://docs-demo.ionic.io/assets/madison.jpg'
              alt='The Wisconsin State Capitol building in Madison, WI at night'
            ></IonImg>
          </IonCol>

          <IonCol>
            <IonCardHeader>
              <IonCardTitle>dr. Ariana Bloom</IonCardTitle>
              <IonCardSubtitle>
                <IonIcon color='warning' icon={star}></IonIcon>
                <IonText>4.5 · Internist</IonText>
              </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              <IonIcon icon={locationOutline}></IonIcon>
              <IonText> Bethsaida Hospital</IonText>
            </IonCardContent>

            <IonRow>
              <IonCol>
                <IonButton color='danger' fill='clear'>
                  35$
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton>Book</IonButton>
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonCard>
    </IonContent>
  </IonPage>
);
