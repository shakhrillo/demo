import { IonContent, IonPage, IonRow, IonCol, IonButton, IonText, IonIcon, IonSearchbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonGrid } from '@ionic/react';
import Figma from '../../../../assets/images/figma.png'

const ApplicationSatges2: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid style={{height:"100%",display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        <IonRow style={{width:"100%"}}>
        <IonCard style={{width:"100%",textAlign:"center", padding:"20px"}}>
          <img style={{width:"50px"}} alt="Silhouette of mountains" src={Figma} />
          <IonCardHeader style={{borderBottom:"1px solid grey", marginBottom:"20px"}}>
            <IonCardSubtitle color={"primary"}>Figma</IonCardSubtitle>
            <IonCardTitle color="dark"><h2>Application Developer</h2></IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonText>New York, United States</IonText><br />
            <IonText color="primary">$4.000-$8.000 /month</IonText>
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
                <IonButton fill='outline' expand="block" color={"danger"}>Application Rejected</IonButton>
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

export default ApplicationSatges2;
