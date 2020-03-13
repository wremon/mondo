import jquery from 'jquery/src/jquery';
import '../../assets/js/prism';
import fitvids from 'fitvids/dist/fitvids';
import 'lazysizes';

$(document).ready(function() {
    "use strict";

    var images = document.querySelectorAll('.kg-gallery-image img');
    images.forEach(function (image) {
        var container = image.closest('.kg-gallery-image');
        var width = image.attributes.width.value;
        var height = image.attributes.height.value;
        var ratio = width / height;
        container.style.flex = ratio + ' 1 0%';
    });

    $(".post-content").find('.kg-card.kg-embed-card').wrap('<div class="fit-vid"></div>');

    fitvids(".fit-vid");

    $('.kg-card img').addClass('lazyload');
});
