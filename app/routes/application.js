import Ember from 'ember';

export default Ember.Route.extend({
  
  actions: {
    error: function(reason, transition) {
      this.transitionTo('/login');
      return false;
    }
  }
  
});