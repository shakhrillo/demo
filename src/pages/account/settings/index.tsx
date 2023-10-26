import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonInput,
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import '../../auth/login/index.css';
import userLogo from '../../../assets/images/user-logo.jpeg';
import logo from '../../../assets/images/logo.jpeg';

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid style={{ padding: 10 }}>
          <IonRow style={{ width: 100, margin: 'auto', position: 'relative' }}>
            <IonCol
              style={{
                background: `url(${userLogo})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                height: '120px',
                width: '100px',
                borderRadius: '50%',
              }}
            ></IonCol>
            <div
              style={{
                background: 'blue',
                width: '25px',
                height: '25px',
                position: 'absolute',
                borderRadius: 10,
                bottom: 0,
                right: 0,
              }}
            ></div>
          </IonRow>

          <IonRow>
            <IonCol class='login-container settings'>
              <IonInput
                placeholder='Full Name'
                type='text'
                class='custom'
              ></IonInput>
              <IonInput
                placeholder='Nickname'
                type='password'
                class='custom'
              ></IonInput>
              <IonInput
                placeholder='Date of Birth'
                type='password'
                class='custom'
              ></IonInput>
              <IonInput
                placeholder='Email'
                type='email'
                class='custom'
              ></IonInput>
              <IonInput
                placeholder='+1 234 567 8900'
                type='number'
                class='custom'
              ></IonInput>
              <IonSelect class='custom' label='Gender'>
                <IonSelectOption value='apple'>Male</IonSelectOption>
                <IonSelectOption value='banana'>Female</IonSelectOption>
              </IonSelect>
              <IonButton
                color='tertiary'
                style={{ width: '100%' }}
                shape='round'
                expand='full'
              >
                Continue
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
