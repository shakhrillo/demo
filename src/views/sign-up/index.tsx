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
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonToolbar,
} from '@ionic/react';
import { logoApple, logoFacebook, logoGoogle } from 'ionicons/icons';
import React, { useRef, useState } from 'react';

export const Signup: React.FC = () => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [passLength, setPassLength] = useState<number>(0);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);
  const firstNameRef = useRef<any>(null);
  const lastNameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const mobileNumberRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const selectRef = useRef<HTMLIonSelectElement>(null);

  const handleContinueClick = () => {
    const first_name = firstNameRef.current.value;
    const last_name = lastNameRef.current.value;
    const email = emailRef.current.value;
    const username = selectRef.current?.value + mobileNumberRef.current.value;
    const password = passwordRef.current.value;

    const user = {
      first_name,
      last_name,
      email,
      username,
      password,
    };

    fetch('http://prounity.uz:5000/api/authen/user_signup_views/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem('token', data.msg.access);
      })
      .catch((error) => console.error('Error:', error));
  };

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    if (value === '') return;
    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const passwordLen = (ev: Event) => {
    console.log(ev.target);
  };

  const handleFacebook = () => {
    console.log('facbook login');
  };
  const handleApple = () => {
    console.log('apple login');
  };
  const handleGoogle = () => {
    console.log('google login');
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent class='ion-padding'>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonText>Welcome to Healthpedia</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>Let us get to know you better!</IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList>
          <IonItem>
            <IonInput placeholder='First Name' ref={firstNameRef}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput placeholder='Last Name' ref={lastNameRef}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              type='email'
              placeholder='Email'
              onIonInput={(event) => validate(event)}
              ref={emailRef}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonGrid>
              <IonRow class='ion-align-items-center'>
                <IonCol size='auto'>
                  <img
                    width={24}
                    src='https://cdn.countryflags.com/thumbs/india/flag-square-250.png'
                    alt='au'
                  />
                </IonCol>
                <IonCol size='auto'>
                  <IonSelect placeholder='+1' value={+1} ref={selectRef}>
                    <IonSelectOption value='+1'>USA</IonSelectOption>
                    <IonSelectOption value='+34'>Ukraine</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol>
                  <IonInput
                    type='number'
                    placeholder='Mobile number'
                    ref={mobileNumberRef}
                  ></IonInput>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem>
            <IonInput
              placeholder='Password'
              type='password'
              helperText='*Minimum 6 characters'
              ref={passwordRef}
              onIonInput={(event) => passwordLen(event)}
            ></IonInput>
          </IonItem>
        </IonList>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                disabled={btnDisabled}
                expand='block'
                onClick={handleContinueClick}
              >
                Continue
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow class='ion-text-center'>
            <IonCol>
              <IonText>or</IonText>
            </IonCol>
          </IonRow>
          <IonRow class='ion-padding ion-text-center'>
            <IonCol>
              <IonIcon onClick={handleFacebook} size='2' icon={logoFacebook} />
            </IonCol>
            <IonCol>
              <IonIcon onClick={handleApple} size='2' icon={logoApple} />
            </IonCol>
            <IonCol>
              <IonIcon onClick={handleGoogle} icon={logoGoogle} />
            </IonCol>
          </IonRow>
          <IonRow class='ion-text-center'>
            <IonCol>
              <IonText>
                Already have an account? <a href='#'>Login</a>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>
                By signing up, you agree to our <a href='#'>Terms of Use</a> and{' '}
                <a href='#'>Privacy Policy</a>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
