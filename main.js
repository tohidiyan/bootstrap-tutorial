$(document).ready(function(){
    function scrollMenu(){
        let navmenu = $('.nav-menu');
        if($(window).scrollTop()>50){
            navmenu.addClass('nav-open')
        }
        else{
            navmenu.removeClass('nav-open')
        }
    }

scrollMenu();
$(window).on('scroll' , scrollMenu);


});


let navCollapse = $('#menuid')
navCollapse.on('show.bs.collapse' , function(){
    $(this).parents('.nav-menu').addClass('nav-open');
});
navCollapse.on('hide.bs.collapse' , function(){
    $(this).parents('.nav-menu').removeClass('nav-open');
})

// $(window).on('scroll' , function(){
//     console.log($(window).scrollTop())
// })