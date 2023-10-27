import { IonContent, IonPage, IonImg, IonText, IonButton, IonGrid, IonRow, IonCol, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';
import '../../complete.css'
import Case from '../../../assets/images/case.webp'
import User from '../../../assets/images/user.png'
import { useState } from 'react';
import { Style } from '@capacitor/status-bar';
import LogoJobee from '../../../assets/images/LogoJobee.png'

export default function (): JSX.Element {
  const [firstSelect, setFirstSelect] = useState(false)
  const [secondSelect, setSecondSelect] = useState(false)

  function first_Active(){
    setFirstSelect(true),
    setSecondSelect(false)
  }
  function second_Active(){
    setFirstSelect(false),
    setSecondSelect(true)
  }

  return (
    <IonPage>
      <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref='#'></IonBackButton>
          </IonButtons>
          <IonTitle>Choose your job</IonTitle>
        </IonToolbar>
      <IonContent>
      <IonGrid class='preference-container'>
        <IonRow>
          <IonCol>
            <img
             src={LogoJobee}
             style={{ width: "120px" }}
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
          <IonCol
            onClick={first_Active}
            style={{border:`${firstSelect? '2px solid blue' : '1px solid grey'}`}}
            class='select'>
            <img className='img-case' src={Case} alt="" />
            <IonText style={{height:"30%"}}>
              <h4>Find a Job</h4>
            </IonText>
            <IonText color="medium">
              <p>I want to find a job for me</p>
            </IonText>
          </IonCol>
          <IonCol class='select'
            onClick={second_Active}
            style={{border:`${secondSelect? '2px solid blue' : '1px solid grey'}`}}
          >
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
          <IonButton shape='round' expand="full" routerLink='/expertise'>Continue</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>   
      </IonContent>
    </IonPage>
  );
}
