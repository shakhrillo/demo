import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import IonLogo from '../../components/Logo';

export const Launch: React.FC = () => (
  <IonPage>
    <IonContent>
      <IonGrid class='pu-full-height'>
        <IonRow class='pu-full-height ion-align-items-center ion-text-center'>
          <IonCol>
            <IonLogo
              width={350}
              height={150}
              url='https://cdn.iconscout.com/icon/free/png-256/free-ionic-225990.png'
            >
              Healthpedia
            </IonLogo>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);
