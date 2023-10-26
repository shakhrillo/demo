import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonThumbnail,
  IonItem,
  IonText,
  IonCard,
  IonInput,
  IonCheckbox,
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
  IonImg,
} from '@ionic/react';
import './index.css';

import imgLogo from '../../../assets/images/logo.jpeg';

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard className='container-login'>
          <IonThumbnail>
            <IonImg
              src={imgLogo}
              style={{ width: 200 }}
              alt='The Wisconsin State Capitol building in Madison, WI at night'
            ></IonImg>
          </IonThumbnail>
          <IonText class='head-text'>Lorem, ipsum dolor.</IonText>
          <IonInput placeholder='Enter username' />
          <IonInput type='password' placeholder='Enter password' />
          <IonCheckbox labelPlacement='end'>
            I agree to the terms and conditions
          </IonCheckbox>
          <IonButton>Login</IonButton>
          <br />
          <IonText>
            Lorem ipsum dolor sit amet consectetur adipisicing Lorem, ipsum
            dolor..
          </IonText>
          <br />
          <IonItem>
            <IonButton>start</IonButton>
            <IonButton>center</IonButton>
            <IonButton>end</IonButton>
          </IonItem>
          <IonText>
            Lorem ipsum dolor sit amet consectetur adipisicing Lorem, ipsum
            dolor..
          </IonText>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
