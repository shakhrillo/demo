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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
} from '@ionic/react';
import '../../auth/login/index.css';
import userLogo from '../../../assets/images/user-logo.jpeg';
import logo from '../../../assets/images/logo.jpeg';
import { closeCircle, closeOutline } from 'ionicons/icons';

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CV/Resume</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid style={{ padding: 10 }}>
          <IonRow>
            <IonCol class='login-container settings user-settings'>
              <IonLabel>Upload CV/Resume</IonLabel>
              <div className='file-input'>
                <IonText>Browse File</IonText>
                <input
                  className='file-input'
                  style={{ opacity: 0 }}
                  type='file'
                />
              </div>
              <IonCard
                color='danger'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: 7,
                }}
              >
                <IonCardContent>PDF</IonCardContent>

                <IonCardHeader>
                  <IonCardSubtitle>825 Kb</IonCardSubtitle>
                  <IonCardTitle
                    color='tertiary'
                    style={{
                      fontSize: '16px',
                    }}
                  >
                    CV - Andrew Ainsley.pdf
                  </IonCardTitle>
                </IonCardHeader>
                <IonIcon size='large' icon={closeOutline}></IonIcon>
              </IonCard>
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
