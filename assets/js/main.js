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
      

})
     