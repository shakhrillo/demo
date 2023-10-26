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
          <IonTitle>Education</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid style={{ padding: 10 }}>
          <IonRow>
            <IonCol class='login-container settings user-settings'>
              <IonLabel>Educational Attainment</IonLabel>
              <IonSelect class='custom' label='Completed Masters Degree'>
                <IonSelectOption value='full_time'>Full Time</IonSelectOption>
                <IonSelectOption value='onsite'>Onsite</IonSelectOption>
              </IonSelect>
              <IonLabel>Course</IonLabel>
              <IonInput
                placeholder='Computer Science'
                type='text'
                class='custom'
              ></IonInput>
              <IonLabel>School</IonLabel>
              <IonInput
                placeholder='Harvard University'
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

              <IonCol
                style={{
                  display: 'flex',
                  gap: '55px',
                  width: '100%',
                }}
                size='auto'
              >
                <IonCol>
                  <IonLabel>Currency</IonLabel>
                  <IonSelect class='custom' label='USD'>
                    <IonSelectOption value='usd'>USD</IonSelectOption>
                    <IonSelectOption value='uzs'>UZS</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol>
                  <IonLabel>Per Month</IonLabel>
                  <IonSelect class='custom' label='per_month'>
                    <IonSelectOption value='usd'>per month</IonSelectOption>
                    <IonSelectOption value='uzs'>hourly</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonCol>
              <IonLabel>Add Media (Optional)</IonLabel>
              <div className='file-input'>
                <IonText>Browse File</IonText>
                <input
                  className='file-input'
                  style={{ opacity: 0 }}
                  type='file'
                />
              </div>
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
