// Ionic card component
import React from 'react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './index.css';

interface CardProps {
  title: string;
  subtitle?: string;
  content: string;
  style?: React.CSSProperties;
}

export const PuCard: React.FC<CardProps> = ({ title, subtitle = null, content, style }) => {
  return (
    <IonCard className='pu-card' style={style}>
      <IonCardHeader>
        {
          subtitle && <IonCardSubtitle>{subtitle}</IonCardSubtitle>
        }
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {content}
      </IonCardContent>
    </IonCard>
  )
}
