import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  
  authManager: Ember.inject.service(),

  headers: Ember.computed('authManager.authToken', function() {
    return {
      "Authorization": `Bearer ${this.get("authManager.authToken")}`
    };
  })
  
});