import { IonContent, IonPage, IonImg, IonText, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonContent>
        <Swiper>
          <SwiperSlide>
            <IonGrid>
              <IonRow>
                <IonCol
                  style={{
                    'background-color': 'blue',
                    'background': 'url(https://loremflickr.com/320/500)',
                    "flex-grow": "1",
                    "height": "500px",
                  }}
                ></IonCol>
              </IonRow>
              <IonRow>    
                <IonCol>
                  <IonText color="primary">
                    <h1>
                      We are the best job portal platform
                    </h1>
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit sequi</IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton expand="block">Next</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
}
