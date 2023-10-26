import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRange,
  IonRow,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import "./index.css";

export default function (): JSX.Element {
  return (
    <IonPage>
      <IonContent>
        <IonGrid className="filter-container">
          <IonRow style={{ overflowY: "auto" }}>
            <IonCol>
              <IonAccordionGroup multiple={true}>
                <IonAccordion
                  style={{ width: "100%" }}
                  className="filter-accordion"
                  value="first"
                >
                  <IonItem slot="header" color="light">
                    <IonLabel>First Accordion</IonLabel>
                  </IonItem>
                  <div className="ion-padding" slot="content">
                    <div className="loaction-card">United States</div>
                    <IonRange
                      aria-label="Dual Knobs Range"
                      dualKnobs={true}
                      value={{
                        lower: 20,
                        upper: 80,
                      }}
                    ></IonRange>
                    <IonSelect
                      label="Fixed label"
                      labelPlacement="fixed"
                      placeholder="Favorite fruit"
                    >
                      <IonSelectOption value="apple">Apple</IonSelectOption>
                      <IonSelectOption value="banana">Banana</IonSelectOption>
                      <IonSelectOption value="orange">Orange</IonSelectOption>
                    </IonSelect>
                  </div>
                </IonAccordion>
                <IonAccordion value="second">
                  <IonItem slot="header" color="light">
                    <IonLabel>Work Job</IonLabel>
                  </IonItem>
                  <div className="ion-padding" slot="content">
                    <IonRow style={{ overflowY: "auto" }}>
                      <IonList lines="none" style={{ width: "100%" }}>
                        <IonRadioGroup>
                          <IonItem>
                            <IonRadio
                              value={"a"}
                              justify="start"
                              labelPlacement="end"
                            >
                              Create
                            </IonRadio>
                          </IonItem>
                          <IonItem>
                            <IonRadio
                              value={"b"}
                              justify="start"
                              labelPlacement="end"
                            >
                              Remote
                            </IonRadio>
                          </IonItem>
                        </IonRadioGroup>
                      </IonList>
                    </IonRow>
                  </div>
                </IonAccordion>
                <IonAccordion value="third">
                  <IonItem slot="header" color="light">
                    <IonLabel>Third Accordion</IonLabel>
                  </IonItem>
                  <div className="ion-padding" slot="content">
                    <IonList lines="none" style={{ width: "100%" }}>
                      <IonRadioGroup>
                        <IonItem>
                          <IonCheckbox justify="start" labelPlacement="end">
                            InternShip
                          </IonCheckbox>
                        </IonItem>
                        <IonItem>
                          <IonCheckbox justify="start" labelPlacement="end">
                            InternShip
                          </IonCheckbox>
                        </IonItem>
                      </IonRadioGroup>
                    </IonList>
                  </div>
                </IonAccordion>
                <IonAccordion value="four">
                  <IonItem slot="header" color="light">
                    <IonLabel>Third Accordion</IonLabel>
                  </IonItem>
                  <div className="ion-padding" slot="content">
                    <IonList lines="none" style={{ width: "100%" }}>
                      <IonRadioGroup>
                        <IonItem>
                          <IonCheckbox justify="start" labelPlacement="end">
                            InternShip
                          </IonCheckbox>
                        </IonItem>
                        <IonItem>
                          <IonCheckbox justify="start" labelPlacement="end">
                            InternShip
                          </IonCheckbox>
                        </IonItem>
                      </IonRadioGroup>
                    </IonList>
                  </div>
                </IonAccordion>
              </IonAccordionGroup>
            </IonCol>
          </IonRow>

          <IonRow style={{ padding: "10px" }}>
            <IonCol>
              <IonButton
                color="light"
                shape="round"
                style={{ width: "100%" }}
                expand="block"
              >
                Reset
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton shape="round" style={{ width: "100%" }} expand="block">
                Apply
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
