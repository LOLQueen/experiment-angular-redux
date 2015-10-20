import angular from 'angular';
import MainApp from './components/MainApp';
import GameCard from './components/GameCard';
import {makeSelector, makeDirective} from './utils';

export default angular
  .module('app', [])
  .directive(makeSelector(MainApp), makeDirective(MainApp))
  .directive(makeSelector(GameCard), makeDirective(GameCard));
