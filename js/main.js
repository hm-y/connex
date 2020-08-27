$(window).on("load",function() {

    $(window).scroll(function() {

      var bottom = $(this).scrollTop() + $(this).innerHeight();

      $(".section").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).innerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < bottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(250,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(250,0);}
        }
      });

    }).scroll(); //invoke scroll-handler on page-load

  });