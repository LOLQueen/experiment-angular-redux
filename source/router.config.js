export default ($urlRouterProvider, $stateProvider) => {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('app', {
      url: '',
      abstract: true,
      template: `
        <main-app>
          <ui-view />
        </main-app>
      `,
    })
    .state('app.index', {
      url: '/',
      template: `<landing-page />`,
    })
    .state('app.summoner', {
      url: '/:region/summoners/:summonerName',
      template: `<summoner-page />`,
    });
};
