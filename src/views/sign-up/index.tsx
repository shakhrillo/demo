import {
<<<<<<< HEAD
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
=======
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
>>>>>>> f794037 (link chat and login)
  IonIcon,
  IonInput,
  IonItem,
  IonList,
<<<<<<< HEAD
=======
  IonNavLink,
>>>>>>> f794037 (link chat and login)
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
<<<<<<< HEAD
} from "@ionic/react";
import { logoApple, logoFacebook, logoGoogle } from "ionicons/icons";
import React, { useRef, useState } from "react";
=======
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { logoApple, logoFacebook, logoGoogle } from 'ionicons/icons';
import React from 'react';
import { Signin } from '../sign-in';
>>>>>>> f794037 (link chat and login)

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
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const mobileNumber =
      selectRef.current?.value + mobileNumberRef.current.value;
    const password = passwordRef.current.value;
  };
  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    if (value === "") return;
    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const passwordLen = (ev: Event) => {
    console.log(ev.target.value);
  };

  //

  const handleFacebook = () => {
    console.log("facbook login");
  };
  const handleApple = () => {
    console.log("apple login");
  };
  const handleGoogle = () => {
    console.log("google login");
  };

  return (
    <IonPage>
<<<<<<< HEAD
      <IonContent class="ion-padding">
=======
      <IonHeader className='ion-no-border'>
        <IonToolbar color='transparent'>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='' color='primary'></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent class='ion-padding'>
>>>>>>> f794037 (link chat and login)
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
<<<<<<< HEAD
            <IonInput placeholder="First Name" ref={firstNameRef}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput placeholder="Last Name" ref={lastNameRef}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              type="email"
              placeholder="Email"
              onIonInput={(event) => validate(event)}
              ref={emailRef}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonGrid>
              <IonRow class="ion-align-items-center">
                <IonCol size="auto">
                  <img
                    width={24}
                    src="https://cdn.countryflags.com/thumbs/india/flag-square-250.png"
                    alt="au"
                  />
                </IonCol>
                <IonCol size="auto">
                  <IonSelect placeholder="+1" value={+1} ref={selectRef}>
                    <IonSelectOption value="+1">USA</IonSelectOption>
                    <IonSelectOption value="+34">Ukraine</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol>
                  <IonInput
                    type="number"
                    placeholder="Mobile number"
                    ref={mobileNumberRef}
                  ></IonInput>
=======
            <IonInput placeholder='First Name'></IonInput>
          </IonItem>
          <IonItem>
            <IonInput placeholder='First Name'></IonInput>
          </IonItem>
          <IonItem>
            <IonInput placeholder='Email'></IonInput>
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
                  <IonSelect placeholder='+1'>
                    <IonSelectOption value='+1'>USA</IonSelectOption>
                    <IonSelectOption value='+34'>Ukraine</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol>
                  <IonInput placeholder='Mobile number'></IonInput>
>>>>>>> f794037 (link chat and login)
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem>
            <IonInput
<<<<<<< HEAD
              placeholder="Password"
              type="password"
              helperText="*Minimum 6 characters"
              ref={passwordRef}
              onIonInput={(event) => passwordLen(event)}
=======
              placeholder='Password'
              type='password'
              helperText='*Minimum 6 characters'
>>>>>>> f794037 (link chat and login)
            ></IonInput>
          </IonItem>
        </IonList>
        <IonGrid>
          <IonRow>
            <IonCol>
<<<<<<< HEAD
              <IonButton
                disabled={btnDisabled}
                expand="block"
                onClick={handleContinueClick}
              >
                Continue
              </IonButton>
=======
              <IonButton expand='block'>Continue</IonButton>
>>>>>>> f794037 (link chat and login)
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
<<<<<<< HEAD
              <IonIcon onClick={handleFacebook} size="2" icon={logoFacebook} />
            </IonCol>
            <IonCol>
              <IonIcon onClick={handleApple} size="2" icon={logoApple} />
=======
              <IonIcon size='2' icon={logoFacebook} />
            </IonCol>
            <IonCol>
              <IonIcon size='2' icon={logoApple} />
>>>>>>> f794037 (link chat and login)
            </IonCol>
            <IonCol>
              <IonIcon onClick={handleGoogle} icon={logoGoogle} />
            </IonCol>
          </IonRow>
          <IonRow class='ion-text-center'>
            <IonCol>
              <IonText>
<<<<<<< HEAD
                Already have an account? <a href="#">Login</a>
=======
                Already have an account?
                {/* <IonBackButton text={'Sign in'}></IonBackButton> */}
                <IonNavLink routerDirection='back' component={() => <Signin />}>
                  <IonButton size='small'>Sign in</IonButton>
                </IonNavLink>
                {/* <IonButton size="small" onClick={() => ionRouter.goBack()}>Sign in</IonButton> */}
>>>>>>> f794037 (link chat and login)
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>
<<<<<<< HEAD
                By signing up, you agree to our <a href="#">Terms of Use</a> and{" "}
                <a href="#">Privacy Policy</a>
=======
                By signing up, you agree to our <a href='#'>Terms of Use</a> and{' '}
                <a href='#'>Privacy Policy</a>
>>>>>>> f794037 (link chat and login)
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
