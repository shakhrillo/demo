import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonLoading,
    IonNavLink,
    IonPage,
    IonRow,
    IonSegment,
    IonSegmentButton,
    IonSelect,
    IonSelectOption,
    IonText,
    IonTitle,
    IonToolbar,
    useIonRouter,
  } from '@ionic/react';
  import {
    arrowForwardOutline,
    logoApple,
    logoFacebook,
    logoGoogle,
    searchCircle,
    timeOutline,
  } from 'ionicons/icons';
  import React, { useEffect, useRef, useState } from 'react';
  import { Verification } from '../../verification';
  import { PuHeader } from '../../../components/header';
  import { PuText } from '../../../components/text';
  import { PuInput } from '../../../components/input';
  import { PuButton } from '../../../components/button';

  import { location, calendarClearOutline } from 'ionicons/icons';
  
  export const BookAppointment: React.FC = () => {
    return (
      <IonPage>
        <PuHeader isBackButton={true} />
        <IonContent class='ion-padding'>
          <PuText type='h3'>Book Appointment</PuText>
  
          <IonSegment value='default'>
            <IonSegmentButton value='default'>
              <IonLabel>Date</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='segment'>
              <IonLabel>Personal Details</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='segment'>
              <IonLabel>Payment</IonLabel>
            </IonSegmentButton>
          </IonSegment>
  
          <PuText>
            <IonIcon icon={location} />
            Hospital Location
          </PuText>
          <PuText type='caption'>
            Jl. Siloam No. 6, Karawaci, Tangerang, Indonesia
          </PuText>
  
          <PuText>
            <IonIcon icon={calendarClearOutline} />
            Hospital Name
          </PuText>
          <PuInput color='primary' type='date' placeholder='Mobile number' />
  
          <PuText>
            <IonIcon icon={timeOutline} />
            Time
          </PuText>
          <PuInput color='primary' type='date' placeholder='Mobile number' />
          <IonNavLink
            routerDirection='forward'
            component={() => <Verification />}
          >
            <PuButton expand='block'>
              Next
              <IonIcon slot='end' icon={arrowForwardOutline} />
            </PuButton>
          </IonNavLink>
        </IonContent>
      </IonPage>
    );
  };