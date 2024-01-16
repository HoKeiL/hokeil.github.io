$(window).scroll(function () {
   let content = $(".cs-sticky-sidebar");
   let scrollTop = $(window).scrollTop();
   content.css("opacity", 0 + scrollTop /750);
});
