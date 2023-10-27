import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRange,
  IonRow,
  IonText,
} from "@ionic/react";
import {
  cameraOutline,
  checkmarkDoneOutline,
  happyOutline,
  micCircleOutline,
  play,
} from "ionicons/icons";
import "./index.css";
const data = [
  {
    title: "Actively looking for jobs",
    desc: "I a actively looking for job right now,and I would like to acceot job invitation",
  },
  {
    title: "Passively looking for job",
    desc: "I'm not looking for a job right, but I am interested to accept job invications. ",
  },
  {
    title: "Not looking for jobs",
    desc: "I'm not looking for a job right now, please don't send me job invications",
  },
];

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonContent>
        <IonGrid className="status-container">
          <IonList lines="full">
            <IonRadioGroup>
              <IonRow className="chat-card message-secondary">
                <IonCol size="10">
                  <IonCard>
                    <IonCardContent className="mesage">
                      <IonCol size="9">
                        <IonText>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </IonText>
                      </IonCol>
                      <IonCol style={{ display: "flex", alignItems: "end" }}>
                        <IonText>16:10</IonText>
                        <IonIcon icon={checkmarkDoneOutline}></IonIcon>
                      </IonCol>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow className="chat-card message-primary">
                <IonCol size="10">
                  <IonCard color={"primary"}>
                    <IonCardContent>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Accusantium, quisquam.
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow className="chat-card message-primary">
                <IonCol size="10">
                  <IonCard>
                    <IonCardContent className="mesage">
                      <IonImg
                        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww"
                        alt="img"
                      ></IonImg>
                      <IonImg
                        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww"
                        alt="img"
                      ></IonImg>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow className="chat-card message-primary">
                <IonCol size="10">
                  <IonCard>
                    <IonCardContent className="mesage">
                      <IonButton size="small">
                        <IonIcon icon={play}></IonIcon>
                      </IonButton>
                      <IonRange aria-label="Volume"></IonRange>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonRadioGroup>
          </IonList>
          <IonRow>
            <IonCol size="10" className="message-input">
              <IonIcon icon={happyOutline}></IonIcon>
              <IonInput placeholder="Xabar yozing..." clearInput></IonInput>
              <IonButton
                className="message-input-icon"
                fill="clear"
                color="primary"
              >
                <IonIcon icon={cameraOutline} />
              </IonButton>
            </IonCol>
            <IonCol size="2">
              <IonButton shape="round" className="message-voice-send">
                <IonIcon icon={micCircleOutline}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
