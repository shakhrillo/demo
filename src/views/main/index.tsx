import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonRouterOutlet,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { Route, Redirect } from "react-router";

import {
  homeOutline,
  medicalOutline,
  bookOutline,
  searchOutline,
  basketOutline,
  shieldOutline,
} from "ionicons/icons";
import { Home } from "../home";
import { Shop } from "../shop";
import { Subscription } from "../subscription";
import { Blog } from "../blog";
import { Explore } from "../explore";
import { AboutDoctor } from "../about-doctor";
import { TransactionSummary } from "../transaction-summary";

function Main() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          <Route
            path="/home"
            render={() => <TransactionSummary />}
            exact={true}
          />
          <Route path="/explore" render={() => <Explore />} exact={true} />
          <Route path="/blog" render={() => <Blog />} exact={true} />
          <Route
            path="/subscription"
            render={() => <Subscription />}
            exact={true}
          />
          <Route path="/shop" render={() => <Shop />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
          </IonTabButton>

          <IonTabButton tab="explore" href="/explore">
            <IonIcon icon={medicalOutline} />
          </IonTabButton>

          <IonTabButton tab="blog" href="/blog">
            <IonIcon icon={bookOutline} />
          </IonTabButton>

          <IonTabButton tab="subscription" href="/subscription">
            <IonIcon icon={shieldOutline} />
          </IonTabButton>

          <IonTabButton tab="shop" href="/shop">
            <IonIcon icon={basketOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}
export default Main;
