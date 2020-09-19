var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    autoWidth: true,
    navAsThumbnails: false,
    controlsPosition: 'bottom',
    mouseDrag: true,
    prevButton: 'HELLO',
    nav: false,
    nextButton: '.next',
    prevButton: '.prev'
});
const info = document.querySelectorAll('.my-slider div');
var sliderInfo = slider.getInfo();
document.querySelector('.total-slider-count').innerHTML = sliderInfo.slideCount;

slider.events.on('transitionEnd', () => {
    var newsliderInfo = slider.getInfo();
    document.querySelector('.current-slider-count').innerHTML =
        newsliderInfo.displayIndex;
});
