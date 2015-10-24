import template from './template.html';

export default class MainApp {
  static selector = 'main-app';
  static template = template;
  static options = {
    transclude: true,
  };

  constructor($scope, $log, $ngRedux) {
    $scope.$on('$destroy', $ngRedux.connect(
      this.mapStateToThis,
    )(this));
  }

  mapStateToThis(state) {
    return {
      state: state.toJS(),
    };
  }
}
