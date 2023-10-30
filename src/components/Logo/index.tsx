import React, { useEffect } from 'react';
import { IonContent, IonImg, IonText } from '@ionic/react';

export default function (props: {
  url?: string;
  children?: any;
  width?: number;
  height?: number;
}): JSX.Element {
  useEffect(() => {
    console.log('props.width', props.width);
  }, []);
  return (
    <>
      {props.url ? (
        <IonContent
          class='ion-text-center'
          style={{
            width: props.width + 'px',
            height: props.height + 'px',
            '--background': `url(${props.url}) no-repeat center center / cover`,
          }}
        ></IonContent>
      ) : (
        <IonText>{props.children}</IonText>
      )}
    </>
  );
}
