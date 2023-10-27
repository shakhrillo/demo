import { IonContent, IonPage, IonRow, IonCol, IonButton, IonBadge, IonText, IonSegment, IonSegmentButton, IonLabel, IonGrid } from '@ionic/react';
import Google from "../../../assets/images/google.png"
import "./a.css"

const Message: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid class="message-container" style={{padding:"20px"}}>
          <IonRow>
            <IonCol>
            <IonSegment value="chat">
                <IonSegmentButton value="chat">
                    <IonText>Chats</IonText>
                </IonSegmentButton>
                <IonSegmentButton value="call">
                    <IonText>Calls</IonText>
                </IonSegmentButton>
            </IonSegment>
            </IonCol>
          </IonRow>
         <IonRow class='message-body'>
            <IonRow class='message-item' style={{padding:"10px 0"}}>
                <IonCol size="2"><img style={{width:"50px", height:"100%"}} src={Google} alt="" /></IonCol>
                <IonCol style={{ height:"100%", display:"flex",flexDirection:"column", justifyContent:"space-around"}} size="8">
                    <IonText style={{fontSize:"18px",fontWeight:"700"}}>Google LLC</IonText>
                    <IonText>Lorem ipsum dolor sit amet.</IonText>
                </IonCol>
                <IonCol style={{ height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-around", alignItems:"center"}} size='2'>
                <IonBadge color="primary">2</IonBadge>
                    <IonText>16:00</IonText>
                </IonCol>
            </IonRow>
            <IonRow class='message-item' style={{padding:"10px 0"}}>
                <IonCol size="2"><img style={{width:"50px", height:"100%"}} src={Google} alt="" /></IonCol>
                <IonCol style={{ height:"100%", display:"flex",flexDirection:"column", justifyContent:"space-around"}} size="8">
                    <IonText style={{fontSize:"18px",fontWeight:"700"}}>Google LLC</IonText>
                    <IonText>Lorem ipsum dolor sit amet.</IonText>
                </IonCol>
                <IonCol style={{ height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-around", alignItems:"center"}} size='2'>
                <IonBadge color="primary">2</IonBadge>
                    <IonText>16:00</IonText>
                </IonCol>
            </IonRow>
            <IonRow class='message-item' style={{padding:"10px 0"}}>
                <IonCol size="2"><img style={{width:"50px", height:"100%"}} src={Google} alt="" /></IonCol>
                <IonCol style={{ height:"100%", display:"flex",flexDirection:"column", justifyContent:"space-around"}} size="8">
                    <IonText style={{fontSize:"18px",fontWeight:"700"}}>Google LLC</IonText>
                    <IonText>Lorem ipsum dolor sit amet.</IonText>
                </IonCol>
                <IonCol style={{ height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-around", alignItems:"center"}} size='2'>
                <IonBadge color="primary">2</IonBadge>
                    <IonText>16:00</IonText>
                </IonCol>
            </IonRow>
            <IonRow class='message-item' style={{padding:"10px 0"}}>
                <IonCol size="2"><img style={{width:"50px", height:"100%"}} src={Google} alt="" /></IonCol>
                <IonCol style={{ height:"100%", display:"flex",flexDirection:"column", justifyContent:"space-around"}} size="8">
                    <IonText style={{fontSize:"18px",fontWeight:"700"}}>Google LLC</IonText>
                    <IonText>Lorem ipsum dolor sit amet.</IonText>
                </IonCol>
                <IonCol style={{ height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-around", alignItems:"center"}} size='2'>
                <IonBadge color="primary">2</IonBadge>
                    <IonText>16:00</IonText>
                </IonCol>
            </IonRow>
            <IonRow class='message-item' style={{padding:"10px 0"}}>
                <IonCol size="2"><img style={{width:"50px", height:"100%"}} src={Google} alt="" /></IonCol>
                <IonCol style={{ height:"100%", display:"flex",flexDirection:"column", justifyContent:"space-around"}} size="8">
                    <IonText style={{fontSize:"18px",fontWeight:"700"}}>Google LLC</IonText>
                    <IonText>Lorem ipsum dolor sit amet.</IonText>
                </IonCol>
                <IonCol style={{ height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-around", alignItems:"center"}} size='2'>
                <IonBadge color="primary">2</IonBadge>
                    <IonText>16:00</IonText>
                </IonCol>
            </IonRow>
            <IonRow class='message-item' style={{padding:"10px 0"}}>
                <IonCol size="2"><img style={{width:"50px", height:"100%"}} src={Google} alt="" /></IonCol>
                <IonCol style={{ height:"100%", display:"flex",flexDirection:"column", justifyContent:"space-around"}} size="8">
                    <IonText style={{fontSize:"18px",fontWeight:"700"}}>Google LLC</IonText>
                    <IonText>Lorem ipsum dolor sit amet.</IonText>
                </IonCol>
                <IonCol style={{ height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-around", alignItems:"center"}} size='2'>
                <IonBadge color="primary">2</IonBadge>
                    <IonText>16:00</IonText>
                </IonCol>
            </IonRow>
            <IonRow class='message-item' style={{padding:"10px 0"}}>
                <IonCol size="2"><img style={{width:"50px", height:"100%"}} src={Google} alt="" /></IonCol>
                <IonCol style={{ height:"100%", display:"flex",flexDirection:"column", justifyContent:"space-around"}} size="8">
                    <IonText style={{fontSize:"18px",fontWeight:"700"}}>Google LLC</IonText>
                    <IonText>Lorem ipsum dolor sit amet.</IonText>
                </IonCol>
                <IonCol style={{ height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-around", alignItems:"center"}} size='2'>
                <IonBadge color="primary">2</IonBadge>
                    <IonText>16:00</IonText>
                </IonCol>
            </IonRow>
            <IonRow class='message-item' style={{padding:"10px 0"}}>
                <IonCol size="2"><img style={{width:"50px", height:"100%"}} src={Google} alt="" /></IonCol>
                <IonCol style={{ height:"100%", display:"flex",flexDirection:"column", justifyContent:"space-around"}} size="8">
                    <IonText style={{fontSize:"18px",fontWeight:"700"}}>Google LLC</IonText>
                    <IonText>Lorem ipsum dolor sit amet.</IonText>
                </IonCol>
                <IonCol style={{ height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-around", alignItems:"center"}} size='2'>
                <IonBadge color="primary">2</IonBadge>
                    <IonText>16:00</IonText>
                </IonCol>
            </IonRow>
            <IonRow class='message-item' style={{padding:"10px 0"}}>
                <IonCol size="2"><img style={{width:"50px", height:"100%"}} src={Google} alt="" /></IonCol>
                <IonCol style={{ height:"100%", display:"flex",flexDirection:"column", justifyContent:"space-around"}} size="8">
                    <IonText style={{fontSize:"18px",fontWeight:"700"}}>Google LLC</IonText>
                    <IonText>Lorem ipsum dolor sit amet.</IonText>
                </IonCol>
                <IonCol style={{ height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-around", alignItems:"center"}} size='2'>
                <IonBadge color="primary">2</IonBadge>
                    <IonText>16:00</IonText>
                </IonCol>
            </IonRow>
            <IonRow class='message-item' style={{padding:"10px 0"}}>
                <IonCol size="2"><img style={{width:"50px", height:"100%"}} src={Google} alt="" /></IonCol>
                <IonCol style={{ height:"100%", display:"flex",flexDirection:"column", justifyContent:"space-around"}} size="8">
                    <IonText style={{fontSize:"18px",fontWeight:"700"}}>Google LLC</IonText>
                    <IonText>Lorem ipsum dolor sit amet.</IonText>
                </IonCol>
                <IonCol style={{ height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-around", alignItems:"center"}} size='2'>
                <IonBadge color="primary">2</IonBadge>
                    <IonText>16:00</IonText>
                </IonCol>
            </IonRow>
          
          
         </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Message;
