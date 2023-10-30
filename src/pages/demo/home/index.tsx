import {
  IonContent,
  IonPage,
  IonImg,
  IonText,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFooter,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
} from "@ionic/react";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import stepOneImg from "../../../assets/images/nasa-center.jpeg";
import { useEffect, useState } from "react";
import {
  chevronForwardOutline,
  mailUnreadOutline,
  personOutline,
  star,
} from "ionicons/icons";

export default function (): JSX.Element {
  const [swiper, setSwiper] = useState<any>(null); // [swiper, setSwiper
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperData = [
    {
      title: "Consult with specialists , Prevent you from diseases!",
      description: "Get special 10% discount this December",
      image: stepOneImg,
    },
    {
      title: "The place where work finds you",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quibusdam",
      image: stepOneImg,
    },
    {
      title: "Let's start your career with us now!",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quibusdam",
      image: stepOneImg,
    },
  ];

  const SpecialistsCardData = [
    {
      img: "https://static.vecteezy.com/system/resources/previews/016/223/362/original/human-heart-logo-medical-cardiology-icon-illustration-vector.jpg",
      title: "Cardiologists",
      description: "213 doctors",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/016/223/362/original/human-heart-logo-medical-cardiology-icon-illustration-vector.jpg",
      title: "Pulmonologist",
      description: "332 doctors",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/016/223/362/original/human-heart-logo-medical-cardiology-icon-illustration-vector.jpg",
      title: "Internist",
      description: "122 doctors",
    },
  ];

  useEffect(() => {}, []);

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow
            style={{
              margin: 10,
            }}
          >
            <IonCol>
              <IonText color={"primary"}>
                <h1 style={{ margin: 0 }}>Healthpedia</h1>
              </IonText>
            </IonCol>
            <IonCol size="auto">
              <IonButton size="small" fill="clear" color={"dark"}>
                <IonIcon icon={mailUnreadOutline}></IonIcon>
              </IonButton>
              <IonButton size="small" fill="clear" color={"dark"}>
                <IonIcon icon={personOutline}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <Swiper
              pagination={{
                el: ".swiper-custom-pagination",
                type: "custom",
                clickable: true,
              }}
              style={{
                padding: 0,
              }}
              modules={[Pagination]}
              onSlideChange={(swiper) => {
                setCurrentSlide(swiper.activeIndex);
              }}
              onSwiper={(swiper) => {
                setSwiper(swiper);
              }}
            >
              {swiperData.map((item, index) => (
                <SwiperSlide key={index}>
                  <IonCard
                    style={{
                      margin: 10,
                      boxShadow: "none",
                      border: "none",
                      borderRadius: 10,
                      background: "#DAECFB",
                    }}
                  >
                    <IonCardHeader>
                      <IonCardTitle>
                        <IonText>
                          <h2 style={{ color: "#054A80" }}>{item.title}</h2>
                        </IonText>
                      </IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent style={{ color: "#054A80" }}>
                      <IonRow>
                        <IonCol size="8">{item.description}</IonCol>
                      </IonRow>
                    </IonCardContent>
                  </IonCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                className="swiper-custom-pagination"
              >
                {swiperData.map((item, index) => (
                  <div
                    key={index}
                    className={`swiper-pagination-bullet ${
                      index === currentSlide
                        ? "swiper-pagination-bullet-active"
                        : ""
                    }`}
                  ></div>
                ))}
              </div>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText>
                <h3>Specialists Category</h3>
              </IonText>
            </IonCol>
            <IonCol size="auto">
              <IonText>
                <IonText>
                  <p style={{ color: "#FF7360" }}>See all</p>
                </IonText>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            {SpecialistsCardData.map((card) => (
              <IonCol size="4">
                <IonCard style={{ margin: 0 }}>
                  <IonCardHeader>
                    <img src={card.img} alt="" />
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText color={"dark"} className="ion-text-center">
                      <h3>{card.title}</h3>
                    </IonText>
                    <IonText className="ion-text-center">
                      <p>{card.description}</p>
                    </IonText>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
          <IonCard className="pu-card">
            <IonCardHeader>
              <IonGrid
                style={{
                  width: "100%",
                }}
              >
                <IonRow>
                  <IonCol size="auto">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/016/223/362/original/human-heart-logo-medical-cardiology-icon-illustration-vector.jpg"
                      alt="Heart"
                      width={48}
                    />
                  </IonCol>
                  <IonCol size="auto">
                    <IonCardTitle>
                      <IonText>
                        <h3 style={{ margin: 0 }}>Available Doctors</h3>
                      </IonText>
                    </IonCardTitle>
                    <IonRow>
                      <IonCol size="auto">
                        <IonText>Chat with our available doctors</IonText>
                      </IonCol>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardHeader>
          </IonCard>
          <IonCard className="pu-card">
            <IonCardHeader>
              <IonGrid
                style={{
                  width: "100%",
                }}
              >
                <IonRow>
                  <IonCol size="auto">
                    <img
                      style={{
                        borderRadius: "50%",
                      }}
                      src="https://randomuser.me/api/portraits/women/47.jpg"
                      alt="User"
                      width={48}
                    />
                  </IonCol>
                  <IonCol>
                    <IonCardTitle>
                      <IonText>
                        <h3 style={{ margin: 0 }}>dr. Usman Yusuf</h3>
                      </IonText>
                    </IonCardTitle>
                    <IonRow>
                      <IonCol size="auto">
                        <IonIcon color="warning" icon={star}></IonIcon>
                      </IonCol>
                      <IonCol size="auto">
                        <IonText>4.5</IonText>
                      </IonCol>
                      <IonCol size="auto">
                        <IonText>Cardiologist</IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow className="ion-align-items-center ion-justify-content-between">
                      <IonCol size="auto">
                        <IonText color="danger">$30</IonText>
                      </IonCol>
                      <IonCol size="auto">
                        <IonButton size="small">Chat</IonButton>
                      </IonCol>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardHeader>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
