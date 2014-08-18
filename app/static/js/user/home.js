/* global google:true*/

(function(){
  'use strict';

  var map;

  $(document).ready(function(){
    initMap(36.2, -86.7, 6);
  });

  function initMap(lat, lng, zoom){
    var styles      = [{'featureType':'administrative','elementType':'all','stylers':[{'visibility':'on'},{'saturation':-100},{'lightness':20}]},{'featureType':'road','elementType':'all','stylers':[{'visibility':'on'},{'saturation':-100},{'lightness':40}]},{'featureType':'water','elementType':'all','stylers':[{'visibility':'on'},{'saturation':-10},{'lightness':30}]},{'featureType':'landscape.man_made','elementType':'all','stylers':[{'visibility':'simplified'},{'saturation':-60},{'lightness':10}]},{'featureType':'landscape.natural','elementType':'all','stylers':[{'visibility':'simplified'},{'saturation':-60},{'lightness':60}]},{'featureType':'poi','elementType':'all','stylers':[{'visibility':'off'},{'saturation':-100},{'lightness':60}]},{'featureType':'transit','elementType':'all','stylers':[{'visibility':'off'},{'saturation':-100},{'lightness':60}]}],
    // options for the map, centered near Nashville, zoom level 0-20, what the map looks like (roads, sat, geo)
        mapOptions  = {center: new google.maps.LatLng(lat, lng), zoom: zoom, mapTypeId: google.maps.MapTypeId.ROADMAP, styles:styles};
    // this is the line that creates the map and puts it in the #map div
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

})();

