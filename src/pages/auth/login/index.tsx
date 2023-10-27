import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonText,
  IonInput,
  IonCheckbox,
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
  IonImg,
} from '@ionic/react';
import './index.css';
import logo from '../../../assets/images/logo.jpeg';
import facebookIcon from '../../../assets/images/facebook-icon.jpeg';
import googleIcon from '../../../assets/images/google-icon.png';
import appleIcon from '../../../assets/images/apple-icon.png';
import mainLogo from '../../../assets/images/main-logo.png';

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
        <IonGrid style={{ padding: 10 }}>
          <IonRow>
            <IonCol class='login-container'>
              <IonImg style={{ width: '40%' }} src={mainLogo}></IonImg>

              <IonText>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>
                  Create New Account
                </h1>
              </IonText>

              <IonRow
                style={{
                  width: '100%',
                }}
              >
                <IonCol>
                  <IonInput
                    placeholder='Email'
                    type='email'
                    class='custom'
                  ></IonInput>
                  <IonInput
                    placeholder='Password'
                    type='password'
                    class='custom'
                    style={{ marginTop: 15 }}
                  ></IonInput>
                </IonCol>
              </IonRow>

              <IonCheckbox labelPlacement='end'>Remember me</IonCheckbox>
              <IonButton style={{ width: '100%' }} shape='round' expand='full'>
                Sign up
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid style={{ padding: 10 }}>
          <IonRow>
            <IonCol class='login-container'>
              <IonText>or continue with</IonText>
              <br />
              <IonItem>
                <IonButton color='light' fill='outline' style={{ width: 55 }}>
                  <IonImg
                    style={{ width: 30, height: 30 }}
                    src={facebookIcon}
                  ></IonImg>
                </IonButton>
                <IonButton color='light' fill='outline' style={{ width: 55 }}>
                  <IonImg
                    style={{ width: 30, height: 30 }}
                    src={googleIcon}
                  ></IonImg>
                </IonButton>
                <IonButton color='light' fill='outline' style={{ width: 55 }}>
                  <IonImg
                    style={{ width: 30, height: 30 }}
                    src={appleIcon}
                  ></IonImg>
                </IonButton>
              </IonItem>
              <IonText>
                Already have an account? <a href='/register'>Sign in</a>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
