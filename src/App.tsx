import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Splash from './pages/onboarding/splash';
import Welcome from './pages/onboarding/welcome';
import Walkthrough from './pages/onboarding/walkthrough';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import ForgotPassword from './pages/auth/forgot-password';
import Countries from './pages/account/countries';
import Preference from './pages/account/preference';
import Settings from './pages/account/settings';
import UserSettings from './pages/account/user-settings';
import ContactInformations from './pages/account/contact-informations';
import Expertise from './pages/account/expertise';
import NewPassword from './pages/auth/new-password';
import Home from './pages/main/home';
import WorkExperience from './pages/account/work-experience';
import User from './pages/account/user';
import LinkedAccount from './pages/account/linked-account';
import Education from './pages/account/education';
import Projects from './pages/account/user-projects';
import CertificationLicense from './pages/account/certification-licenses';
import VolunteeringExperience from './pages/account/volunteering';
import ProfessionalExams from './pages/account/profesional-exams';
import AwardsAchievements from './pages/account/awards';
import SeminarsTrainings from './pages/account/seminars';
import OrganizationActivities from './pages/account/organization';
import JobDetails from './pages/main/job-details';
import SavedJobs from './pages/account/saved-jobs';
import Applications from './pages/account/applications';
import ApplicationSatges from './pages/account/applications/applications-stages';
import Notification from './pages/account/notification';
import Security from './pages/account/security';
import Status from './pages/account/status';
import LanguagesPage from './pages/account/languages-page';
import Skills from './pages/account/skills';
import Affiliations from './pages/account/affiliations';
import References from './pages/account/references';
import CvResume from './pages/account/cv-resume';
import ApplicationSatges1 from './pages/account/applications/aplication-stages1';
import ApplicationSatges2 from './pages/account/applications/application-stages2';
import ApplicationSatges3 from './pages/account/applications/application-stages3';
import Language from './pages/account/language';
import FillUserProfile from './pages/account/fillUserProfile';
import { Tabs } from './components/Tabs';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path={'/tabs'} component={Tabs} />
        <Route exact path={'/'} component={Splash} />
        <Route path={'/welcome'} component={Welcome} />
        <Route path={'/walkthrough'} component={Walkthrough} />
        <Route path={'/login'} component={Login} />
        <Route path={'/register'} component={Register} />
        <Route path={'/countries'} component={Countries} />
        <Route path={'/preference'} component={Preference} />
        <Route path={'/expertise'} component={Expertise} />
        <Route path={'/fill-your-profile'} component={FillUserProfile} />
        <Route path={'/forgot-password'} component={ForgotPassword} />
        <Route path='/new-password' component={NewPassword} />

        {/* <Route exact path="/tab1">
            <Home />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/user-settings">
            <UserSettings />
          </Route>
          <Route exact path="/contact-information">
            <ContactInformations />
          </Route>
          <Route exact path="/work-experience">
            <WorkExperience />
          </Route>
          <Route exact path="/education">
            <Education />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/volunteering-experience">
            <VolunteeringExperience />
          </Route>
          <Route exact path="/certification-license">
            <CertificationLicense />
          </Route>
          <Route exact path="/professional-exams">
            <ProfessionalExams />
          </Route>
          <Route exact path="/awards-achievements">
            <AwardsAchievements />
          </Route>
          <Route exact path="/seminars-trainings">
            <SeminarsTrainings />
          </Route>
          <Route exact path="/organization-activities">
            <OrganizationActivities />
          </Route>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/walkthrough">
            <Walkthrough />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
          <Route exact path="/linked-account">
            <LinkedAccount />
          </Route>
          <Route exact path="/notification">
            <Notification />
          </Route>
          <Route exact path="/security">
            <Security />
          </Route>
          <Route exact path="/status">
            <Status />
          </Route>
          <Route exact path="/saved-jobs">
            <SavedJobs />
          </Route>
          <Route exact path="/applications">
            <Applications />
          </Route>
          <Route exact path="/application-stages">
            <ApplicationSatges />
          </Route>
          <Route exact path="/language">
            <Language />
            
        </Route>*/}
      </IonRouterOutlet>
      {/* <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs> */}
    </IonReactRouter>
  </IonApp>
);

export default App;
