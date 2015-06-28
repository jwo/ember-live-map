/* global L */
import DS from 'ember-data';

export default DS.Model.extend({

  lat: DS.attr('number'),
  lng: DS.attr('number'),

  location: function(){
    var x = this.get('lat');
    var y = this.get('lng');
    return L.latLng(x, y);
  }.property('lat', 'lng')


});
