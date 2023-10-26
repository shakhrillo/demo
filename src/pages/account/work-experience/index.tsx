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
          <IonTitle>Work Experience</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid style={{ padding: 10 }}>
          <IonRow>
            <IonCol class='login-container settings user-settings'>
              <IonLabel>Job Experience</IonLabel>
              <IonInput
                placeholder='Job Experience'
                type='text'
                class='custom'
              ></IonInput>
              <IonLabel>Company Name</IonLabel>
              <IonInput
                placeholder='Company Name'
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

              <IonToggle checked={true}>Checked Toggle</IonToggle>
              <IonLabel>Description(Optional)</IonLabel>
              <IonTextarea
                class='custom'
                placeholder='Type something here'
              ></IonTextarea>
              <IonLabel>Employment Time</IonLabel>
              <IonSelect class='custom' label='Position'>
                <IonSelectOption value='full_time'>Full Time</IonSelectOption>
                <IonSelectOption value='onsite'>Onsite</IonSelectOption>
              </IonSelect>
              <IonLabel>Location</IonLabel>
              <IonInput
                placeholder='Location'
                type='text'
                class='custom'
              ></IonInput>
              <IonLabel>Job Level</IonLabel>
              <IonSelect class='custom' label='Position'>
                <IonSelectOption value='full_time'>
                  Associate/Supervisor
                </IonSelectOption>
                <IonSelectOption value='onsite'>Junior</IonSelectOption>
              </IonSelect>
              <IonLabel>Salary</IonLabel>
              <IonInput
                placeholder='Salary'
                type='text'
                class='custom'
              ></IonInput>
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
