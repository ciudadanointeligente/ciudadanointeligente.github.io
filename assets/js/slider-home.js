var $slider = $('#js-bxSlider');
var $sliderOptions = {
  mode: 'vertical',
  slideSelector: '.slide-item',
  pager: false,
  onSlideNext : function($slideElement) {
    var $slideBackgroundColor = $slideElement.css('backgroundColor');
    $('.hero-slider').animate( { 'backgroundColor' : $slideBackgroundColor }, 250);
  },
};

$slider.bxSlider($sliderOptions);
