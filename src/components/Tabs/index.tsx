import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { triangle } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import Home from "../../pages/main/home";

export const Tabs: React.FC = () => (
    <IonTabs>
        <IonRouterOutlet>
            <Redirect exact from="/tabs" to={"/home"} />
            <Route path={"/home"} component={Home}/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/home">
                <IonIcon icon={triangle} />
            </IonTabButton>
        </IonTabBar>
    </IonTabs>
);