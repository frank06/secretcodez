import Ember from 'ember';

export default Ember.Service.extend({

  authToken: null,

  authenticate(login, password) {
    return Ember.$.getJSON('/token', { login: login, password: password }).then((result) => {
      this.set('authToken', result.auth_token);
    });
  },

  invalidate() {
    this.set('authToken', null);
  },

  isAuthenticated: Ember.computed.bool('authToken')

});