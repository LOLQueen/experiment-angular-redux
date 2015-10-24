import angular from 'angular';
import app from './app';
import 'basscss/css/basscss.css';

const inject = ::document.body.appendChild;
const remove = ::document.body.removeChild;

let $el = inject(bootstrap(app));

if (module.hot) {
  module.hot.accept('./app', () => {
    remove($el);
    $el = inject(bootstrap(require('./app')));
  });
}

function bootstrap({name}) {
  const el = document.createElement('div');
  el.appendChild(document.createElement('ui-view'));
  angular.bootstrap(el, [name]);
  return el;
}
