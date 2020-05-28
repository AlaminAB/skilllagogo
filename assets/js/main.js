    $(document).ready(function() {
       $('form.serach-form input').click(function() {
        $('form.serach-form button').css('left', '10px');
        $(this).css('padding-left', '45px')
    })


    // jtoggle menu 

    $('.menu-icon').click( function() {
        $('.secound-icon').toggleClass("none");
       $('.first-icon').toggleClass("icon");
        $('.third-icon').toggleClass("icons");
    })
      
$(".custom-dropdown-toggle").on("click",function(){
    $(".nice-dropdown-menu").toggleClass("active-menu");
    $(".nice-dropdown").toggleClass("after-open")
})
 
})
     