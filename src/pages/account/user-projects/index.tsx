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
          <IonTitle>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid style={{ padding: 10 }}>
          <IonRow>
            <IonCol class='login-container settings user-settings'>
              <IonLabel>Project Name</IonLabel>
              <IonInput
                placeholder='Project Name'
                type='text'
                class='custom'
              ></IonInput>

              <IonLabel>Role</IonLabel>
              <IonInput
                placeholder='Role'
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
                    placeholder='To'
                    type='date'
                    class='custom'
                  ></IonInput>
                </IonCol>
              </IonCol>

              <IonToggle checked={true}>Current</IonToggle>

              <IonLabel>Associated with (Optional)</IonLabel>
              <IonSelect class='custom' label='Completed Masters Degree'>
                <IonSelectOption value='full_time'>Full Time</IonSelectOption>
                <IonSelectOption value='onsite'>Onsite</IonSelectOption>
              </IonSelect>

              <IonLabel>Description(Optional)</IonLabel>
              <IonTextarea
                class='custom'
                placeholder='Description'
              ></IonTextarea>

              <IonLabel>Project URL (Optional)</IonLabel>
              <IonInput
                placeholder='Project URL'
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
