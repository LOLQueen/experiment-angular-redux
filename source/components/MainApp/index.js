import template from './template.html';

export default class MainApp {
  static selector = 'main-app';
  static template = template;
  constructor($log, $rootScope) {
    Object.assign(this, {$log, $rootScope});
  }
  log() {
    this.$log.log('dependency injection works!');
  }
}
