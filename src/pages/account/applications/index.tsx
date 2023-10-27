import { IonContent, IonPage, IonRow, IonCol, IonButton, IonText, IonIcon, IonSearchbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import Google from '../../../assets/images/google.png'

const Applications: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonRow>
            <IonCol>
                <IonSearchbar></IonSearchbar>
            </IonCol>
        </IonRow>
        <IonRow style={{width:"100%", padding:"0 20px"}}>
            <IonCardHeader style={{borderBottom:"1px solid grey", width:"100%"}}>
                <IonRow class="ion-justify-content-between">
                    <IonCol size='small'>
                        <img style={{width:"50px"}} src={Google} alt="" />
                    </IonCol>
                    <IonCol style={{paddingLeft:"20px"}}>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        <IonButton fill='outline' size='small'>Application Sent</IonButton>
                    </IonCol>
                    <IonCol size='small'>
                        <IonButton  className='seeAllBtn' size='small'>
                            <IonIcon color='medium' icon={chevronForwardOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonCardHeader>
        </IonRow>
        <IonRow style={{width:"100%", padding:"0 20px"}}>
            <IonCardHeader style={{borderBottom:"1px solid grey", width:"100%"}}>
                <IonRow class="ion-justify-content-between">
                    <IonCol size='small'>
                        <img style={{width:"50px"}} src={Google} alt="" />
                    </IonCol>
                    <IonCol style={{paddingLeft:"20px"}}>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        <IonButton fill='outline' size='small'>Application Sent</IonButton>
                    </IonCol>
                    <IonCol size='small'>
                        <IonButton  className='seeAllBtn' size='small'>
                            <IonIcon color='medium' icon={chevronForwardOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonCardHeader>
        </IonRow>
        <IonRow style={{width:"100%", padding:"0 20px"}}>
            <IonCardHeader style={{borderBottom:"1px solid grey", width:"100%"}}>
                <IonRow class="ion-justify-content-between">
                    <IonCol size='small'>
                        <img style={{width:"50px"}} src={Google} alt="" />
                    </IonCol>
                    <IonCol style={{paddingLeft:"20px"}}>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        <IonButton fill='outline' size='small'>Application Sent</IonButton>
                    </IonCol>
                    <IonCol size='small'>
                        <IonButton  className='seeAllBtn' size='small'>
                            <IonIcon color='medium' icon={chevronForwardOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonCardHeader>
        </IonRow>
        <IonRow style={{width:"100%", padding:"0 20px"}}>
            <IonCardHeader style={{borderBottom:"1px solid grey", width:"100%"}}>
                <IonRow class="ion-justify-content-between">
                    <IonCol size='small'>
                        <img style={{width:"50px"}} src={Google} alt="" />
                    </IonCol>
                    <IonCol style={{paddingLeft:"20px"}}>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        <IonButton fill='outline' size='small'>Application Sent</IonButton>
                    </IonCol>
                    <IonCol size='small'>
                        <IonButton  className='seeAllBtn' size='small'>
                            <IonIcon color='medium' icon={chevronForwardOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonCardHeader>
        </IonRow>
        <IonRow style={{width:"100%", padding:"0 20px"}}>
            <IonCardHeader style={{borderBottom:"1px solid grey", width:"100%"}}>
                <IonRow class="ion-justify-content-between">
                    <IonCol size='small'>
                        <img style={{width:"50px"}} src={Google} alt="" />
                    </IonCol>
                    <IonCol style={{paddingLeft:"20px"}}>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        <IonButton fill='outline' size='small'>Application Sent</IonButton>
                    </IonCol>
                    <IonCol size='small'>
                        <IonButton  className='seeAllBtn' size='small'>
                            <IonIcon color='medium' icon={chevronForwardOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonCardHeader>
        </IonRow>
        <IonRow style={{width:"100%", padding:"0 20px"}}>
            <IonCardHeader style={{borderBottom:"1px solid grey", width:"100%"}}>
                <IonRow class="ion-justify-content-between">
                    <IonCol size='small'>
                        <img style={{width:"50px"}} src={Google} alt="" />
                    </IonCol>
                    <IonCol style={{paddingLeft:"20px"}}>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        <IonButton fill='outline' size='small'>Application Sent</IonButton>
                    </IonCol>
                    <IonCol size='small'>
                        <IonButton  className='seeAllBtn' size='small'>
                            <IonIcon color='medium' icon={chevronForwardOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonCardHeader>
        </IonRow>

        
      </IonContent>
    </IonPage>
  );
};

export default Applications;
