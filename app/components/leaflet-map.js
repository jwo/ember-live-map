import Ember from 'ember';
import EmberLeafletComponent from 'ember-leaflet/components/leaflet-map';
import MarkerCollectionLayer from 'ember-leaflet/layers/marker-collection';
import TileLayer from 'ember-leaflet/layers/tile';


export default EmberLeafletComponent.extend({
  zoom: 4,
  center: [29.7532735, -95.373236],
  childLayers: [
    TileLayer.extend({
       tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
     }),
     MarkerCollectionLayer.extend({
       //child layer holds `controller` property here
       content: Ember.computed.alias('controller.markers')
     })
 ]
});
