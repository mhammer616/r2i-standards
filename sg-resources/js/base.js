// JavaScript Document
$(document).ready(function() {
    "use strict";
    $('a[data-toggle="nav"]').on('click', function(event) {
        event.preventDefault();
        var el = $(this).attr('href'),
            $el = $(el);
            
        $el.addClass('active');
    });
    $('nav button').on('click', function(event) {
        event.preventDefault();
        $(this).closest('nav').removeClass('active');
    });
    $('figcaption[role="tablist"] > a[role="tab"]').on('click', function(event) {
        event.preventDefault();
        
        if (!$(this).attr('disabled')) {
            var $this = $(this),
                id = $this.attr('href'),
                $id = $(id);
            $this.closest('.tabs').find('[role="tabpanel"].active').removeClass('active');
            $this.closest('.tabs').find('[role="tab"].active').removeClass('active');
            $id.addClass('active');
            $this.addClass('active');
        }
    });
});

$(window).on('scroll resize', function() {
    "use strict";
    if ($(window).scrollTop() >=  $('main > header').outerHeight(true)) {
        $('main > section > article > nav').addClass('fixed');
    } else {
        $('main > section > article > nav .active').removeClass('active');
        $('main > section > article > nav').removeClass('fixed');
    }
});