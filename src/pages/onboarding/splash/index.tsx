import { IonContent, IonPage, IonImg, IonSpinner } from '@ionic/react';
import './splash.css'

export default function(): JSX.Element {
  return (
    <IonPage className="page">
      <IonContent>
      <div className='content'>
      <IonImg
      className='img'
        src="https://docs-demo.ionic.io/assets/madison.jpg"
        alt="The Wisconsin State Capitol building in Madison, WI at night">
      </IonImg>
      <IonSpinner></IonSpinner>
      </div>
      </IonContent>
    </IonPage>
  );
}
