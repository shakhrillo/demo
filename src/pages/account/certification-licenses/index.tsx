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
  IonToggle,
  IonTextarea,
  IonCheckbox,
} from '@ionic/react';
import '../../auth/login/index.css';
import userLogo from '../../../assets/images/user-logo.jpeg';
import logo from '../../../assets/images/logo.jpeg';

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Certification and License</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid style={{ padding: 10 }}>
          <IonRow>
            <IonCol class='login-container settings user-settings'>
              <IonLabel>Title</IonLabel>
              <IonInput
                placeholder='Title'
                type='text'
                class='custom'
              ></IonInput>

              <IonLabel>Publish Organization</IonLabel>
              <IonInput
                placeholder='Publish Organization'
                type='text'
                class='custom'
              ></IonInput>

              <IonCol
                size='auto'
                style={{
                  display: 'flex',
                }}
              >
                <IonCol>
                  <IonLabel>Date of Issue</IonLabel>
                  <IonInput
                    placeholder='From'
                    type='date'
                    class='custom'
                  ></IonInput>
                </IonCol>

                <IonCol>
                  <IonLabel>Expiration Date</IonLabel>
                  <IonInput
                    disabled
                    placeholder='To'
                    type='date'
                    class='custom'
                  ></IonInput>
                </IonCol>
              </IonCol>

              <IonCheckbox labelPlacement='end'>
                This credential will not expire
              </IonCheckbox>

              <IonLabel>Certificate ID</IonLabel>
              <IonInput
                placeholder='Certificate ID'
                type='text'
                class='custom'
              ></IonInput>

              <IonLabel>Credential URL (Optional)</IonLabel>
              <IonInput
                placeholder='Credential URL'
                type='url'
                class='custom'
              ></IonInput>

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
