import 'babel-core/polyfill';
import angular from 'angular';
import MainApp from './components/MainApp';
import GameCard from './components/GameCard';
import LandingPage from './components/LandingPage'
import {register} from './utils';


const app = angular.module('app', []);

export default register(app, {
  components: [ MainApp, GameCard, LandingPage ],
});
