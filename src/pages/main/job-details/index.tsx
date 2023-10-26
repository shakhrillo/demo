// check
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonText, IonIcon,  IonButton,IonList, IonItem, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonNavLink } from '@ionic/react';
import './index.css'
import Google from '../../../assets/images/google.png'
import { save } from 'ionicons/icons';

export default function(): JSX.Element {
    return (
        <IonPage>
            <IonContent>
                <IonGrid class='job-details-container'>
                    <IonRow style={{width:"100%"}}>
                    <IonCard style={{width:"100%", textAlign:"center", padding:"20px", margin:"0 0 20px"}}>
                        <img style={{width:"50px"}} alt="Silhouette of mountains" src={Google} />
                        <IonCardHeader style={{borderBottom:"1px solid rgb(235, 232, 232)", marginBottom:"20px"}}>
                            <IonCardSubtitle color="primary">Google LLC</IonCardSubtitle>
                            <IonCardTitle>UI/UX Designer</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <IonText>California, United States</IonText><br />
                            <IonText color="primary">$10.000 - $100.000 /month</IonText>
                        </IonCardContent>
                        <IonRow>
                            <IonCol><IonButton fill='outline' color="medium" size='small'>Full time</IonButton></IonCol>
                            <IonCol><IonButton fill='outline' color="medium" size='small'>On site</IonButton></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonText color="medium">Posted 10days ago, in 31December</IonText>
                            </IonCol>
                        </IonRow>
                        </IonCard>
                    </IonRow>
                    <IonRow style={{width:"100%"}}>
                    <IonSegment class='segment' scrollable={true} value="heart">
                        <IonSegmentButton value="home">
                            <IonText>Job Descriptions</IonText>
                        </IonSegmentButton>
                        <IonSegmentButton value="heart">
                            <IonText>Minimum Qualifications</IonText>
                        </IonSegmentButton>
                        <IonSegmentButton value="pin">
                            <IonText>Perks and Benefits</IonText>
                        </IonSegmentButton>
                    </IonSegment>
                        <IonText><h1>Job Description</h1></IonText>
                        <ul style={{width:"100%"}}>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, corporis?</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, facilis.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, facilis.</li>
                        </ul>
                        <IonText><h1>Minimum Qualifications</h1></IonText>
                        <ul style={{width:"100%"}}>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, facilis.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, facilis.</li>
                        </ul>
                        <IonText><h1>Perks and Benefits</h1></IonText>
                        <ul style={{width:"100%",listStyle:"none"}}>
                            <IonNavLink><li style={{marginBottom:"10px"}}><IonIcon color='primary' icon={save}></IonIcon>&nbsp; &nbsp; Lorem ipsum dolor sit amet</li> </IonNavLink><br />
                            <IonNavLink><li style={{marginBottom:"10px"}}><IonIcon color='primary' icon={save}></IonIcon>&nbsp; &nbsp; Lorem ipsum dolor sit amet</li> </IonNavLink><br />
                            <IonNavLink><li style={{marginBottom:"10px"}}><IonIcon color='primary' icon={save}></IonIcon>&nbsp; &nbsp; Lorem ipsum dolor sit amet</li> </IonNavLink><br />
                            <IonNavLink><li style={{marginBottom:"10px"}}><IonIcon color='primary' icon={save}></IonIcon>&nbsp; &nbsp; Lorem ipsum dolor sit amet</li> </IonNavLink><br />
                            <IonNavLink><li style={{marginBottom:"10px"}}><IonIcon color='primary' icon={save}></IonIcon>&nbsp; &nbsp; Lorem ipsum dolor sit amet</li> </IonNavLink><br />
                        </ul>
                        <IonText><h1>Required Skills</h1></IonText>
                        <IonRow>
                            <IonButton shape='round' size='small' fill='outline' color="primary">All</IonButton>
                            <IonButton shape='round' size='small' fill='outline' color="primary">Design</IonButton>
                            <IonButton shape='round' size='small' fill='outline' color="primary">Technology</IonButton>
                            <IonButton shape='round' size='small' fill='outline' color="primary">Finance</IonButton>
                            <IonButton shape='round' size='small' fill='outline' color="primary">Finance</IonButton>
                            <IonButton shape='round' size='small' fill='outline' color="primary">Finance</IonButton>
                        </IonRow>
                        <IonText><h1>Job Summary</h1></IonText>
                    </IonRow>
                    <IonRow>
                            <IonCol>
                                <IonText><h4>Job level</h4></IonText><br />
                                <IonText >Lorem, ipsum dolor.</IonText><br />
                            </IonCol>
                        </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )}