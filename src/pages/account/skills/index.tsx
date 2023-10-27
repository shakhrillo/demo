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
  IonButtons,
  IonIcon,
} from '@ionic/react';
import '../../auth/login/index.css';
import userLogo from '../../../assets/images/user-logo.jpeg';
import logo from '../../../assets/images/logo.jpeg';
import { closeOutline } from 'ionicons/icons';

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Skills</IonTitle>
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
                  <IonLabel>Skills</IonLabel>
                  <IonInput
                    style={{ marginTop: 5 }}
                    placeholder='Skills'
                    type='text'
                    class='custom'
                  ></IonInput>
                </IonCol>

                <IonButtons>
                  <IonGrid>
                    <IonRow
                      style={{
                        width: '100%',
                      }}
                    >
                      <IonCol
                        style={{
                          display: 'flex',
                        }}
                      >
                        <IonButton fill='outline' shape='round'>
                          Design Thinking
                          <IonIcon icon={closeOutline}></IonIcon>
                        </IonButton>
                        <IonButton fill='outline' shape='round'>
                          UI & UX Design
                          <IonIcon icon={closeOutline}></IonIcon>
                        </IonButton>
                      </IonCol>
                      <IonCol
                        style={{
                          display: 'flex',
                        }}
                      >
                        <IonButton fill='outline' shape='round'>
                          Graphic Design
                          <IonIcon icon={closeOutline}></IonIcon>
                        </IonButton>
                        <IonButton fill='outline' shape='round'>
                          Web Design
                          <IonIcon icon={closeOutline}></IonIcon>
                        </IonButton>
                      </IonCol>
                      <IonCol>
                        <IonButton fill='outline' shape='round'>
                          Figma
                          <IonIcon icon={closeOutline}></IonIcon>
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonButtons>
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
