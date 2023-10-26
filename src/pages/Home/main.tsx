import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonText, IonIcon, IonButton,IonList, IonItem, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import './index.css'
import Google from '../../assets/images/google.png'
import { save } from 'ionicons/icons';

export default function(): JSX.Element {
    return (
      <IonPage>
        <IonContent>
            <IonGrid class='main-container'>
               <IonRow class='head'>
                <IonCol>
                    <IonText color="light">
                        <h1>See how you can <br /> find a job quickly</h1>
                    </IonText>
                    <IonButton color="light">Read more</IonButton>
                </IonCol>
               </IonRow>
               <IonRow style={{width:"100%"}}>
                <IonCol>
                    <h3>Recommendation</h3>
                </IonCol>
                <IonCol class='card-btn'>
                    <IonButton className='seeAllBtn'>See All</IonButton>
                </IonCol>
               </IonRow>

                <IonList>
                    <IonCard>
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
                    <IonRow style={{width:"100%"}}>
                        <IonCol>
                            <h3>Recent Jobs</h3>
                        </IonCol>
                        <IonCol class='card-btn'>
                            <IonButton className='seeAllBtn'>See All</IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonButton shape='round' size='small' fill='outline' color="primary">All</IonButton>
                        <IonButton shape='round' size='small' fill='outline' color="primary">Design</IonButton>
                        <IonButton shape='round' size='small' fill='outline' color="primary">Technology</IonButton>
                        <IonButton shape='round' size='small' fill='outline' color="primary">Finance</IonButton>
                    </IonRow>
                    <IonCard>
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
                    <IonCard>
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
                    <IonCard>
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
                    <IonCard>
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
                </IonList>
            </IonGrid>
        </IonContent>
      </IonPage>
    );
  }