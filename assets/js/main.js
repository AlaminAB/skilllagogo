   $('form.serach-form input').click(function() {
        $('form.serach-form button').css('left', '10px');
        $(this).css('padding-left', '45px')
    })


    // jtoggle menu 

    var menu = document.querySelector(".menu-icon");
    var icon1 = document.querySelector(".first-icon");
    var icon2 = document.querySelector(".secound-icon");
    var icon3 = document.querySelector(".third-icon");

    menu.addEventListener("click", function() {
        icon2.classList.toggle("none");
        icon1.classList.toggle("icon");
        icon3.classList.toggle("icons");
    })
      