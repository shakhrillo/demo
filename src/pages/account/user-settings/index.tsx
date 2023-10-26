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
            <IonCol class='login-container settings user-settings'>
              <IonLabel>First Name</IonLabel>
              <IonInput
                placeholder='First Name'
                type='text'
                class='custom'
              ></IonInput>
              <IonLabel>Middle Name</IonLabel>
              <IonInput
                placeholder='Middle Name'
                type='text'
                class='custom'
              ></IonInput>
              <IonLabel>Last Name</IonLabel>
              <IonInput
                placeholder='Last Name'
                type='text'
                class='custom'
              ></IonInput>
              <IonLabel>Current Position</IonLabel>
              <IonSelect class='custom' label='Position'>
                <IonSelectOption value='apple'>
                  UI|UX Designer at Paypal Inc
                </IonSelectOption>
                <IonSelectOption value='banana'>
                  Frontend Developer
                </IonSelectOption>
                <IonSelectOption value='banana'>
                  Backend Developer
                </IonSelectOption>
              </IonSelect>
              <IonButton style={{ width: '100%' }} shape='round' expand='full'>
                Save
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
