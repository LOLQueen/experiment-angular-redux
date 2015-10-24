import 'babel-core/polyfill';
import uiRouterConfig from './router.config';

/*  components  */
import GameCard from './components/GameCard';

/*  containers  */
import MainApp from './containers/MainApp';
import SummonerPage from './containers/SummonerPage';
import LandingPage from './containers/LandingPage';

/*  Redux stuff */
import {ReduxApp} from './utils';
import reducer from './reducer';
import thunks from 'redux-thunk';

export default ReduxApp({
  name: 'LolQueen',
  containers: [ MainApp, SummonerPage, LandingPage ],
  components: [ GameCard ],
  middlewares: [ thunks ],
  configs: [ uiRouterConfig ],
  reducer,
});
