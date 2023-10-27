import { IonContent, IonPage, IonRow, IonCol, IonButton, IonText, IonIcon, IonSearchbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonGrid } from '@ionic/react';
import Paypal from '../../../../assets/images/paypal.png'

const ApplicationSatges1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid style={{height:"100%",display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        <IonRow style={{width:"100%"}}>
        <IonCard style={{width:"100%",textAlign:"center", padding:"20px"}}>
          <img style={{width:"50px"}} alt="Silhouette of mountains" src={Paypal} />
          <IonCardHeader style={{borderBottom:"1px solid grey", marginBottom:"20px"}}>
            <IonCardSubtitle color={"primary"}>Paypal</IonCardSubtitle>
            <IonCardTitle color="dark"><h2>Software Engineer</h2></IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonText>Canberra, Australia</IonText><br />
            <IonText color="primary">$5.000-$10.000 /month</IonText>
          </IonCardContent>
          <IonRow>
            <IonCol>
             <IonButton fill='outline' size='small' color="medium">Full time</IonButton>
             <IonButton fill='outline' size='small' color="medium">On Site</IonButton>
            </IonCol>
          </IonRow>
        </IonCard>
        <IonCol style={{textAlign:"center"}}>
                <IonText><h4 style={{marginBottom:"30px"}}>Your Application Status</h4></IonText>
                <IonButton fill='outline' expand="block" color={"warning"}>Application Pending</IonButton>
            </IonCol>
        </IonRow>
        <IonRow style={{textAlign:"center"}}>
            <IonCol>
                <IonButton shape='round' expand="block">Waiting...</IonButton>
            </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ApplicationSatges1;
