import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonSelectOption,
  IonText,
} from "@ionic/react";
import profile from "../../../assets/images/user-logo.jpeg";
import "./index.css";

const data = ["Contact Information", "Summary", "Education", "Projects"];

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCard className="profile-card" style={{ boxShadow: "none" }}>
              <IonCardContent>
                <IonRow>
                  <IonCol
                    size="2"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img
                      style={{ borderRadius: "50%" }}
                      src={profile}
                      alt="Card Image"
                    />
                  </IonCol>
                  <IonCol size="8">
                    <IonCardHeader>
                      <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                      <IonCardTitle>
                        <h1>Card Title</h1>
                      </IonCardTitle>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol
                    size="2"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                    }}
                  >
                    e
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
          </IonRow>
          <IonRow>
            {data.map((item) => (
              <IonCard className="profile-list" style={{ boxShadow: "none" }}>
                <IonCardContent>
                  <IonRow>
                    <IonCol
                      size="2"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        style={{ borderRadius: "50%" }}
                        src={profile}
                        alt="Card Image"
                        width={30}
                      />
                    </IonCol>
                    <IonCol size="8">
                      <IonCardHeader>
                        <IonCardSubtitle>{item}</IonCardSubtitle>
                      </IonCardHeader>
                    </IonCol>
                    <IonCol
                      size="2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                      }}
                    >
                      +
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
