import sayHello from './lib/sayHello.js';
import $ from 'jquery';
import './lib/rangeslider.js';
$(document).ready(function() {

  $('.input').attr('value', $('.range').attr('value'));

  $('.range').on('input', function(e) {
    $(this).parents('.range-slider').find('.input').attr('value', e.currentTarget.value);
    $(this).parents('.range-slider').find('.input').val(e.currentTarget.value);
    $(this).attr('value', e.currentTarget.value);
  });

  $('.range').rangeslider({
    polyfill: false
  });

  $('.rangeslider__handle').append($('#handle'));
  $('.rangeslider__fill').append($('#ruller-o'));
  $('.rangeslider').append($('#ruller'));

  $('#ruller-o').css('width', `${$('.rangeslider').width()}px`);
  $('#ruller').css('width', `${$('.rangeslider').width()}px`);

  $('.input').on('input', function() {
    var range = $(this).parents('.range-slider').find('.range');
    if (+$(this).val() >= +$(range).attr('max')) {
      $(this).attr('value', $(range).attr('max'));
      $(this).val($(range).attr('max'));
    } else if (+$(this).val() <= +$(range).attr('min')) {
      $(this).attr('value', $(range).attr('min'));
      $(this).val($(range).attr('min'));
    }
    $(range).val($(this).val()).change();
    $(range).attr('value', $(this).attr('value'));
  });

});
sayHello();
