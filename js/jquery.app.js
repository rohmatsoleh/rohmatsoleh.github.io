/* Theme Name: Caxos - Responsive Landing page template
   Author: Coderthemes
   Version: 1.0.0
   Created: July 2020
   File Description:Main JS file of the template
*/

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});