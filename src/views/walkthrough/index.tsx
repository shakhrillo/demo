import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonToolbar,IonCard, IonCardHeader, IonCardContent, IonIcon, IonCardTitle } from "@ionic/react";
import React from "react";
import WalkthroughComponent from "../../components/walkthrough";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import { useHistory } from "react-router";
import {
  chevronForwardOutline,
  mailUnreadOutline,
  personOutline,
  star,
} from "ionicons/icons";


export const Walkthrough: React.FC = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const history = useHistory();
  
  const swiperData = [
    {
      title: "Easiest Consultation",
      description: "Get the right treatment directly from doctor by online consultation",
    },
    {
      title: "Easiest Consultation",
      description: "Get the right treatment directly from doctor by online consultation",
    },
    {
      title: "Easiest Consultation",
      description: "Get the right treatment directly from doctor by online consultation",
    },
  ];

  const handleNextSlide = () => {
    if (swiper) {
      if (currentSlide === swiperData.length - 1) {
        history.push("/other-path");
      } else {
        swiper.slideNext();
      }
    }
  };

  return(
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color="transparent">
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonGrid class="pu-flex-column pu-full-height">
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
                      <IonRow>
                        <IonCol>
                          <IonText>
                          {item.title}
                          </IonText>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonText>
                          {item.description}
                          </IonText>
                        </IonCol>
                      </IonRow>
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
          <IonRow class="pu-margin-top-auto">
            <IonCol>
              <IonButton onClick={handleNextSlide} expand="block">Continue</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
};
