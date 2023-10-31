// Ionic card component
import React from 'react';

import './index.css';
import { IonText } from '@ionic/react';

interface TextProps {
  className?: string;
  children: React.ReactNode;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'caption';
  color?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark';
}

export const PuText: React.FC<TextProps> = ({ type, className, children, color }) => {
  return (
    <IonText className={['pu-text', type, className].join(' ')} color={color}>
      {children}
    </IonText>
  )
}
