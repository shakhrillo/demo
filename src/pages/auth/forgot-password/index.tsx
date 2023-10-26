import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonText, IonButton } from '@ionic/react';
import '../../complete.css'
import Women from '../../../assets/images/empleyeWomen.png'
import Message from '../../../assets/images/message.webp'

export default function(): JSX.Element {
  return (
    <IonPage>
      <IonContent>
          <IonGrid class='forgotPassword-container'>
            <IonRow>
              <IonCol>
                <img src={Women} alt="img women"/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonText>
                  <p>Select which contact details should we use to reset your password</p>
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow style={{width:"100%"}}>
            <IonCol class='select-horizon'>
                <img className='img-forgotPassword'  src={Message} alt="" />
                <IonCol>
                  <IonText color="medium">
                    <p>via sms</p>
                  </IonText>
                  <IonText>
                    <p>+1 111 ******00</p>
                  </IonText>
                </IonCol>
              </IonCol>
            </IonRow>
            <IonRow style={{width:"100%"}}>
            <IonCol class='select-horizon'>
                <img className='img-forgotPassword'  src={Message} alt="" />
                <IonCol>
                  <IonText color="medium">
                    <p>via email</p>
                  </IonText>
                  <IonText>
                    <p>and***loy@gmail.com</p>
                  </IonText>
                </IonCol>
              </IonCol>
            </IonRow>
            <IonRow style={{width:"100%"}}>
              <IonCol>
                <IonButton shape='round' expand='full'>Continue</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
}
