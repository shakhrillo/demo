import { IonContent, IonPage, IonImg, IonText, IonButton } from '@ionic/react';
import './index.css';

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonContent>
        <div className='container-walk'>
          <IonImg
            class='img-walk'
            src='https://ionicframework.com/docs/demos/api/card/madison.jpg'
          />
          <IonText class='head-text'>
            Lorem ipsum dolor sit amet Lorem, ipsum dolor..
          </IonText>
          <IonText>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </IonText>
          <div className='circles'>
            <div className='circle active'></div>
            <div className='circle'></div>
            <div className='circle'></div>
          </div>
          <IonButton>Click Me</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
}
