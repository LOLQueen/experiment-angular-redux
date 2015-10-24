import angular from 'angular';
import ngRedux from 'ng-redux';

export function makeDirective(component) {
  return () => {
    const ddo = {
      restrict: 'E',
      scope: {},
      controllerAs: 'ctrl',
      bindToController: true,
      controller: component,
    };

    if (component.template) {
      angular.extend(ddo, {
        template: component.template,
      });
    }

    if (component.templateUrl) {
      angular.extend(ddo, {
        templateUrl: component.templateUrl,
      });
    }

    if (component.options) {
      angular.extend(ddo, component.options);
    }

    return ddo;
  };
}

export function makeSelector(component) {
  return component.selector.replace(
    /-([a-z])/g,
    (g) => g[1].toUpperCase()
  );
}

const registerComponent = (module, component) => module.directive(
  makeSelector(component), makeDirective(component)
);

export function ReduxApp({
  components = [], middleware = [], reducer, name,
} = {}) {
  return components.reduce(registerComponent, angular
    .module(name, [ngRedux])
    .config($ngReduxProvider => $ngReduxProvider.createStoreWith(
      reducer, middleware
    ))
  );
}
