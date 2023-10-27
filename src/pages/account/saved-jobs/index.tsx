import { IonContent, IonPage, IonRow, IonCol, IonButton, IonText, IonIcon, IonSearchbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import { save } from 'ionicons/icons';
import Google from '../../../assets/images/google.png'

const SavedJobs: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonRow>
            <IonCol>
            <IonSearchbar></IonSearchbar>
            </IonCol>
        </IonRow>
        <IonRow style={{width:"100%"}}>
            <IonCard style={{width:"100%", padding:"10px"}}>
                <IonCardHeader class='header'>
                    <IonRow class="ion-justify-content-between">
                        <IonCol size='small'>
                            <img style={{width:"50px"}} src={Google} alt="" />
                        </IonCol>
                        <IonCol style={{paddingLeft:"20px"}}>
                            <IonCardTitle>Card Title</IonCardTitle>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        </IonCol>
                        <IonCol size='small'>
                            <IonButton  className='seeAllBtn' size='small'>
                                <IonIcon icon={save}></IonIcon>
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonCardHeader>
                <IonCardContent style={{width:"100%", textAlign:"start", paddingTop:"20px",paddingLeft:"90px"}}>
                    <IonRow>
                        <IonCol>
                            <IonText color='medium'>California, United States</IonText><br />
                            <IonText color='primary'>$10.000 - 100.000/month</IonText> 
                        </IonCol>                                
                    </IonRow>
                    <IonButton fill='outline' color="medium" size='small'>Full time</IonButton>
                    <IonButton fill='outline' color="medium" size='small'>On site</IonButton>
                </IonCardContent>
            </IonCard>
        </IonRow>
        <IonRow style={{width:"100%"}}>
            <IonCard style={{width:"100%", padding:"10px"}}>
                <IonCardHeader class='header'>
                    <IonRow class="ion-justify-content-between">
                        <IonCol size='small'>
                            <img style={{width:"50px"}} src={Google} alt="" />
                        </IonCol>
                        <IonCol style={{paddingLeft:"20px"}}>
                            <IonCardTitle>Card Title</IonCardTitle>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        </IonCol>
                        <IonCol size='small'>
                            <IonButton  className='seeAllBtn' size='small'>
                                <IonIcon icon={save}></IonIcon>
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonCardHeader>
                <IonCardContent style={{width:"100%", textAlign:"start", paddingTop:"20px",paddingLeft:"90px"}}>
                    <IonRow>
                        <IonCol>
                            <IonText color='medium'>California, United States</IonText><br />
                            <IonText color='primary'>$10.000 - 100.000/month</IonText> 
                        </IonCol>                                
                    </IonRow>
                    <IonButton fill='outline' color="medium" size='small'>Full time</IonButton>
                    <IonButton fill='outline' color="medium" size='small'>On site</IonButton>
                </IonCardContent>
            </IonCard>
        </IonRow>
        <IonRow style={{width:"100%"}}>
            <IonCard style={{width:"100%", padding:"10px"}}>
                <IonCardHeader class='header'>
                    <IonRow class="ion-justify-content-between">
                        <IonCol size='small'>
                            <img style={{width:"50px"}} src={Google} alt="" />
                        </IonCol>
                        <IonCol style={{paddingLeft:"20px"}}>
                            <IonCardTitle>Card Title</IonCardTitle>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        </IonCol>
                        <IonCol size='small'>
                            <IonButton  className='seeAllBtn' size='small'>
                                <IonIcon icon={save}></IonIcon>
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonCardHeader>
                <IonCardContent style={{width:"100%", textAlign:"start", paddingTop:"20px",paddingLeft:"90px"}}>
                    <IonRow>
                        <IonCol>
                            <IonText color='medium'>California, United States</IonText><br />
                            <IonText color='primary'>$10.000 - 100.000/month</IonText> 
                        </IonCol>                                
                    </IonRow>
                    <IonButton fill='outline' color="medium" size='small'>Full time</IonButton>
                    <IonButton fill='outline' color="medium" size='small'>On site</IonButton>
                </IonCardContent>
            </IonCard>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default SavedJobs;
