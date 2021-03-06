import './styles/index.scss';
import $ from 'jquery';
import 'accordion/src/accordion.js'
import 'accordion/src/accordion.css'
// import 'slick-carousel';
import 'slick-carousel/slick/slick.js';
import 'slick-carousel/slick/slick.css';

// accordion menu
var el = document.querySelector(".accordion");
new Accordion(el);

// we need to paint ours svg to else colors
$('img.img-svg').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
        var $svg = $(data).find('svg');
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
    }, 'xml');
});

$('#slick-1').slick({
    slidesToShow: 4,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    infinite: true
});

$('#slick-2').slick({
    slidesToShow: 4,
    prevArrow: $('.slick-prev2'),
    nextArrow: $('.slick-next2'),
    infinite: true
});