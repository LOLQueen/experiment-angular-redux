import template from './template.html';

export default class MainApp {
  static selector = 'main-app';
  static template = template;
  constructor($log) {
    this.$log = $log.log;
  }
  log() {
    this.$log('dependency injection works!');
  }
}
