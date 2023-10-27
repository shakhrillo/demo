import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonText,
  IonInput,
  IonCheckbox,
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/react';
import './../login/index.css';
import logo from '../../../assets/images/logo.jpeg';

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create New Password</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow
            style={{
              margin: 'auto',
              position: 'relative',
            }}
          >
            <IonCol
              style={{
                background: `url(${logo})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                height: '200px',
                width: '100px',
              }}
            ></IonCol>
          </IonRow>

          <IonRow>
            <IonCol class='login-container new-password'>
              {/* <IonImg style={{ width: '80%' }} src={logo}></IonImg> */}
              <IonText style={{ width: '100%' }} class='head-text'>
                <h3 style={{ textAlign: 'left' }}>Create Your New Password</h3>
              </IonText>
              <IonInput
                placeholder='New Password'
                type='password'
                class='custom'
              ></IonInput>
              <IonInput
                placeholder='Confirm New Password'
                type='password'
                class='custom'
              ></IonInput>
              <IonCheckbox labelPlacement='end'>Remember me</IonCheckbox>
              <IonButton style={{ width: '100%' }} shape='round' expand='full' routerLink="/tab1">
                Continue
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
