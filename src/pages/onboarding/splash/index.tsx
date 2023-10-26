import { IonContent, IonPage, IonImg, IonSpinner, IonRow, IonCol, IonGrid } from '@ionic/react';


export default function(): JSX.Element {
  return (
    <IonPage className="page">
      <IonGrid class='grid' style={{padding:50}}>
        <IonRow>
          <IonCol>
            <IonImg
              src="https://docs-demo.ionic.io/assets/madison.jpg"
              alt="The Wisconsin State Capitol building in Madison, WI at night">
            </IonImg>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
      </IonGrid>
      <IonGrid>
      </IonGrid>
      <IonGrid>
      <IonRow>
          <IonCol>
            <IonSpinner></IonSpinner>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
}
