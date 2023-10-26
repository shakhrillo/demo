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
                  Select which contact details should we use to reset your password
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow style={{width:"100%"}}>
            <IonCol class='select-horizon'>
                <img style={{width:"100px"}} src={Message} alt="" />
                <IonCol class='texts'>
                  <IonText color="medium">
                    via sms
                  </IonText>
                  <IonText>
                    +1 111 ******00
                  </IonText>
                </IonCol>
              </IonCol>
            </IonRow>
            <IonRow style={{width:"100%"}}>
            <IonCol class='select-horizon'>
                <img style={{width:"100px"}} src={Message} alt="" />
                <IonCol class='texts'>
                  <IonText color="medium">
                    via email
                  </IonText>
                  <IonText>
                    and***loy@gmail.com
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
