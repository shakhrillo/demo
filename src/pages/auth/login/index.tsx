import {
  IonContent,
  IonPage,
  IonItem,
  IonText,
  IonInput,
  IonCheckbox,
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonIcon,
} from '@ionic/react';
import './index.css';
import mainLogo from '../../../assets/images/main-logo.png';
import { mail, logoFacebook, lockClosed, eye, logoGoogle, logoApple } from 'ionicons/icons';

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonImg src={mainLogo}></IonImg>
          <IonCardHeader>
            <IonCardTitle>Create New Account</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form className='loginForm'>
              <IonList>
                <IonItem>
                  <IonIcon icon={mail}></IonIcon>
                  <IonInput color="primary" inputmode="text" placeholder="Email"></IonInput>
                </IonItem>
                <IonItem>
                  <IonIcon icon={lockClosed}></IonIcon>
                  <IonInput color="primary" inputmode="text" placeholder="Password"></IonInput>
                  <IonIcon icon={eye}></IonIcon>
                </IonItem>
              </IonList>
              <IonCheckbox labelPlacement='end'>Remember me</IonCheckbox>
              <IonButton shape='round' expand='full'>
                Sign up
              </IonButton>
            </form>
            <div className="loginFormContinueWith">
              <IonText>or continue with</IonText>
            </div>
            <IonGrid>
              <IonRow className='ion-justify-content-center'>
                <IonCol size='3' className='ion-text-center'>
                  <IonButton fill='outline'>
                    <IonIcon icon={logoFacebook}></IonIcon>
                  </IonButton>
                </IonCol>
                <IonCol size='3' className='ion-text-center'>
                  <IonButton fill='outline'>
                    <IonIcon icon={logoGoogle}></IonIcon>
                  </IonButton>
                </IonCol>
                <IonCol size='3' className='ion-text-center'>
                  <IonButton fill='outline'>
                    <IonIcon icon={logoApple}></IonIcon>
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid>
              <IonRow className='ion-align-items-center'>
                <IonCol size='auto'>
                  <IonText className='align-self-center'>Already have an account? </IonText>
                </IonCol>
                <IonCol size='auto'>
                  <IonButton size='small' fill='clear' color='primary' routerLink='/login'>
                    Sign in
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
