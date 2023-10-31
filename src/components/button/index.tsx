// Ionic card component
import React from 'react';

import './index.css';
import { IonButton, IonLoading, IonSpinner } from '@ionic/react';
import { Color } from '@ionic/core';

interface ButtonProps {
  children: React.ReactNode;
  color?: Color;
  type?: "button" | "submit" | "reset" | undefined;
  expand?: "full" | "block" | undefined;
  loading?: boolean;
  disabled?: boolean;
}

export const PuButton: React.FC<ButtonProps> = ({ type, children, color, expand, loading, disabled }) => {
  return (
    <IonButton className='pu-button' type={type} color={color} expand={expand} disabled={disabled || loading}>
      {
        loading ?
          <IonSpinner></IonSpinner>
        :
        children
      }
    </IonButton>
  )
}
