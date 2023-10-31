import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { useRef, useState, useEffect } from "react";

export const Verification: React.FC = () => {
  const [firstInput, setFirstInput] = useState<any>("")
  const [secondInput, setSecondInput] = useState("")
  const [thirdInput, setThirdInput] = useState("")
  const [fourthInput, setFourthInput] = useState("")
  const [active, setActive] = useState(false)
  const [counter, setCounter] = useState(5)

  const firstInputRef = useRef(null)
  const secondInputRef = useRef(null)
  const thirdInputRef = useRef(null)
  const fourthInputRef = useRef(null)

  const timer = () =>{
    if(active){
      setCounter(counter-1)
    }
  }

  const changeActive = () => {
    setActive(false)
  }
  
  setTimeout(timer, 1000)

  const setFalse = () => {
    setActive(true)
    setTimeout(changeActive, 5000)
    setCounter(5)
  }

  const handleFirstInput = (event: any) => {
    const firstval = event.target.value
    setFirstInput(firstval)
    if(firstval.length ===1){
      secondInputRef.current.setFocus();
    }
  }
  const handleSecondInput = (event: any) => {
    const secondval = event.target.value
    setSecondInput(secondval)
    if(secondval.length ===1){
      thirdInputRef.current.setFocus()
    }
  }
  const handleThirdInput = (event: any) => {
    const thirdval = event.target.value
    setThirdInput(thirdval)
    if(thirdval.length ===1){
      fourthInputRef.current.setFocus()
    }
  }
  const handleFourthInput = (event: any) => {
    const fourthval = event.target.value
    setFourthInput(thirdval)
    if(fourthval.length ===1){
      fourthInputRef.current.setFocus()
    }
  }

  

  return(
    <IonPage>
    <IonHeader className="ion-no-border">
      <IonToolbar color="transparent">
        <IonButtons slot="start">
          <IonBackButton defaultHref="" color="primary"></IonBackButton>
        </IonButtons>
        <IonButton  slot="end" onClick={setFalse} disabled={active}>Resend Code</IonButton>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonGrid class="ion-padding pu-full-height pu-flex-column">
        <IonRow>
          <IonCol>
            <IonText>
              Verify Account
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonText>
              Four digits code are sent to (**)*** - 513. Enter the codes to verify your account.
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow class="ion-text-center">
          <IonCol>
            <IonInput onIonInput={handleFirstInput} ref={firstInputRef} inputMode={"numeric"} maxlength={1} counter={false} placeholder="0"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput onIonInput={handleSecondInput} ref={secondInputRef} inputMode={"numeric"} value={secondInput} maxlength={1} counter={false} placeholder="0"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput onIonInput={handleThirdInput} ref={thirdInputRef} inputMode={"numeric"} value={thirdInput} maxlength={1} counter={false} placeholder="0"></IonInput>
          </IonCol>
          <IonCol>
            <IonInput onIonInput={handleFourthInput} ref={fourthInputRef} inputMode={"numeric"} value={fourthInput} maxlength={1} counter={false} placeholder="0"></IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            {active?<h1>{counter}</h1>:""}
          </IonCol>
        </IonRow>
        <IonRow className="pu-margin-top-auto">
          <IonCol>
            <IonButton expand="block">Verify</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton expand="block">Send code by mail</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
  )
};