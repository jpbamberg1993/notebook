import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('register');
  this.route('login');
  this.route('notebooks', { path:'notebooks/:user_id'}, function() {});
});

export default Router;
