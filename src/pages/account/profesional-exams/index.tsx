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
          <IonTitle>Professional Exams</IonTitle>
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
              <IonLabel>Score</IonLabel>
              <IonInput
                placeholder='Organization'
                type='text'
                class='custom'
              ></IonInput>

              <IonLabel>Date Taken</IonLabel>
              <IonSelect class='custom' placeholder='Date Taken' value={'feb'}>
                <IonSelectOption value='feb'>October 2023</IonSelectOption>
                <IonSelectOption value='aug'>August 2023</IonSelectOption>
                <IonSelectOption value='dec'>July 2023</IonSelectOption>
              </IonSelect>

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
