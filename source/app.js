import 'babel-core/polyfill';

/*  components  */
import MainApp from './components/MainApp';
import GameCard from './components/GameCard';

/*  Redux stuff */
import {ReduxApp} from './utils';
import reducer from './reducer';
import thunks from 'redux-thunk';

export default ReduxApp({
  name: 'app',
  components: [ MainApp, GameCard ],
  middleware: [ thunks ],
  reducer: reducer,
});
