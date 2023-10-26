import { IonContent, IonPage, IonImg, IonText, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import './index.css'
import imgLogo from '../../../assets/images/logo.jpeg'
import Case from '../../../assets/images/case.webp'
import User from '../../../assets/images/user.png'

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonContent>
      <IonGrid class='preference-container'>
        <IonRow>
          <IonCol>
            <img
             src={imgLogo}
             style={{ width: 200 }}
             alt="" />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonText>
              <h1 className='title'>Choose Your Job Type</h1>
            </IonText>
            <IonText color="medium">
              <p className='text'>Choose whether you are looking for a job or you are on organization/company that needs employes</p>
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow class='selects'>
          <IonCol class='select'>
            <img className='img-case' src={Case} alt="" />
            <IonText style={{height:"30%"}}>
              <h4>Find a Job</h4>
            </IonText>
            <IonText color="medium">
              <p>I want to find a job for me</p>
            </IonText>
          </IonCol>
          <IonCol class='select'>
            <img className='img-case' src={User} alt="" />
            <IonText style={{height:"30%"}}>
              <h4>Find an Employee</h4>
            </IonText>
            <IonText color="medium">
              <p>I want to find employees</p>
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow style={{width:"100%"}}>
          <IonCol>
          <IonButton shape='round' expand="full">Continue</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>   
      </IonContent>
    </IonPage>
  );
}
