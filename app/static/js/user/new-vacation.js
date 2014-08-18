/* jshint camelcase:false */
/* global google:true */

(function(){
  'use strict';

  $(document).ready(function(){
    $('form').submit(addVacation);
  });

  function addVacation(e){
    var lat = $('#lat').val();

    if(!lat){
      var name  = $('#name').val();
      geocode(name);
      e.preventDefault();
    }
  }

  function geocode(name){
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({address: name}, function(results, status){
      var name  = results[0].formatted_address,
      // sends out name to Google and it brings back coordinates
          lat   = results[0].geometry.location.lat(),
          lng   = results[0].geometry.location.lng();

      $('#name').val(name);
      $('#lat').val(lat);
      $('#lng').val(lng);

      $('form').submit();
    });
  }
})();
