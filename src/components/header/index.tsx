// Ionic card component
import React from 'react';

import { IonBackButton, IonCardTitle, IonHeader, IonToolbar } from '@ionic/react';

import './index.css';

interface HeaderProps {
  title?: string;
  isBackButton?: boolean;
}

export const PuHeader: React.FC<HeaderProps> = ({ title, isBackButton }) => {
  return (
    <IonHeader className="pu-header">
      <IonToolbar>
        {
          title && <IonCardTitle>{title}</IonCardTitle>
        }
        {
          isBackButton && <IonBackButton defaultHref="/"></IonBackButton>
        }
      </IonToolbar>
    </IonHeader>
  )
}
