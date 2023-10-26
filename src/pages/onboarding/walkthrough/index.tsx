import { IonContent, IonPage, IonImg, IonText, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonContent>
        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation={{ nextEl: '.next' }}>
          <SwiperSlide className="next">
            <IonGrid>
              <IonRow>
                <IonCol
                  style={{
                    'background': 'url(https://loremflickr.com/320/500)',
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
          <SwiperSlide>
            <IonGrid>
              <IonRow>
                <IonCol
                  style={{
                    'background': 'url(https://loremflickr.com/320/500)',
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
                  <IonButton routerLink="/login" expand="block">Finish</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
}
