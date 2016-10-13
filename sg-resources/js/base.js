// JavaScript Document
$(document).ready(function() {
    "use strict";
    $('[data-toggle="nav"]').on('click', function(event) {
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
	
	$('main article > nav a').on('click', function(event) {
		event.preventDefault();
		var id = $(this).attr('href');
	
		$('html, body').stop().animate({
			scrollTop: ($(id).offset().top - 15)
		}, 500);
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

// Cache selectors
var lastId,
    topMenu = $('article > nav > ul > li'),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find('> a'),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr('href'));
      if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass('active')
         .end().filter('[href="#'+id+'"]').parent().addClass('active');
   }                   
});