// Ionic card component
import React, { useState } from 'react';
import { IonIcon, IonImg, IonInput, IonSelect, IonSelectOption } from '@ionic/react';

import { TextFieldTypes, Color } from '@ionic/core';

import counriesCode from "../../views/sign-in/countries.json";

import './index.css';

interface InputProps {
  type?: TextFieldTypes;
  color?: Color;
  placeholder?: string;
  icon?: string;
  iconSlot?: 'start' | 'end';
}

export const PuInput: React.FC<InputProps> = ({
  type, color, placeholder, icon, iconSlot
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("india");

  return (
    <div className='pu-input'>
      <IonIcon icon={icon} className={iconSlot === 'end' ? 'pu-input-icon-end' : ''} />

      {
        type === 'tel' && <>
          <IonImg src={`https://cdn.countryflags.com/thumbs/${selectedCountry.toLowerCase()}/flag-square-250.png`} />
          <IonSelect 
            placeholder="+1" 
            onIonChange={(e) => setSelectedCountry(e.detail.value.name.toLowerCase())}
          >
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
