const locomotiveScroll = new LocomotiveScroll({
  smooth: true,
  mobile: {
    smooth: true
  },
  tablet: {
    smooth: true
  }
});

$('.header-button').on('click', function (e) {
  e.preventDefault();
  const ths = $(this);
    ths.find('span').toggleClass('hidden');
    $('.header-nav').toggleClass('open');
    $('.header-overlay').toggleClass('open');
});
$('.header-overlay').on('click', function (e) {
  const ths = $(this);
    $('.header-button').find('span').toggleClass('hidden');
    $('.header-nav').removeClass('open');
    $('.header-overlay').removeClass('open');
});
$('.header-nav a').on('click', function (e) {
  e.preventDefault();
  const ths = $(this);
  $('.header-button').find('span').toggleClass('hidden');
  $('.header-nav').removeClass('open');
  $('.header-overlay').removeClass('open');
});
window.addEventListener('progressEvent', (e) => {
  const { target, progress } = e.detail;
  console.log(progress);
  if(progress >= .32){
    $('.community-top').css('opacity', '1').addClass('active');
    $('.community-bottom').css('opacity', '1').addClass('active');
  }else{
    $('.community-bottom').css('opacity', '1').removeClass('active');
    $('.community-top').css('opacity', '1').removeClass('active');
  }
});
$('.play-btn').on('click', function (e) {
  e.preventDefault();
  const t = $(this);
  const tVideo = t.prev().attr('src');
  $('body').addClass('scroll');
  $('.popup-video').addClass('active').find('video').attr('src', tVideo);
  $('.popup-video').find('video').attr('autoplay', 'true');
});
$('.close-popup, .popup-overlay').on('click', function (e) {
  var $this = $(this);
  $this.parent().removeClass('active');
  $('body').removeClass('scroll');
  $('.popup-video').removeClass('active').find('video').attr('src', '');
  $('.popup-video').find('video').attr('autoplay', 'false');
});

window.addEventListener("progressEvent", (e) => {
  const { progress } = e.detail;
  if(progress >= 0.25){
    $('.section-hero__media_top .circle-chart-one').find('.circle-chart-circle').attr('stroke-dasharray', '84,100');
    $('.section-hero__media_top .circle-chart-two').find('.circle-chart-circle').attr('stroke-dasharray', '91,100');
    $('.section-hero__media_top .circle-chart-three').find('.circle-chart-circle').attr('stroke-dasharray', '100,100');
    setTimeout(function (e) {
      $('.section-hero__media_top .chart-container-info').addClass('active');
    }, 1800)
  } else{}
});
window.addEventListener("progressEventSecond", (e) => {
  const { progress } = e.detail;
  if(progress >= 0.38){
    $('.section-hero__media_bot .circle-chart-one').find('.circle-chart-circle').attr('stroke-dasharray', '94,100');
    $('.section-hero__media_bot .circle-chart-three').find('.circle-chart-circle').attr('stroke-dasharray', '100,100');
    setTimeout(function (e) {
      $('.section-hero__media_bot .chart-container-info').addClass('active');
    }, 1800)
  } else{}
});
window.addEventListener("progressEventComparison", (e) => {
  const { progress } = e.detail;
  if(progress >= 0.35){
    $('.comparison-wrap').addClass('active');
  }
});
window.addEventListener("eventFadeOut", (e) => {
  const { progress } = e.detail;
    if(progress >= 0.65){
        $('.eventFadeOut').css('opacity', progress - .7);
    }
    else{
        $('.eventFadeOut').css('opacity', '1');
    }
    if(progress >= 0.9){
        $('.eventFadeOut').addClass('active');
    }else{
        $('.eventFadeOut').removeClass('active');
    }
});
