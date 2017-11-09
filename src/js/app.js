import sayHello from './lib/sayHello.js';
import $ from 'jquery';
import noUiSlider from './lib/nouislider';

$(document).ready(function() {

  var slider = document.getElementById('slider');
  var sliderValue = document.querySelector('.input');

  noUiSlider.create(slider, {
    start: 20,
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  });

  slider.noUiSlider.on('update', function( values, handle ) {
    sliderValue.value = Math.round(values[handle]);
  });

  // var value;
  //
  // $('.range').change( function() {
  //   value = $(this).val();
  //   $(this).parents('.range-slider').find('.input').val(value);
  //   console.log(value);
  // });


});
sayHello();
