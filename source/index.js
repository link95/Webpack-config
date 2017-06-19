import './index.scss'
import './media.css'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import WOW from 'wowjs'

new WOW.WOW().init();

console.log("index");


$(document).ready(function () {
    $(".nam_list_meny").on("click", function () {
        $(".nam-list").slideToggle();
        $(".div__header").slideToggle()
    })
});


$(document).ready(function(){
    $(".nav-item").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$(window).scroll(function(){
    if($(window).scrollTop()>300){
        $('.back').show()
    }
    if($(window).scrollTop()<300){
        $('.back').hide()
    }

});

$(document).ready(function() {
    $(".back").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function () {
    $('.todo-list').on('click','button',  function () {
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        event.stopPropagation();
    });
});


$(document).ready(
    function(){


        $('.add').click(
            function(e){
                e.preventDefault();
                var destination = $('.six_row_first_input').val();
                var city = $('.six_row_two_input').val();


                if( destination === ''){
                    $('.six_row_first_input').addClass('red-border')
                }else {
                    $('.todo-list').append('<div class="todo-list-item">' + '<button class="delete">&times;</button>' + '<div class="destination">' + destination + '</div>' + '<div class="city">' + city + '</div>' + '</div>').addClass('clean-bg');
                }
                });


        $(".six_row_two_input").keyup(function(event){
            if(event.keyCode == 13){
                $(".add").click();
            }
        });


        $('input').focus(function() {
            $(this).val('');
        });


    }
);
