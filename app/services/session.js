import ESASession from "ember-simple-auth/services/session";

export default ESASession.extend({
  
  store: Ember.inject.service(),
  
  setCurrentUser: function() {
    if (this.get('isAuthenticated')) {
      this.get('store').queryRecord('user', {}).then((user) => {
        this.set('currentUser', user);
      });
    }
  }.observes('isAuthenticated')
  
});
