import template from './template.html';

export default class LandingPage {
  static selector = 'landing-page';
  static template = template;
  constructor() {
  	this.summonerName = '';
  	this.region = '';
  	
  	this.search = function(summonerName, region) {
  		console.log(summonerName);
  		console.log(region);
  	};
  }
}
