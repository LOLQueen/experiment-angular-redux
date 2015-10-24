import template from './template.html';
import {fetchSummoner} from 'source/actions';

export default class MainApp {
  static selector = 'main-app';
  static template = template;

  constructor($scope, $log, $ngRedux) {
    $scope.$on('$destroy', $ngRedux.connect(
      this.mapStateToThis,
    )(this));

    $log.log(this);
  }

  selectSummoner() {
    this.dispatch(fetchSummoner(this.summonerName));
  }

  mapStateToThis(state) {
    return {
      state: state.toJS(),
    };
  }
}
