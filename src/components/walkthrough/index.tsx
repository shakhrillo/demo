import React from 'react';
import { IonContent, IonImg } from '@ionic/react';

import './index.css';

export default function (props: { url: string; children: any }): JSX.Element {
  const { width, height } = window.screen;
  return (
    <>
      <IonContent
        style={{
          width,
          height,
          '--background': `url(${props.url}) no-repeat center center / cover`,
          positoon: 'absolute',
          zIndex: -1,
        }}
      >
        {props.children}
      </IonContent>
    </>
  );
}
