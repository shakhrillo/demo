import { IonPage, IonImg, IonSpinner, IonRow, IonCol, IonGrid } from '@ionic/react';
import imgLogo from '../../../assets/images/logo.jpeg';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

export default function(): JSX.Element {

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('welcome')
    }, 2000);
  }, []);

  return (
    <IonPage>
      <IonGrid class='container'>
        <IonRow>
          <IonCol>
            <IonImg
              src={ imgLogo }
              style={{ width: 200 }}
              alt="The Wisconsin State Capitol building in Madison, WI at night">
            </IonImg>
          </IonCol>
        </IonRow>
        <IonRow style={{height: 40, marginTop: 'auto', marginBottom: 60}}>
          <IonCol>
            <IonSpinner></IonSpinner>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
}
