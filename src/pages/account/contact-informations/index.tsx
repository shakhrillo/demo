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
  IonLabel,
  IonText,
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
        <IonGrid style={{ padding: 10, height: '100%' }}>
          <IonRow style={{ height: '100%' }}>
            <IonCol class='login-container settings user-settings contact-informations'>
              <IonCol
                style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                <IonLabel>Address</IonLabel>
                <IonInput
                  placeholder='Address'
                  type='text'
                  class='custom'
                ></IonInput>
                <IonLabel>Phone Number</IonLabel>
                <IonInput
                  placeholder='+1 202-555-0156'
                  type='text'
                  class='custom'
                ></IonInput>
                <IonLabel>Email</IonLabel>
                <IonInput
                  placeholder='Email'
                  type='email'
                  class='custom'
                  value='hi@ionic.io'
                ></IonInput>
              </IonCol>
              <IonCol
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'end',
                }}
              >
                <IonButton
                  style={{ width: '100%' }}
                  shape='round'
                  expand='full'
                >
                  Save
                </IonButton>
              </IonCol>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
