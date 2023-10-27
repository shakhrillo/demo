import { IonContent, IonPage, IonRow, IonCol, IonButton, IonText, IonIcon, IonSearchbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonGrid } from '@ionic/react';
import Twitter from '../../../../assets/images/twitter.webp'

const ApplicationSatges3: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid style={{height:"100%",display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        <IonRow style={{width:"100%"}}>
        <IonCard style={{width:"100%",textAlign:"center", padding:"20px"}}>
          <img style={{width:"50px"}} alt="Silhouette of mountains" src={Twitter} />
          <IonCardHeader style={{borderBottom:"1px solid grey", marginBottom:"20px"}}>
            <IonCardSubtitle color={"primary"}>Twitter Inc</IonCardSubtitle>
            <IonCardTitle color="dark"><h2>Web Designer</h2></IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>New York, United States</IonText><br />
            <IonText color="primary">$10.000-$15.000 /month</IonText>
          </IonCardContent>
          <IonRow>
            <IonCol>
             <IonButton fill='outline' size='small' color={"medium"}>Full time</IonButton>
             <IonButton fill='outline' size='small' color={"medium"}>On Site</IonButton>
            </IonCol>
          </IonRow>
        </IonCard>
        <IonCol style={{textAlign:"center"}}>
                <IonText><h4 style={{marginBottom:"30px"}}>Your Application Status</h4></IonText>
                <IonButton fill='outline' expand="block" color={"success"}>Application Rejected</IonButton>
            </IonCol>
        </IonRow>
        <IonRow style={{textAlign:"center"}}>
            <IonCol>
                <IonButton shape='round' expand="block">Discover Another Job</IonButton>
            </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ApplicationSatges3;
