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
  IonButtons,
} from '@ionic/react';
import './login.css';

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
            <img src='https://ionicframework.com/docs/demos/api/card/madison.jpg' />
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
