import Session from "ember-simple-auth/services/session";

export default {
  name: "current-user",
  before: "ember-simple-auth",
  
  initialize: function(container) {
    
    Session.reopen({

      setCurrentUser: function() {
        if (this.get('isAuthenticated')) {
          container.lookup("service:store").queryRecord('user', {}).then((user) => {
            this.set('currentUser', user);
          });
        }
      }.observes('isAuthenticated')
    });
  }
};