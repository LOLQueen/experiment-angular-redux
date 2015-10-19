import angular from 'angular';

export default angular
  .module('app', [])
  .directive('mainApp', () => {
    return {
      template: 'What\'s up guyy!',
    };
  });
