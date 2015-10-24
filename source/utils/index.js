import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import ngReduxRouter from 'redux-ui-router';

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

const registerConfig = (module, fn) => module.config(fn);

export function ReduxApp({
  components = [], middlewares = [], configs = [], containers = [],
  reducer, name,
} = {}) {
  const smartAndDumb = [...components, ...containers];
  return configs.reduce(registerConfig,
    smartAndDumb.reduce(registerComponent, angular
      .module(name, [ngRedux, uiRouter, ngReduxRouter])
      .config($ngReduxProvider => $ngReduxProvider.createStoreWith(
        reducer, middlewares
      ))
    )
  );
}
