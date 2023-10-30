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
} from '@ionic/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import stepOneImg from '../../../assets/images/nasa-center.jpeg';
import { useEffect, useState } from 'react';

export default function (): JSX.Element {
  const [swiper, setSwiper] = useState<any>(null); // [swiper, setSwiper
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperData = [
    {
      title: 'We are the best job portal platform',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quibusdam',
      image: stepOneImg
    },
    {
      title: 'The place where work finds you',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quibusdam',
      image: stepOneImg
    },
    {
      title: 'Let\'s start your career with us now!',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quibusdam',
      image: stepOneImg
    }
  ];

  useEffect(() => {
  }, []);

  return (
    <IonPage>
      <IonContent>
        <Swiper 
          pagination={{
            'el': '.swiper-custom-pagination',
            'type': 'custom',
            'clickable': true
          }}
          style={{
            padding: 0
          }}
          modules={[Pagination]}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.activeIndex);
          }}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
        >
          {
            swiperData.map((item, index) => (
              <SwiperSlide key={index}>
                <IonCard style={{
                  margin: 0,
                  boxShadow: 'none',
                  border: 'none',
                  borderRadius: 0,
                }}>
                  <IonImg src={item.image}></IonImg>
                  <IonCardHeader>
                    <IonCardTitle color="primary" className='ion-text-center'>{item.title}</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent className='ion-text-center'>{item.description}</IonCardContent>
                </IonCard>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </IonContent>
      <IonFooter className='ion-padding'>
        <IonGrid>
          <IonRow className='ion-justify-content-center'>
            <IonCol>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
              }} className="swiper-custom-pagination">
                {
                  swiperData.map((item, index) => (
                    <div key={index} className={`swiper-pagination-bullet ${index === currentSlide ? 'swiper-pagination-bullet-active' : ''}`}></div>
                  ))
                }
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        {
          currentSlide < swiperData.length - 1 ? (
            <IonButton onClick={
              () => {
                swiper.slideNext();
              }
            } shape='round' expand='block'>
              Next
            </IonButton>
          ): <IonButton shape='round' expand='block' routerLink='/login'>
            Finish
          </IonButton>
        }
      </IonFooter>
    </IonPage>
  );
}
