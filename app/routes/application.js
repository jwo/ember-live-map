import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {

    this.store.createRecord('location', {
      id: "houston",
      lat: 29.7532735,
      lng: -95.373236
    });
    return this.store.peekAll('location');
  }
});
