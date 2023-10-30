import { Route } from 'react-router-dom';
import { IonApp, IonNav, IonNavLink, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import { Walkthrough } from './views/walkthrough';
import { Launch } from './views/launch';
import { Signin } from './views/sign-in';
import { Verification } from './views/verification';
import { Home } from './views/home';
import { Signup } from './views/sign-up';
import Main from './views/main';

setupIonicReact();

const App: React.FC = () => (
  <IonNav root={() => <Main />}></IonNav>

);
  // <IonApp className='pro-unity'>
  //   <IonReactRouter>
  //     <IonRouterOutlet>
  //       <Route exact path={'/'} component={Home} />
  //       <Route exact path={'/launch'} component={Launch} />
  //       <Route exact path={'/sign-in'} component={Signin} />
  //       <Route exact path={'/sign-up'} component={Signup} />
  //       <Route exact path={'/verification'} component={Verification} />
  //     </IonRouterOutlet>
  //   </IonReactRouter>
  // </IonApp>

export default App;
