import angular from 'angular';
import MainApp from './components/MainApp';
import {makeSelector, makeDirective} from './utils';

export default angular
  .module('app', [])
  .directive(makeSelector(MainApp), makeDirective(MainApp));
