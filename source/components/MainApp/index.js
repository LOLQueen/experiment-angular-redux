export default class MainApp {
  static selector = 'main-app';
  static template = require('./template.html');
  constructor($log) {
    this.$log = $log.log;
  }
  log() {
    this.$log('dependency injection works!');
  }
}
