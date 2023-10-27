import { IonPage, IonImg, IonSpinner, IonRow, IonCol, IonGrid, IonText, IonButton } from '@ionic/react';
import imgLogo from '../../../assets/images/logo.png';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import './index.css'

export default function(): JSX.Element {

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('welcome')
    }, 5000);
  }, []);

  return (
    <IonPage>
      <IonGrid class='splash-container'>
        <IonRow>
          <IonCol>
            <IonImg
              src={ imgLogo }
              style={{ width: 200 }}
              alt="The Wisconsin State Capitol building in Madison, WI at night">
            </IonImg>
          </IonCol>
          <IonCol class='splash-spinner'>
            <IonSpinner class='spinner' color='primary' name="bubbles"></IonSpinner>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
}
