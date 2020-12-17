/* Theme Name: Caxos - Responsive Landing page template
   Author: Coderthemes
   Author e-mail: coderthemes@gmail.com
   Version: 1.0.0
   Created:March 2016
   File Description: Nav-sticky JS file of the template
*/

//sticky header on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".sticky").addClass("is-sticky");
    } else {
        $(".sticky").removeClass("is-sticky");
    }
});