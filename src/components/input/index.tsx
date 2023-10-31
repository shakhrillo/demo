// Ionic card component
import React, { useRef, useState } from 'react';

import { IonImg, IonInput, IonSelect, IonSelectOption } from '@ionic/react';
import { TextFieldTypes, Color } from '@ionic/core';

import counriesCode from "../../views/sign-in/countries.json";

import './index.css';

interface InputProps {
  type?: TextFieldTypes;
  color?: Color;
  placeholder?: string;
}

export const PuInput: React.FC<InputProps> = ({type, color, placeholder}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("india");

  return (
    <div className='pu-input'>
      {
        type === 'tel' && <>
          <IonImg src={`https://cdn.countryflags.com/thumbs/${selectedCountry.toLowerCase()}/flag-square-250.png`} />
          <IonSelect placeholder="+1" onIonChange={(e) => setSelectedCountry(e.detail.value.name.toLowerCase())}>
            {counriesCode.map((item) => (
              <IonSelectOption key={item.code} value={item}>
                {item.dial_code}
              </IonSelectOption>
            ))}
          </IonSelect>
        </>
      }
      
      <IonInput type={type} color={color} placeholder={placeholder}></IonInput>
    </div>
  )
}
