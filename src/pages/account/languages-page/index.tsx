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
  IonAccordion,
  IonAccordionGroup,
} from '@ionic/react';
import '../../auth/login/index.css';
import userLogo from '../../../assets/images/user-logo.jpeg';
import logo from '../../../assets/images/logo.jpeg';

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Languages</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid style={{ padding: 10, height: '100%' }}>
          <IonRow style={{ height: '100%' }}>
            <IonCol class='login-container settings user-settings contact-informations'>
              <IonRow
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '40%',
                  width: '100%',
                }}
              >
                <IonCol>
                  <IonLabel>Language</IonLabel>
                  <IonSelect
                    style={{ paddingTop: 10 }}
                    class='custom'
                    label='Languages'
                    placeholder='Select Language'
                  >
                    <IonSelectOption value='ENG'>English</IonSelectOption>
                    <IonSelectOption value='RUS'>Rusian</IonSelectOption>
                    <IonSelectOption value='UZB'>Orange</IonSelectOption>
                  </IonSelect>
                </IonCol>

                <IonCol>
                  <IonLabel>Proficiency</IonLabel>
                  <IonAccordionGroup
                    expand='inset'
                    style={{ width: '100%', paddingRight: 20 }}
                  >
                    <IonAccordion value='first'>
                      <IonItem slot='header' color='light'>
                        <IonLabel>First Accordion</IonLabel>
                      </IonItem>
                      <div className='ion-padding' slot='content'>
                        Elementary Proficiency
                      </div>
                      <div className='ion-padding' slot='content'>
                        Limited Working Proficiency
                      </div>
                      <div className='ion-padding' slot='content'>
                        Professional Working Proficiency
                      </div>
                      <div className='ion-padding' slot='content'>
                        Full Professional Proficiency
                      </div>
                      <div className='ion-padding' slot='content'>
                        Native or Bilingual Proficiency
                      </div>
                    </IonAccordion>
                  </IonAccordionGroup>
                </IonCol>
              </IonRow>

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
