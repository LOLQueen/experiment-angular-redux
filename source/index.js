import app from './app';

const SIZE = {
  height: 200,
  width: 200,
};

const inject = ::document.body.appendChild;
const remove = ::document.body.removeChild;

let $canvas = inject(canvas(SIZE));
app($canvas);

if (module.hot) {
  module.hot.accept('./app', () => {
    remove($canvas);
    $canvas = inject(canvas(SIZE));
    require('./app')($canvas);
  });
}

function canvas(options) {
  return Object.assign(
    document.createElement('canvas'), options
  );
}
