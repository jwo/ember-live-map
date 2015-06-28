import Ember from 'ember';
import PopupMixin from 'ember-leaflet/mixins/popup';
import MarkerLayer from 'ember-leaflet/layers/marker';
import MapPopup from '../components/map-popup';

let MarkerClass = MarkerLayer.extend(PopupMixin, {});

export default MarkerClass.extend({
    popupViewClass: MapPopup
});
