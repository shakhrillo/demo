import {
  IonContent,
  IonPage,
  IonImg,
  IonText,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import nasaStart from '../../../assets/images/nasa-start.jpeg';
import nasaCenter from '../../../assets/images/nasa-center.jpeg';
import nasaEnd from '../../../assets/images/nasa-end.jpeg';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonContent>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={{ nextEl: '.next' }}
        >
          <SwiperSlide className='next'>
            <IonGrid>
              <IonRow>
                <IonCol
                  style={{
                    background: `url(${nasaStart})`,
                    backgroundSize: '100%',
                    height: '500px',
                  }}
                ></IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonText color='primary'>
                    <h1>We are the best job portal platform</h1>
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde sit sequi
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton shape='round' expand='block'>
                    Next
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </SwiperSlide>
          <SwiperSlide className='next'>
            <IonGrid>
              <IonRow>
                <IonCol
                  style={{
                    background: `url(${nasaCenter})`,
                    backgroundSize: '100%',
                    height: '500px',
                  }}
                ></IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonText color='primary'>
                    <h1>The place where work finds you</h1>
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde sit sequi
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton shape='round' expand='block'>
                    Next
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </SwiperSlide>
          <SwiperSlide>
            <IonGrid>
              <IonRow>
                <IonCol
                  style={{
                    background: `url(${nasaEnd})`,
                    backgroundSize: '100%',
                    height: '500px',
                  }}
                ></IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonText color='primary'>
                    <h1>Let's start your career with us now!</h1>
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde sit sequi
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton shape='round' routerLink='/login' expand='block'>
                    Get Started
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
}
