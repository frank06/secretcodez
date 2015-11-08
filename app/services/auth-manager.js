import Ember from 'ember';

export default Ember.Service.extend({

  accessToken: null,

  authenticate(login, password) {
    return Ember.$.ajax({
      method: "POST",
      url: "/token",
      data: { username: login, password: password }
    }).then((result) => {
      this.set('accessToken', result.access_token);
    });
  },

  invalidate() {
    this.set('accessToken', null);
  },

  isAuthenticated: Ember.computed.bool('accessToken')

});