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
} from '@ionic/react';
import './index.css';

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid style={{ padding: 0 }}>
          <IonRow>
            <IonCol class='login-container'>
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
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
        <br />
        <IonGrid>
          <IonRow>
            <IonCol class='login-container'>
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
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
