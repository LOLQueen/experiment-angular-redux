import angular from 'angular';
import app from './app';

const inject = ::document.body.appendChild;
const remove = ::document.body.removeChild;

let $el = inject(bootstrap(app));

if (module.hot) {
  module.hot.accept('./app', () => {
    remove($el);
    $el = inject(bootstrap(require('./app')));
  });
}

function bootstrap() {
  const el = document.createElement('div');
  el.appendChild(document.createElement('main-app'));
  angular.bootstrap(el, ['app']);
  return el;
}
