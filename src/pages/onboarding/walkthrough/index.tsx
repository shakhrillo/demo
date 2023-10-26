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
                <IonCol>
                  <IonImg
                    src='https://loremflickr.com/320/500'
                  />
                </IonCol>
              </IonRow>
              <IonRow>    
                <IonCol>
                  <IonText class='head-text'>
                    Lorem ipsum dolor sit amet Lorem, ipsum dolor..
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonText>
                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                  </IonText>
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
