import template from './template.html';

export default class MainApp {
  static selector = 'main-app';
  static template = template;
  constructor($log, $rootScope) {
    //Object.assign(this, {$log, $rootScope});
    console.log(Object.assign);
  }
  log() {
    this.$log.log('dependency injection works!');
  }
}
