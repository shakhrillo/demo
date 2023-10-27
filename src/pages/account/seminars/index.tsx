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
} from '@ionic/react';
import '../../auth/login/index.css';
import userLogo from '../../../assets/images/user-logo.jpeg';
import logo from '../../../assets/images/logo.jpeg';

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Seminars & Trainings</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid style={{ padding: 10, height: '100%' }}>
          <IonRow style={{ height: '100%' }}>
            <IonCol class='login-container settings user-settings contact-informations tesst'>
              <IonLabel>Title</IonLabel>
              <IonInput
                placeholder='Title'
                type='text'
                class='custom'
              ></IonInput>
              <IonLabel>Organizer</IonLabel>
              <IonInput
                placeholder='Organizer'
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
                  <IonLabel>From</IonLabel>
                  <IonInput
                    placeholder='From'
                    type='date'
                    class='custom'
                  ></IonInput>
                </IonCol>

                <IonCol>
                  <IonLabel>To</IonLabel>
                  <IonInput
                    disabled
                    placeholder='To'
                    type='date'
                    class='custom'
                  ></IonInput>
                </IonCol>
              </IonCol>

              <IonToggle checked={true}>Current</IonToggle>

              <IonLabel>Description(Optional)</IonLabel>
              <IonTextarea
                class='custom'
                placeholder='Description'
              ></IonTextarea>

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
